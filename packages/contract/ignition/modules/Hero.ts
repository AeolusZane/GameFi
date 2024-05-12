import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const HeroModule = buildModule("Hero", (m) => {
    const constructor = process.env.NODE_ENV === 'development' ?
        process.env.TEST_NET_ADDRESS :
        process.env.ADDRESS;
        
    const hero = m.contract("Hero", [
        constructor!
    ]);
    return { hero }
});

export default HeroModule;
