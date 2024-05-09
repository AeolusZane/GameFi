import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const LockModule = buildModule("Hero", (m) => {
    const hero = m.contract("Hero", []);
    return { hero }
});

export default LockModule;
