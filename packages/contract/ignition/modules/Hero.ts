import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const FOUNDER_ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const HeroModule = buildModule("Hero", (m) => {
    const hero = m.contract("Hero", [
        FOUNDER_ADDRESS
    ]);
    return { hero }
});

export default HeroModule;
