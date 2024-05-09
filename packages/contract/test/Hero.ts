import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import BigNumber from "bignumber.js";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
async function getBalance(address: string) {
    return await ethers.provider.getBalance(address);
}
describe("HeroTest", function () {
    let OWNER: HardhatEthersSigner;
    let OTHER: HardhatEthersSigner;
    const TEST_ADDRESSES: string[] = [
        '0x1000000000000000000000000000000000000000',
        '0x2000000000000000000000000000000000000000'
    ];
    let hero: Awaited<ReturnType<typeof createHero>>;

    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function createHero() {
        [OWNER, OTHER] = (await ethers.getSigners());
        const Hero = await ethers.getContractFactory("TestHero");
        // 构造函数传参
        const hero = await Hero.deploy(OWNER.address);
        return hero;
    }

    beforeEach(async () => {
        hero = await loadFixture(createHero);
    })
    it("should fail at creating hero case of payment", async function () {
        let e;
        try {
            await hero.createHero(0, {
                value: ethers.parseEther("0.04999")
            });
        } catch (_e: any) {
            e = _e;
        }

        expect(e.message.includes("Please send more money")).to.equal(true);
    });

    it("should get a zero hero array", async function () {
        const heroes = await hero.getHeroes();
        expect(heroes.length).to.equal(0);
    });


    it("should create only one hero", async function () {
        await hero.createHero(0, {
            value: ethers.parseEther("0.05")
        });
        const heroes = await hero.getHeroes();
        expect(heroes.length).to.equal(1);
    });

    it("hero attributes value should be random right", async function () {
        await hero.setRandom(69);
        await hero.createHero(0, {
            value: ethers.parseEther("0.05")
        });
        // [S,H,D,I,M]
        // [S,H,D,I]
        // [S,I,D]
        // [D,I]
        // [D]
        const h = (await hero.getHeroes())[0];
        expect(await hero.getMagic(h)).to.deep.equal(16n)
        expect(await hero.getHealth(h)).to.deep.equal(2n)
        expect(await hero.getStrength(h)).to.deep.equal(6n)
        expect(await hero.getIntellect(h)).to.deep.equal(10n)
        expect(await hero.getDex(h)).to.deep.equal(14n)
    });

    it("should create three hero", async function () {
        await hero.createHero(0, {
            value: ethers.parseEther("0.05")
        });
        await hero.createHero(0, {
            value: ethers.parseEther("0.05")
        });
        await hero.createHero(0, {
            value: ethers.parseEther("0.05")
        });
        const heroes = await hero.getHeroes();
        expect(heroes.length).to.equal(3);
    });

    it("should be constructor feeToSetter address", async function () {
        // 获取合约部署者地址;
        expect(await hero.feeToSetter()).to.equal(OWNER.address);
    })

    it("should be new feeToSetter address", async function () {
        await hero.setFeeToSetter(TEST_ADDRESSES[0]);
        expect(await hero.feeToSetter()).to.equal(TEST_ADDRESSES[0]);
    })

    it("should send money to feeToSetter", async function () {
        const preBalance = await getBalance(TEST_ADDRESSES[0]);
        await hero.setFeeToSetter(TEST_ADDRESSES[0]);
        await hero.createHero(0, { value: ethers.parseEther("0.05") });
        const laterBalance = await getBalance(TEST_ADDRESSES[0]);
        const addValue = laterBalance - preBalance;
        const actual = new BigNumber(addValue.toString()).toPrecision(5);
        const target = new BigNumber(ethers.parseEther("0.05").toString()).toPrecision(5);
        expect(actual).to.equal(target);
    });
})