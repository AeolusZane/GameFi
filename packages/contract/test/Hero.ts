import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import hre from "hardhat";
import BigNumber from "bignumber.js";

const TEST_ADDRESSES: [string, string] = [
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
]
async function getBalance(address: string): Promise<bigint> {
    return await hre.network.provider.request({
        method: "eth_getBalance",
        params: [address],
    }) as bigint;
}
describe("HeroTest", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function createHero() {
        const Hero = await hre.ethers.getContractFactory("TestHero");
        // 构造函数传参
        const hero = await Hero.deploy(TEST_ADDRESSES[0]);

        return hero;
    }

    let hero: Awaited<ReturnType<typeof createHero>>;

    before(async () => {
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
        const hero = await createHero();
        await hero.createHero(0, {
            value: ethers.parseEther("0.05")
        });
        const heroes = await hero.getHeroes();
        expect(heroes.length).to.equal(1);
    });

    it("hero attributes value should be random right", async function () {
        const hero = await createHero();

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
        const hero = await createHero();
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
        const hero = await createHero();
        // 获取合约部署者地址;
        expect(await hero.feeToSetter()).to.equal(TEST_ADDRESSES[0]);
    })

    it("should be new feeToSetter address", async function () {
        const hero = await createHero();
        await hero.setFeeToSetter(TEST_ADDRESSES[1]);
        expect(await hero.feeToSetter()).to.equal(TEST_ADDRESSES[1]);
    })

    it("should send money to feeToSetter", async function () {
        const hero = await createHero();
        const preBalance = await getBalance(TEST_ADDRESSES[1]);
        await hero.setFeeToSetter(TEST_ADDRESSES[1]);
        await hero.createHero(0, { value: ethers.parseEther("0.05") });
        const laterBalance = await getBalance(TEST_ADDRESSES[1]);
        const addValue = laterBalance - preBalance;
        const actual = new BigNumber(addValue.toString()).toPrecision(5);
        const target = new BigNumber(ethers.parseEther("0.05").toString()).toPrecision(5);
        expect(actual).to.equal(target);

    });
})