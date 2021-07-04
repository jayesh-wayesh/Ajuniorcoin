//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Ajuniorcoin is ERC20, Ownable {

    address private _owner;

    constructor() ERC20("Ajuniorcoin", "AJC") {
        _owner = owner();
        _mint(msg.sender, 1000);
        console.log('AJC deployed!');
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }

    function mintTokens() public onlyOwner {
        _mint(_owner, 1000);
    }

    // INR to AJC
    function transferToUser(address recipient, uint256 amount) public {
        require(amount > 0);
        _transfer(_owner, recipient, amount);
    }

    // AJC to INR
    function transferFromUser(address sender, uint256 amount) public {
        require(amount > 0);
        _transfer(sender, _owner, amount);
    }
}