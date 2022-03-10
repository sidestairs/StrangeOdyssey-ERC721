const { assert, expect } = require('chai');
const { ethers, upgrades } = require('hardhat');
const { BigNumber } = require('ethers');

describe('Strange Odyssey', function () {
  let token;
  let account0;
  beforeEach(async function () {
    const StrangeOdyssey = await ethers.getContractFactory('StrangeOdyssey');
    token = await upgrades.deployProxy(StrangeOdyssey);
    await token.deployed();
    [account0] = await ethers.getSigners();
  });

  it('deployment', async function () {
    const tokenAddress = token.address;
    assert.notEqual(tokenAddress, 0x0);
    assert.notEqual(tokenAddress, '');
    assert.notEqual(tokenAddress, null);
    assert.notEqual(tokenAddress, undefined);
  });
});
