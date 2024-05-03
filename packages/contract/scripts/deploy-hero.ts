import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import hre from "hardhat";

async function deployHello() {
    const Hero = await hre.ethers.getContractFactory("Hero");
    const hero = await Hero.deploy();

    return hero;
}

async function main() {
    await loadFixture(deployHello);
    console.log('Deployed Hero contract.')
}

main();

