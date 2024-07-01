// // SPDX-License-Identifier: MIT
pragma solidity =0.8.20;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Hero is ERC721 {
    address public feeToSetter;
    uint256 private _nextTokenId;
    enum Class {
        Mage,
        Healer,
        Barbarian
    }

    event TransferHero(
        address indexed from,
        address indexed to,
        uint hero,
        uint256 tokenId
    );

    mapping(address => uint[]) addressToHeroes;
    mapping(uint => uint) heroToTokenId;

    constructor(address _feeToSetter) ERC721("HeroFactory", "HRO") {
        feeToSetter = _feeToSetter;
    }

    function getHero(uint tokenId) public view returns (uint) {
        uint hero = heroToTokenId[tokenId];
        require(hero != 0, "Hero not found");
        return heroToTokenId[tokenId];
    }
    function _setHeroTokenId(uint tokenId, uint hero) internal {
        heroToTokenId[tokenId] = hero;
    }

    function setFeeToSetter(address _feeToSetter) external {
        require(msg.sender == feeToSetter, "HeroFactory: FORBIDDEN");
        feeToSetter = _feeToSetter;
    }

    function generateRamdom() public view virtual returns (uint) {
        return
            uint(
                keccak256(
                    abi.encodePacked(
                        block.prevrandao,
                        block.timestamp,
                        msg.sender
                    )
                )
            );
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        super.transferFrom(from, to, tokenId);
        uint hero = getHero(tokenId);
        transferHero(hero, to);
        emit TransferHero(from, to, hero, tokenId);
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

    function transferHero(uint hero, address other) internal {
        // 将sender的hero转移到other
        uint[] storage heroes = addressToHeroes[msg.sender];
        uint len = heroes.length;

        for (uint i = 0; i < len; i++) {
            // 只转移一个hero
            if (heroes[i] == hero) {
                heroes[i] = heroes[len - 1];
                break;
            }
        }
        heroes.pop();
        addressToHeroes[other].push(hero);
    }

    // payable：表示这个函数可以接受以太币
    function createHero(Class _class) public payable {
        require(
            msg.value >= 0.001 ether,
            "Please send more money, minimum 0.001 ether"
        );
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
        _mintHero(hero);
    }

    function _mintHero(uint hero) internal {
        uint256 tokenId = _nextTokenId++;
        _mint(msg.sender, tokenId);
        _setHeroTokenId(tokenId, hero);
        emit TransferHero(address(0), msg.sender, hero, tokenId);
    }
}
