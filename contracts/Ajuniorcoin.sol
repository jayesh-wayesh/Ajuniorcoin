//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Ajuniorcoin is ERC20, Ownable {

    constructor() ERC20("Ajuniorcoin", "AJC") {
        _mint(msg.sender, 20);
        console.log('AJC deployed!');
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }

    function mintTokens() public onlyOwner {
        console.log('msg.sender : ', msg.sender);
        console.log('balance earlier : ', balanceOf(msg.sender));
        _mint(msg.sender, 20);
        console.log('balance after minting : ', balanceOf(msg.sender));
        console.log('owner', owner());
    }
}