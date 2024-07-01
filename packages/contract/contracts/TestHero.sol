// SPDX-License-Identifier: MIT
pragma solidity =0.8.20;

import "./Hero.sol";

contract TestHero is Hero {
    uint random;
    constructor(address _feeToSetter) Hero(_feeToSetter) {
    }

    function generateRamdom() public view override returns (uint) {
        return random;
    }
    function setRandom(uint _random) public {
        random = _random;
    }
}
