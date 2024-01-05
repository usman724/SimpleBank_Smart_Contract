// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleBank {
    uint public totalBalance;
    mapping(address => uint) private balanceByAddress;

    constructor() {
        totalBalance = 0;
    }

    function getTotalBalance() external view returns (uint) {
        return totalBalance;
    }

    function viewMyBalance() external view returns (uint) {
        return balanceByAddress[msg.sender];
    }

    function deposit() payable external {
        uint amount = msg.value;
        balanceByAddress[msg.sender] += amount;
        totalBalance += amount;
    }

    function withdraw(uint amount) external {
        address payable withdrawAddress = payable(msg.sender);
        uint balances = balanceByAddress[msg.sender];
        require(balances >= amount, "Amount must be less than or equal to the deposited amount");
        withdrawAddress.transfer(amount);
        balanceByAddress[withdrawAddress] -= amount;
        totalBalance -= amount;
    }
}
