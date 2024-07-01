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

    describe("HeroFactory ERC721 Metadata", function () {
        it("check symbol", async function () {
            expect(await hero.symbol()).to.equal("HRO");
        });

        it("check name", async function () {
            expect(await hero.name()).to.equal("HeroFactory");
        });
    });

    describe("create Hero", function () {
        it("should fail at creating hero case of payment", async function () {
            let e;
            try {
                await hero.createHero(0, {
                    value: ethers.parseEther("0.00099")
                });
            } catch (_e: any) {
                e = _e;
            }

            expect(e.message.includes("Please send more money, minimum 0.001 ether")).to.equal(true);
        });

        it("should get a zero hero array", async function () {
            const heroes = await hero.getHeroes();
            expect(heroes.length).to.equal(0);
        });


        it("should create only one hero", async function () {
            await hero.createHero(0, {
                value: ethers.parseEther("0.0012")
            });
            const heroes = await hero.getHeroes();
            const hero0 = await hero.getHero(0);
            expect(heroes.length).to.equal(1);
            expect(hero0).to.equal(heroes[0]);
        });

        it("create hero event should be emitted", async function () {
            await hero.setRandom(69);
            await hero.createHero(0, {
                value: ethers.parseEther("0.0012")
            })
            const hero0 = await hero.getHero(0); // 获取固定随机值创建的hero属性

            const tokenId = 1;

            await expect(hero.createHero(0, {
                value: ethers.parseEther("0.0012")
            }))
                .emit(hero, "TransferHero")
                .withArgs(BigNumber(0), OWNER.address, hero0, tokenId);
        })

        it("hero attributes value should be random right", async function () {
            await hero.setRandom(69);
            await hero.createHero(0, {
                value: ethers.parseEther("0.0012")
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
                value: ethers.parseEther("0.001")
            });
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });
            const heroes = await hero.getHeroes();
            expect(heroes.length).to.equal(3);
        });

        it("hero token Id should be right", async function () {
            await hero.setRandom(69);
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });
            await hero.setRandom(42);
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });
            await hero.setRandom(33);
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });

            const tokenId0 = 0;
            const tokenId1 = 1;
            const tokenId2 = 2;
            const heroes = await hero.getHeroes();
            const hero0 = await hero.getHero(tokenId0);
            const hero1 = await hero.getHero(tokenId1);
            const hero2 = await hero.getHero(tokenId2);
            expect(heroes[0]).to.equal(hero0);
            expect(heroes[1]).to.equal(hero1);
            expect(heroes[2]).to.equal(hero2);

            // hero归属检查
            expect(await hero.ownerOf(tokenId0)).to.equal(OWNER.address);
            expect(await hero.ownerOf(tokenId1)).to.equal(OWNER.address);
            expect(await hero.ownerOf(tokenId2)).to.equal(OWNER.address);
        })

        it("hero not found error", async function () {
            await hero.setRandom(69);
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });
            const unMintedTokenId = 1;
            try {
                await hero.getHero(unMintedTokenId);
            } catch (e: any) {
                expect(e.message.includes("Hero not found")).to.equal(true);
            }
        })
    })

    describe("FeeToSetter", function () {
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

    describe("TransferHero", function () {
        it("need approve before transfer", async function () {
            await hero.setRandom(69);
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });
            const tokenId0 = 0;

            try {
                await hero.transferFrom(OWNER.address, OTHER.address, tokenId0);
            } catch (e: any) {
                expect(e.message.includes("ERC721: transfer caller is not owner nor approved")).to.equal(true);
            }
        })

        it("should transfer hero to other address", async function () {
            await hero.setRandom(69);
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });
            await hero.setRandom(52);
            await hero.createHero(0, {
                value: ethers.parseEther("0.001")
            });

            const tokenId0 = 0;

            hero.approve(OWNER.address, 0);

            const heroes = await hero.getHeroes();
            await expect(hero.transferFrom(OWNER.address, OTHER.address, tokenId0))
                .emit(hero, "TransferHero")
                .withArgs(OWNER.address, OTHER.address, heroes[0], tokenId0);

            const otherHeroes = await hero.connect(OTHER).getHeroes();
            const newHeroes = await hero.getHeroes();
            /**
             * heroes列表更新
             * 1. 从OWNER的heroes列表中删除
             * 2. 添加到OTHER的heroes列表中
             * 3. 保持其他hero不变
             */
            expect(newHeroes.length).to.equal(1);
            expect(otherHeroes.length).to.equal(1);
            expect(otherHeroes[0]).to.equal(heroes[0]);
            expect(newHeroes[0]).to.equal(heroes[1]);

            /**
             * tokenId归属更新
             */
            expect(await hero.ownerOf(0)).to.equal(OTHER.address);
            expect(await hero.ownerOf(1)).to.equal(OWNER.address);
        })
    });
})