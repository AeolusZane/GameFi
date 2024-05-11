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
describe("GasTest", function () {
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
    it("test createHero gas", async function () {
        for (let i = 0; i < 100; i++) {
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });
        }
    });

    it("test setFeeToSetter gas", async function () {
        for (let i = 0; i < 100; i++) {
            if (i % 2 === 0) {
                await hero.setFeeToSetter(OTHER.address);
            } else {
                await hero.connect(OTHER).setFeeToSetter(OWNER.address);
            }
        }
    });

    it("test transferHero gas", async function () {
        await hero.createHero(0, {
            value: ethers.parseEther("0.001")
        });
        const heroes = await hero.getHeroes();
        for (let i = 0; i < 100; i++) {
            if (i % 2 === 0) {
                await hero.transferHero(heroes[0], OTHER.address);
            } else {
                await hero.connect(OTHER).transferHero(heroes[0], OWNER.address);
            }
        }
    })
})