// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract samplecontract {
    bytes32 public storedHash;

    // 초기 설정
    constructor(bytes32 initialHash) {
        storedHash = initialHash;
    }

    // Setter
    function setHash(bytes32 newHash) public {
        storedHash = newHash;
    }

    // Getter
    function getHash() public view returns (bytes32) {
        return storedHash;
    }

}
