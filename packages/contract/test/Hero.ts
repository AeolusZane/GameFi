import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import hre from "hardhat";

describe("HeroTest", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function createHero() {
        const Hero = await hre.ethers.getContractFactory("TestHero");
        const hero = await Hero.deploy();

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
})