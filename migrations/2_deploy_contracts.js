const samplecontract = artifacts.require("samplecontract");

module.exports = function (deployer) {

  // 임의의 Data를 keccak256을 통해 256비트 해쉬함수로 만들고 이를 초기값으로 하여 배포.
  const initialHash = web3.utils.keccak256("some initial data");
  
  deployer.deploy(samplecontract, initialHash);
  
};
