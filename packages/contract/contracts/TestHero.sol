// // SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Hero.sol";

contract TestHero is Hero {
    uint random;
    function generateRamdom() public view override returns (uint) {
        return random;
    }
    function setRandom(uint _random) public {
        random = _random;
    }
}
