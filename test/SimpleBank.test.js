const SimpleBank = artifacts.require("SimpleBank");

contract('SimpleBank', (accounts) => {


    
  it('should allow deposit and update balance', async () => {
    const instance = await SimpleBank.deployed();
    await instance.deposit({ from: accounts[0], value: web3.utils.toWei("1", "ether") });

    const balance = await instance.viewMyBalance({ from: accounts[0] });
    
    assert.equal(balance.toString(), web3.utils.toWei("1", "ether"), "The balance is incorrect");
  });




  it('should allow withdrawal and update balance', async () => {
    const instance = await SimpleBank.deployed();
  
    await instance.deposit({ from: accounts[0], value: web3.utils.toWei("1", "ether") });
    await instance.withdraw(web3.utils.toWei("0.5", "ether"), { from: accounts[0] });
    const balance = await instance.viewMyBalance({ from: accounts[0] });
    
    assert.equal(balance.toString(), web3.utils.toWei("0.5", "ether"), "The balance is incorrect after withdrawal");
  });

});