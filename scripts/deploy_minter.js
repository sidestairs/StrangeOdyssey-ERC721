const hre = require('hardhat');

async function main() {
  const Minter = await hre.ethers.getContractFactory('Minter');
  const instance = await Minter.deploy();

  await instance.deployed();

  console.log('Minter deployed to:', instance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
