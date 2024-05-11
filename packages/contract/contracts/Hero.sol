// // SPDX-License-Identifier: MIT
pragma solidity =0.8.15;

contract Hero {
    address public feeToSetter;
    enum Class {
        Mage,
        Healer,
        Barbarian
    }

    mapping(address => uint[]) addressToHeroes;

    constructor(address _feeToSetter) {
        feeToSetter = _feeToSetter;
    }

    function setFeeToSetter(address _feeToSetter) external {
        require(msg.sender == feeToSetter, 'UniswapV2: FORBIDDEN');
        feeToSetter = _feeToSetter;
    }

    function generateRamdom() public view virtual returns (uint) {
        return
            uint(
                keccak256(
                    abi.encodePacked(
                        block.difficulty,
                        block.timestamp,
                        msg.sender
                    )
                )
            );
    }

    function getHeroType(uint hero) public pure returns (Class) {
        return Class(hero & 0x3);
    }

    // memory：表示这个数组是临时的，不会被永久存储
    // store：表示这个数组会被永久存储(在合约上)
    function getHeroes() public view returns (uint[] memory) {
        return addressToHeroes[msg.sender];
    }

    function getStrength(uint hero) public pure returns (uint32) {
        return uint32((hero >> 2) & 0x1F);
    }

    function getHealth(uint hero) public pure returns (uint32) {
        return uint32((hero >> 7) & 0x1F);
    }

    function getDex(uint hero) public pure returns (uint32) {
        return uint32((hero >> 12) & 0x1F);
    }

    function getIntellect(uint hero) public pure returns (uint32) {
        return uint32((hero >> 17) & 0x1F);
    }

    function getMagic(uint hero) public pure returns (uint32) {
        return uint32((hero >> 22) & 0x1F);
    }

    // payable：表示这个函数可以接受以太币
    function createHero(Class _class) public payable {
        require(msg.value >= 0.001 ether, "Please send more money, minimum 0.001 ether");
        payable(feeToSetter).transfer(msg.value);

        // strength, health, dexterity, intellect, magic
        uint[] memory stats = new uint[](5);
        stats[0] = 2;
        stats[1] = 7;
        stats[2] = 12;
        stats[3] = 17;
        stats[4] = 22;

        uint len = 5;
        uint hero = uint(_class);

        do {
            uint pos = generateRamdom() % len;
            uint value = (generateRamdom() % (13 + len)) + 1;

            hero |= value << stats[pos];

            len--;
            stats[pos] = stats[len];
        } while (len > 0);

        addressToHeroes[msg.sender].push(hero);
    }
}
