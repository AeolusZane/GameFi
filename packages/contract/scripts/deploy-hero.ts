import {
    loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
const FOUNDER_ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
async function deployHello() {
    const Hero = await ethers.getContractFactory("Hero");
    const hero = await Hero.deploy(FOUNDER_ADDRESS);

    return hero;
}

async function main() {
    await loadFixture(deployHello);
    console.log('Deployed Hero contract.')
}

main();

