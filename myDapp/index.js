const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/c1b6e07c055843a28bb992e4c5e889bf');


const contractABI = [{
    "contractName": "samplecontract",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "initialHash",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "storedHash",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "newHash",
                    "type": "bytes32"
                }
            ],
            "name": "setHash",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getHash",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.21+commit.d9974bed\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"initialHash\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"getHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"newHash\",\"type\":\"bytes32\"}],\"name\":\"setHash\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"storedHash\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/samplecontract.sol\":\"samplecontract\"},\"evmVersion\":\"shanghai\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/samplecontract.sol\":{\"keccak256\":\"0x4839a8ddf8933fd7f2ed0715e345d03106d43f31ada1a79793be305a47837936\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb521654d6e158aa92e0efb8db8fb230cc7cb470c11897be7147ce63ef1b5fb4\",\"dweb:/ipfs/QmYowE1YrkL9NPrDGe2JojvySPaWyC86WeGx9t7ZNT4RUD\"]}},\"version\":1}",
    "bytecode": "0x608060405234801561000f575f80fd5b5060405161021d38038061021d83398181016040528101906100319190610074565b805f819055505061009f565b5f80fd5b5f819050919050565b61005381610041565b811461005d575f80fd5b50565b5f8151905061006e8161004a565b92915050565b5f602082840312156100895761008861003d565b5b5f61009684828501610060565b91505092915050565b610171806100ac5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c80630c4c428514610043578063b0da51951461005f578063d13319c41461007d575b5f80fd5b61005d600480360381019061005891906100e8565b61009b565b005b6100676100a4565b6040516100749190610122565b60405180910390f35b6100856100a9565b6040516100929190610122565b60405180910390f35b805f8190555050565b5f5481565b5f8054905090565b5f80fd5b5f819050919050565b6100c7816100b5565b81146100d1575f80fd5b50565b5f813590506100e2816100be565b92915050565b5f602082840312156100fd576100fc6100b1565b5b5f61010a848285016100d4565b91505092915050565b61011c816100b5565b82525050565b5f6020820190506101355f830184610113565b9291505056fea2646970667358221220f8b8f41a6c1d517194033cd9146253470cc9778e1c8909e29b80cb384018c67764736f6c63430008150033",
    "deployedBytecode": "0x608060405234801561000f575f80fd5b506004361061003f575f3560e01c80630c4c428514610043578063b0da51951461005f578063d13319c41461007d575b5f80fd5b61005d600480360381019061005891906100e8565b61009b565b005b6100676100a4565b6040516100749190610122565b60405180910390f35b6100856100a9565b6040516100929190610122565b60405180910390f35b805f8190555050565b5f5481565b5f8054905090565b5f80fd5b5f819050919050565b6100c7816100b5565b81146100d1575f80fd5b50565b5f813590506100e2816100be565b92915050565b5f602082840312156100fd576100fc6100b1565b5b5f61010a848285016100d4565b91505092915050565b61011c816100b5565b82525050565b5f6020820190506101355f830184610113565b9291505056fea2646970667358221220f8b8f41a6c1d517194033cd9146253470cc9778e1c8909e29b80cb384018c67764736f6c63430008150033",
    "immutableReferences": {},
    "generatedSources": [
        {
            "ast": {
                "nativeSrc": "0:1048:1",
                "nodeType": "YulBlock",
                "src": "0:1048:1",
                "statements": [
                    {
                        "body": {
                            "nativeSrc": "47:35:1",
                            "nodeType": "YulBlock",
                            "src": "47:35:1",
                            "statements": [
                                {
                                    "nativeSrc": "57:19:1",
                                    "nodeType": "YulAssignment",
                                    "src": "57:19:1",
                                    "value": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nativeSrc": "73:2:1",
                                                "nodeType": "YulLiteral",
                                                "src": "73:2:1",
                                                "type": "",
                                                "value": "64"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "67:5:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "67:5:1"
                                        },
                                        "nativeSrc": "67:9:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "67:9:1"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "memPtr",
                                            "nativeSrc": "57:6:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "57:6:1"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "allocate_unbounded",
                        "nativeSrc": "7:75:1",
                        "nodeType": "YulFunctionDefinition",
                        "returnVariables": [
                            {
                                "name": "memPtr",
                                "nativeSrc": "40:6:1",
                                "nodeType": "YulTypedName",
                                "src": "40:6:1",
                                "type": ""
                            }
                        ],
                        "src": "7:75:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "177:28:1",
                            "nodeType": "YulBlock",
                            "src": "177:28:1",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nativeSrc": "194:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "194:1:1",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nativeSrc": "197:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "197:1:1",
                                                "type": "",
                                                "value": "0"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "revert",
                                            "nativeSrc": "187:6:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "187:6:1"
                                        },
                                        "nativeSrc": "187:12:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "187:12:1"
                                    },
                                    "nativeSrc": "187:12:1",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "187:12:1"
                                }
                            ]
                        },
                        "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                        "nativeSrc": "88:117:1",
                        "nodeType": "YulFunctionDefinition",
                        "src": "88:117:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "300:28:1",
                            "nodeType": "YulBlock",
                            "src": "300:28:1",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nativeSrc": "317:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "317:1:1",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nativeSrc": "320:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "320:1:1",
                                                "type": "",
                                                "value": "0"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "revert",
                                            "nativeSrc": "310:6:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "310:6:1"
                                        },
                                        "nativeSrc": "310:12:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "310:12:1"
                                    },
                                    "nativeSrc": "310:12:1",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "310:12:1"
                                }
                            ]
                        },
                        "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                        "nativeSrc": "211:117:1",
                        "nodeType": "YulFunctionDefinition",
                        "src": "211:117:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "379:32:1",
                            "nodeType": "YulBlock",
                            "src": "379:32:1",
                            "statements": [
                                {
                                    "nativeSrc": "389:16:1",
                                    "nodeType": "YulAssignment",
                                    "src": "389:16:1",
                                    "value": {
                                        "name": "value",
                                        "nativeSrc": "400:5:1",
                                        "nodeType": "YulIdentifier",
                                        "src": "400:5:1"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "cleaned",
                                            "nativeSrc": "389:7:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "389:7:1"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "cleanup_t_bytes32",
                        "nativeSrc": "334:77:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nativeSrc": "361:5:1",
                                "nodeType": "YulTypedName",
                                "src": "361:5:1",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "cleaned",
                                "nativeSrc": "371:7:1",
                                "nodeType": "YulTypedName",
                                "src": "371:7:1",
                                "type": ""
                            }
                        ],
                        "src": "334:77:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "460:79:1",
                            "nodeType": "YulBlock",
                            "src": "460:79:1",
                            "statements": [
                                {
                                    "body": {
                                        "nativeSrc": "517:16:1",
                                        "nodeType": "YulBlock",
                                        "src": "517:16:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "526:1:1",
                                                            "nodeType": "YulLiteral",
                                                            "src": "526:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "529:1:1",
                                                            "nodeType": "YulLiteral",
                                                            "src": "529:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "revert",
                                                        "nativeSrc": "519:6:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "519:6:1"
                                                    },
                                                    "nativeSrc": "519:12:1",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "519:12:1"
                                                },
                                                "nativeSrc": "519:12:1",
                                                "nodeType": "YulExpressionStatement",
                                                "src": "519:12:1"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nativeSrc": "483:5:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "483:5:1"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "value",
                                                                "nativeSrc": "508:5:1",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "508:5:1"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "cleanup_t_bytes32",
                                                            "nativeSrc": "490:17:1",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "490:17:1"
                                                        },
                                                        "nativeSrc": "490:24:1",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "490:24:1"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "eq",
                                                    "nativeSrc": "480:2:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "480:2:1"
                                                },
                                                "nativeSrc": "480:35:1",
                                                "nodeType": "YulFunctionCall",
                                                "src": "480:35:1"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "iszero",
                                            "nativeSrc": "473:6:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "473:6:1"
                                        },
                                        "nativeSrc": "473:43:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "473:43:1"
                                    },
                                    "nativeSrc": "470:63:1",
                                    "nodeType": "YulIf",
                                    "src": "470:63:1"
                                }
                            ]
                        },
                        "name": "validator_revert_t_bytes32",
                        "nativeSrc": "417:122:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nativeSrc": "453:5:1",
                                "nodeType": "YulTypedName",
                                "src": "453:5:1",
                                "type": ""
                            }
                        ],
                        "src": "417:122:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "608:80:1",
                            "nodeType": "YulBlock",
                            "src": "608:80:1",
                            "statements": [
                                {
                                    "nativeSrc": "618:22:1",
                                    "nodeType": "YulAssignment",
                                    "src": "618:22:1",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "offset",
                                                "nativeSrc": "633:6:1",
                                                "nodeType": "YulIdentifier",
                                                "src": "633:6:1"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "627:5:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "627:5:1"
                                        },
                                        "nativeSrc": "627:13:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "627:13:1"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "value",
                                            "nativeSrc": "618:5:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "618:5:1"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nativeSrc": "676:5:1",
                                                "nodeType": "YulIdentifier",
                                                "src": "676:5:1"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "validator_revert_t_bytes32",
                                            "nativeSrc": "649:26:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "649:26:1"
                                        },
                                        "nativeSrc": "649:33:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "649:33:1"
                                    },
                                    "nativeSrc": "649:33:1",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "649:33:1"
                                }
                            ]
                        },
                        "name": "abi_decode_t_bytes32_fromMemory",
                        "nativeSrc": "545:143:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "offset",
                                "nativeSrc": "586:6:1",
                                "nodeType": "YulTypedName",
                                "src": "586:6:1",
                                "type": ""
                            },
                            {
                                "name": "end",
                                "nativeSrc": "594:3:1",
                                "nodeType": "YulTypedName",
                                "src": "594:3:1",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "value",
                                "nativeSrc": "602:5:1",
                                "nodeType": "YulTypedName",
                                "src": "602:5:1",
                                "type": ""
                            }
                        ],
                        "src": "545:143:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "771:274:1",
                            "nodeType": "YulBlock",
                            "src": "771:274:1",
                            "statements": [
                                {
                                    "body": {
                                        "nativeSrc": "817:83:1",
                                        "nodeType": "YulBlock",
                                        "src": "817:83:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "functionName": {
                                                        "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                        "nativeSrc": "819:77:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "819:77:1"
                                                    },
                                                    "nativeSrc": "819:79:1",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "819:79:1"
                                                },
                                                "nativeSrc": "819:79:1",
                                                "nodeType": "YulExpressionStatement",
                                                "src": "819:79:1"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "dataEnd",
                                                        "nativeSrc": "792:7:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "792:7:1"
                                                    },
                                                    {
                                                        "name": "headStart",
                                                        "nativeSrc": "801:9:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "801:9:1"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "sub",
                                                    "nativeSrc": "788:3:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "788:3:1"
                                                },
                                                "nativeSrc": "788:23:1",
                                                "nodeType": "YulFunctionCall",
                                                "src": "788:23:1"
                                            },
                                            {
                                                "kind": "number",
                                                "nativeSrc": "813:2:1",
                                                "nodeType": "YulLiteral",
                                                "src": "813:2:1",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "slt",
                                            "nativeSrc": "784:3:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "784:3:1"
                                        },
                                        "nativeSrc": "784:32:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "784:32:1"
                                    },
                                    "nativeSrc": "781:119:1",
                                    "nodeType": "YulIf",
                                    "src": "781:119:1"
                                },
                                {
                                    "nativeSrc": "910:128:1",
                                    "nodeType": "YulBlock",
                                    "src": "910:128:1",
                                    "statements": [
                                        {
                                            "nativeSrc": "925:15:1",
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "925:15:1",
                                            "value": {
                                                "kind": "number",
                                                "nativeSrc": "939:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "939:1:1",
                                                "type": "",
                                                "value": "0"
                                            },
                                            "variables": [
                                                {
                                                    "name": "offset",
                                                    "nativeSrc": "929:6:1",
                                                    "nodeType": "YulTypedName",
                                                    "src": "929:6:1",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "nativeSrc": "954:74:1",
                                            "nodeType": "YulAssignment",
                                            "src": "954:74:1",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "headStart",
                                                                "nativeSrc": "1000:9:1",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1000:9:1"
                                                            },
                                                            {
                                                                "name": "offset",
                                                                "nativeSrc": "1011:6:1",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1011:6:1"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nativeSrc": "996:3:1",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "996:3:1"
                                                        },
                                                        "nativeSrc": "996:22:1",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "996:22:1"
                                                    },
                                                    {
                                                        "name": "dataEnd",
                                                        "nativeSrc": "1020:7:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1020:7:1"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "abi_decode_t_bytes32_fromMemory",
                                                    "nativeSrc": "964:31:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "964:31:1"
                                                },
                                                "nativeSrc": "964:64:1",
                                                "nodeType": "YulFunctionCall",
                                                "src": "964:64:1"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "954:6:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "954:6:1"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_decode_tuple_t_bytes32_fromMemory",
                        "nativeSrc": "694:351:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "headStart",
                                "nativeSrc": "741:9:1",
                                "nodeType": "YulTypedName",
                                "src": "741:9:1",
                                "type": ""
                            },
                            {
                                "name": "dataEnd",
                                "nativeSrc": "752:7:1",
                                "nodeType": "YulTypedName",
                                "src": "752:7:1",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "value0",
                                "nativeSrc": "764:6:1",
                                "nodeType": "YulTypedName",
                                "src": "764:6:1",
                                "type": ""
                            }
                        ],
                        "src": "694:351:1"
                    }
                ]
            },
            "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes32(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_bytes32(value) {\n        if iszero(eq(value, cleanup_t_bytes32(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes32_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes32(value)\n    }\n\n    function abi_decode_tuple_t_bytes32_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes32_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
            "id": 1,
            "language": "Yul",
            "name": "#utility.yul"
        }
    ],
    "deployedGeneratedSources": [
        {
            "ast": {
                "nativeSrc": "0:1374:1",
                "nodeType": "YulBlock",
                "src": "0:1374:1",
                "statements": [
                    {
                        "body": {
                            "nativeSrc": "47:35:1",
                            "nodeType": "YulBlock",
                            "src": "47:35:1",
                            "statements": [
                                {
                                    "nativeSrc": "57:19:1",
                                    "nodeType": "YulAssignment",
                                    "src": "57:19:1",
                                    "value": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nativeSrc": "73:2:1",
                                                "nodeType": "YulLiteral",
                                                "src": "73:2:1",
                                                "type": "",
                                                "value": "64"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mload",
                                            "nativeSrc": "67:5:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "67:5:1"
                                        },
                                        "nativeSrc": "67:9:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "67:9:1"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "memPtr",
                                            "nativeSrc": "57:6:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "57:6:1"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "allocate_unbounded",
                        "nativeSrc": "7:75:1",
                        "nodeType": "YulFunctionDefinition",
                        "returnVariables": [
                            {
                                "name": "memPtr",
                                "nativeSrc": "40:6:1",
                                "nodeType": "YulTypedName",
                                "src": "40:6:1",
                                "type": ""
                            }
                        ],
                        "src": "7:75:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "177:28:1",
                            "nodeType": "YulBlock",
                            "src": "177:28:1",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nativeSrc": "194:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "194:1:1",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nativeSrc": "197:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "197:1:1",
                                                "type": "",
                                                "value": "0"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "revert",
                                            "nativeSrc": "187:6:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "187:6:1"
                                        },
                                        "nativeSrc": "187:12:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "187:12:1"
                                    },
                                    "nativeSrc": "187:12:1",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "187:12:1"
                                }
                            ]
                        },
                        "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                        "nativeSrc": "88:117:1",
                        "nodeType": "YulFunctionDefinition",
                        "src": "88:117:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "300:28:1",
                            "nodeType": "YulBlock",
                            "src": "300:28:1",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "kind": "number",
                                                "nativeSrc": "317:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "317:1:1",
                                                "type": "",
                                                "value": "0"
                                            },
                                            {
                                                "kind": "number",
                                                "nativeSrc": "320:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "320:1:1",
                                                "type": "",
                                                "value": "0"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "revert",
                                            "nativeSrc": "310:6:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "310:6:1"
                                        },
                                        "nativeSrc": "310:12:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "310:12:1"
                                    },
                                    "nativeSrc": "310:12:1",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "310:12:1"
                                }
                            ]
                        },
                        "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                        "nativeSrc": "211:117:1",
                        "nodeType": "YulFunctionDefinition",
                        "src": "211:117:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "379:32:1",
                            "nodeType": "YulBlock",
                            "src": "379:32:1",
                            "statements": [
                                {
                                    "nativeSrc": "389:16:1",
                                    "nodeType": "YulAssignment",
                                    "src": "389:16:1",
                                    "value": {
                                        "name": "value",
                                        "nativeSrc": "400:5:1",
                                        "nodeType": "YulIdentifier",
                                        "src": "400:5:1"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "cleaned",
                                            "nativeSrc": "389:7:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "389:7:1"
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "cleanup_t_bytes32",
                        "nativeSrc": "334:77:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nativeSrc": "361:5:1",
                                "nodeType": "YulTypedName",
                                "src": "361:5:1",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "cleaned",
                                "nativeSrc": "371:7:1",
                                "nodeType": "YulTypedName",
                                "src": "371:7:1",
                                "type": ""
                            }
                        ],
                        "src": "334:77:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "460:79:1",
                            "nodeType": "YulBlock",
                            "src": "460:79:1",
                            "statements": [
                                {
                                    "body": {
                                        "nativeSrc": "517:16:1",
                                        "nodeType": "YulBlock",
                                        "src": "517:16:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "526:1:1",
                                                            "nodeType": "YulLiteral",
                                                            "src": "526:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nativeSrc": "529:1:1",
                                                            "nodeType": "YulLiteral",
                                                            "src": "529:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "revert",
                                                        "nativeSrc": "519:6:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "519:6:1"
                                                    },
                                                    "nativeSrc": "519:12:1",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "519:12:1"
                                                },
                                                "nativeSrc": "519:12:1",
                                                "nodeType": "YulExpressionStatement",
                                                "src": "519:12:1"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nativeSrc": "483:5:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "483:5:1"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "value",
                                                                "nativeSrc": "508:5:1",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "508:5:1"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "cleanup_t_bytes32",
                                                            "nativeSrc": "490:17:1",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "490:17:1"
                                                        },
                                                        "nativeSrc": "490:24:1",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "490:24:1"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "eq",
                                                    "nativeSrc": "480:2:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "480:2:1"
                                                },
                                                "nativeSrc": "480:35:1",
                                                "nodeType": "YulFunctionCall",
                                                "src": "480:35:1"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "iszero",
                                            "nativeSrc": "473:6:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "473:6:1"
                                        },
                                        "nativeSrc": "473:43:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "473:43:1"
                                    },
                                    "nativeSrc": "470:63:1",
                                    "nodeType": "YulIf",
                                    "src": "470:63:1"
                                }
                            ]
                        },
                        "name": "validator_revert_t_bytes32",
                        "nativeSrc": "417:122:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nativeSrc": "453:5:1",
                                "nodeType": "YulTypedName",
                                "src": "453:5:1",
                                "type": ""
                            }
                        ],
                        "src": "417:122:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "597:87:1",
                            "nodeType": "YulBlock",
                            "src": "597:87:1",
                            "statements": [
                                {
                                    "nativeSrc": "607:29:1",
                                    "nodeType": "YulAssignment",
                                    "src": "607:29:1",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "offset",
                                                "nativeSrc": "629:6:1",
                                                "nodeType": "YulIdentifier",
                                                "src": "629:6:1"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "calldataload",
                                            "nativeSrc": "616:12:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "616:12:1"
                                        },
                                        "nativeSrc": "616:20:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "616:20:1"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "value",
                                            "nativeSrc": "607:5:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "607:5:1"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value",
                                                "nativeSrc": "672:5:1",
                                                "nodeType": "YulIdentifier",
                                                "src": "672:5:1"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "validator_revert_t_bytes32",
                                            "nativeSrc": "645:26:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "645:26:1"
                                        },
                                        "nativeSrc": "645:33:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "645:33:1"
                                    },
                                    "nativeSrc": "645:33:1",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "645:33:1"
                                }
                            ]
                        },
                        "name": "abi_decode_t_bytes32",
                        "nativeSrc": "545:139:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "offset",
                                "nativeSrc": "575:6:1",
                                "nodeType": "YulTypedName",
                                "src": "575:6:1",
                                "type": ""
                            },
                            {
                                "name": "end",
                                "nativeSrc": "583:3:1",
                                "nodeType": "YulTypedName",
                                "src": "583:3:1",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "value",
                                "nativeSrc": "591:5:1",
                                "nodeType": "YulTypedName",
                                "src": "591:5:1",
                                "type": ""
                            }
                        ],
                        "src": "545:139:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "756:263:1",
                            "nodeType": "YulBlock",
                            "src": "756:263:1",
                            "statements": [
                                {
                                    "body": {
                                        "nativeSrc": "802:83:1",
                                        "nodeType": "YulBlock",
                                        "src": "802:83:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [],
                                                    "functionName": {
                                                        "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                        "nativeSrc": "804:77:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "804:77:1"
                                                    },
                                                    "nativeSrc": "804:79:1",
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "804:79:1"
                                                },
                                                "nativeSrc": "804:79:1",
                                                "nodeType": "YulExpressionStatement",
                                                "src": "804:79:1"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "dataEnd",
                                                        "nativeSrc": "777:7:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "777:7:1"
                                                    },
                                                    {
                                                        "name": "headStart",
                                                        "nativeSrc": "786:9:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "786:9:1"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "sub",
                                                    "nativeSrc": "773:3:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "773:3:1"
                                                },
                                                "nativeSrc": "773:23:1",
                                                "nodeType": "YulFunctionCall",
                                                "src": "773:23:1"
                                            },
                                            {
                                                "kind": "number",
                                                "nativeSrc": "798:2:1",
                                                "nodeType": "YulLiteral",
                                                "src": "798:2:1",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "slt",
                                            "nativeSrc": "769:3:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "769:3:1"
                                        },
                                        "nativeSrc": "769:32:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "769:32:1"
                                    },
                                    "nativeSrc": "766:119:1",
                                    "nodeType": "YulIf",
                                    "src": "766:119:1"
                                },
                                {
                                    "nativeSrc": "895:117:1",
                                    "nodeType": "YulBlock",
                                    "src": "895:117:1",
                                    "statements": [
                                        {
                                            "nativeSrc": "910:15:1",
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "910:15:1",
                                            "value": {
                                                "kind": "number",
                                                "nativeSrc": "924:1:1",
                                                "nodeType": "YulLiteral",
                                                "src": "924:1:1",
                                                "type": "",
                                                "value": "0"
                                            },
                                            "variables": [
                                                {
                                                    "name": "offset",
                                                    "nativeSrc": "914:6:1",
                                                    "nodeType": "YulTypedName",
                                                    "src": "914:6:1",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "nativeSrc": "939:63:1",
                                            "nodeType": "YulAssignment",
                                            "src": "939:63:1",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "headStart",
                                                                "nativeSrc": "974:9:1",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "974:9:1"
                                                            },
                                                            {
                                                                "name": "offset",
                                                                "nativeSrc": "985:6:1",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "985:6:1"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nativeSrc": "970:3:1",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "970:3:1"
                                                        },
                                                        "nativeSrc": "970:22:1",
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "970:22:1"
                                                    },
                                                    {
                                                        "name": "dataEnd",
                                                        "nativeSrc": "994:7:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "994:7:1"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "abi_decode_t_bytes32",
                                                    "nativeSrc": "949:20:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "949:20:1"
                                                },
                                                "nativeSrc": "949:53:1",
                                                "nodeType": "YulFunctionCall",
                                                "src": "949:53:1"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "value0",
                                                    "nativeSrc": "939:6:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "939:6:1"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "name": "abi_decode_tuple_t_bytes32",
                        "nativeSrc": "690:329:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "headStart",
                                "nativeSrc": "726:9:1",
                                "nodeType": "YulTypedName",
                                "src": "726:9:1",
                                "type": ""
                            },
                            {
                                "name": "dataEnd",
                                "nativeSrc": "737:7:1",
                                "nodeType": "YulTypedName",
                                "src": "737:7:1",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "value0",
                                "nativeSrc": "749:6:1",
                                "nodeType": "YulTypedName",
                                "src": "749:6:1",
                                "type": ""
                            }
                        ],
                        "src": "690:329:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "1090:53:1",
                            "nodeType": "YulBlock",
                            "src": "1090:53:1",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "pos",
                                                "nativeSrc": "1107:3:1",
                                                "nodeType": "YulIdentifier",
                                                "src": "1107:3:1"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nativeSrc": "1130:5:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1130:5:1"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_bytes32",
                                                    "nativeSrc": "1112:17:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1112:17:1"
                                                },
                                                "nativeSrc": "1112:24:1",
                                                "nodeType": "YulFunctionCall",
                                                "src": "1112:24:1"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "mstore",
                                            "nativeSrc": "1100:6:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "1100:6:1"
                                        },
                                        "nativeSrc": "1100:37:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1100:37:1"
                                    },
                                    "nativeSrc": "1100:37:1",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "1100:37:1"
                                }
                            ]
                        },
                        "name": "abi_encode_t_bytes32_to_t_bytes32_fromStack",
                        "nativeSrc": "1025:118:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "value",
                                "nativeSrc": "1078:5:1",
                                "nodeType": "YulTypedName",
                                "src": "1078:5:1",
                                "type": ""
                            },
                            {
                                "name": "pos",
                                "nativeSrc": "1085:3:1",
                                "nodeType": "YulTypedName",
                                "src": "1085:3:1",
                                "type": ""
                            }
                        ],
                        "src": "1025:118:1"
                    },
                    {
                        "body": {
                            "nativeSrc": "1247:124:1",
                            "nodeType": "YulBlock",
                            "src": "1247:124:1",
                            "statements": [
                                {
                                    "nativeSrc": "1257:26:1",
                                    "nodeType": "YulAssignment",
                                    "src": "1257:26:1",
                                    "value": {
                                        "arguments": [
                                            {
                                                "name": "headStart",
                                                "nativeSrc": "1269:9:1",
                                                "nodeType": "YulIdentifier",
                                                "src": "1269:9:1"
                                            },
                                            {
                                                "kind": "number",
                                                "nativeSrc": "1280:2:1",
                                                "nodeType": "YulLiteral",
                                                "src": "1280:2:1",
                                                "type": "",
                                                "value": "32"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "add",
                                            "nativeSrc": "1265:3:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "1265:3:1"
                                        },
                                        "nativeSrc": "1265:18:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1265:18:1"
                                    },
                                    "variableNames": [
                                        {
                                            "name": "tail",
                                            "nativeSrc": "1257:4:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "1257:4:1"
                                        }
                                    ]
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "name": "value0",
                                                "nativeSrc": "1337:6:1",
                                                "nodeType": "YulIdentifier",
                                                "src": "1337:6:1"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "name": "headStart",
                                                        "nativeSrc": "1350:9:1",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1350:9:1"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nativeSrc": "1361:1:1",
                                                        "nodeType": "YulLiteral",
                                                        "src": "1361:1:1",
                                                        "type": "",
                                                        "value": "0"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nativeSrc": "1346:3:1",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1346:3:1"
                                                },
                                                "nativeSrc": "1346:17:1",
                                                "nodeType": "YulFunctionCall",
                                                "src": "1346:17:1"
                                            }
                                        ],
                                        "functionName": {
                                            "name": "abi_encode_t_bytes32_to_t_bytes32_fromStack",
                                            "nativeSrc": "1293:43:1",
                                            "nodeType": "YulIdentifier",
                                            "src": "1293:43:1"
                                        },
                                        "nativeSrc": "1293:71:1",
                                        "nodeType": "YulFunctionCall",
                                        "src": "1293:71:1"
                                    },
                                    "nativeSrc": "1293:71:1",
                                    "nodeType": "YulExpressionStatement",
                                    "src": "1293:71:1"
                                }
                            ]
                        },
                        "name": "abi_encode_tuple_t_bytes32__to_t_bytes32__fromStack_reversed",
                        "nativeSrc": "1149:222:1",
                        "nodeType": "YulFunctionDefinition",
                        "parameters": [
                            {
                                "name": "headStart",
                                "nativeSrc": "1219:9:1",
                                "nodeType": "YulTypedName",
                                "src": "1219:9:1",
                                "type": ""
                            },
                            {
                                "name": "value0",
                                "nativeSrc": "1231:6:1",
                                "nodeType": "YulTypedName",
                                "src": "1231:6:1",
                                "type": ""
                            }
                        ],
                        "returnVariables": [
                            {
                                "name": "tail",
                                "nativeSrc": "1242:4:1",
                                "nodeType": "YulTypedName",
                                "src": "1242:4:1",
                                "type": ""
                            }
                        ],
                        "src": "1149:222:1"
                    }
                ]
            },
            "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes32(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_bytes32(value) {\n        if iszero(eq(value, cleanup_t_bytes32(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes32(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes32(value)\n    }\n\n    function abi_decode_tuple_t_bytes32(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes32(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_bytes32_to_t_bytes32_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bytes32(value))\n    }\n\n    function abi_encode_tuple_t_bytes32__to_t_bytes32__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bytes32_to_t_bytes32_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
            "id": 1,
            "language": "Yul",
            "name": "#utility.yul"
        }
    ],
    "sourceMap": "60:489:0:-:0;;;170:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;227:11;214:10;:24;;;;170:76;60:489;;88:117:1;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:143::-;602:5;633:6;627:13;618:22;;649:33;676:5;649:33;:::i;:::-;545:143;;;;:::o;694:351::-;764:6;813:2;801:9;792:7;788:23;784:32;781:119;;;819:79;;:::i;:::-;781:119;939:1;964:64;1020:7;1011:6;1000:9;996:22;964:64;:::i;:::-;954:74;;910:128;694:351;;;;:::o;60:489:0:-;;;;;;;",
    "deployedSourceMap": "60:489:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;325:80;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;91:25;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;461:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;325:80;390:7;377:10;:20;;;;325:80;:::o;91:25::-;;;;:::o;461:85::-;501:7;528:10;;521:17;;461:85;:::o;88:117:1:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o",
    "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\ncontract samplecontract {\r\n    bytes32 public storedHash;\r\n\r\n    // 해시값을 초기 설정합니다.\r\n    constructor(bytes32 initialHash) {\r\n        storedHash = initialHash;\r\n    }\r\n\r\n    // 외부에서 생성된 새로운 해시값을 저장합니다.\r\n    function setHash(bytes32 newHash) public {\r\n        storedHash = newHash;\r\n    }\r\n\r\n    // 저장된 해시값을 조회합니다.\r\n    function getHash() public view returns (bytes32) {\r\n        return storedHash;\r\n    }\r\n}\r\n",
    "sourcePath": "C:\\Project\\Polygon\\polygon-project\\contracts\\samplecontract.sol",
    "ast": {
        "absolutePath": "project:/contracts/samplecontract.sol",
        "exportedSymbols": {
            "samplecontract": [
                32
            ]
        },
        "id": 33,
        "license": "MIT",
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1,
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".0"
                ],
                "nodeType": "PragmaDirective",
                "src": "33:23:0"
            },
            {
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "samplecontract",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "id": 32,
                "linearizedBaseContracts": [
                    32
                ],
                "name": "samplecontract",
                "nameLocation": "69:14:0",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "functionSelector": "b0da5195",
                        "id": 3,
                        "mutability": "mutable",
                        "name": "storedHash",
                        "nameLocation": "106:10:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 32,
                        "src": "91:25:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 2,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "91:7:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 12,
                            "nodeType": "Block",
                            "src": "203:43:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 10,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 8,
                                            "name": "storedHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3,
                                            "src": "214:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 9,
                                            "name": "initialHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 5,
                                            "src": "227:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "214:24:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 11,
                                    "nodeType": "ExpressionStatement",
                                    "src": "214:24:0"
                                }
                            ]
                        },
                        "id": 13,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 6,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 5,
                                    "mutability": "mutable",
                                    "name": "initialHash",
                                    "nameLocation": "190:11:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 13,
                                    "src": "182:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 4,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "182:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "181:21:0"
                        },
                        "returnParameters": {
                            "id": 7,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "203:0:0"
                        },
                        "scope": 32,
                        "src": "170:76:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 22,
                            "nodeType": "Block",
                            "src": "366:39:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 20,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 18,
                                            "name": "storedHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3,
                                            "src": "377:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 19,
                                            "name": "newHash",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15,
                                            "src": "390:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "377:20:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 21,
                                    "nodeType": "ExpressionStatement",
                                    "src": "377:20:0"
                                }
                            ]
                        },
                        "functionSelector": "0c4c4285",
                        "id": 23,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setHash",
                        "nameLocation": "334:7:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 16,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 15,
                                    "mutability": "mutable",
                                    "name": "newHash",
                                    "nameLocation": "350:7:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23,
                                    "src": "342:15:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 14,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "342:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "341:17:0"
                        },
                        "returnParameters": {
                            "id": 17,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "366:0:0"
                        },
                        "scope": 32,
                        "src": "325:80:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 30,
                            "nodeType": "Block",
                            "src": "510:36:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 28,
                                        "name": "storedHash",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3,
                                        "src": "528:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 27,
                                    "id": 29,
                                    "nodeType": "Return",
                                    "src": "521:17:0"
                                }
                            ]
                        },
                        "functionSelector": "d13319c4",
                        "id": 31,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getHash",
                        "nameLocation": "470:7:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 24,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "477:2:0"
                        },
                        "returnParameters": {
                            "id": 27,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 26,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31,
                                    "src": "501:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 25,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "501:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "500:9:0"
                        },
                        "scope": 32,
                        "src": "461:85:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "scope": 33,
                "src": "60:489:0",
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "src": "33:518:0"
    },
    "compiler": {
        "name": "solc",
        "version": "0.8.21+commit.d9974bed.Emscripten.clang"
    },
    "networks": {
        "1713510006621": {
            "events": {},
            "links": {},
            "address": "0x61B16b837775a31055e37510CdEb5Bae622dCD50",
            "transactionHash": "0x711ab5b5486350fc32802d8cf88fd36781bb788bae7d9a407eda8af2e1bcccf3"
        }
    },
    "schemaVersion": "3.4.16",
    "updatedAt": "2024-04-19T07:13:21.926Z",
    "networkType": "ethereum",
    "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
    },
    "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
    }
}];
const contractAddress = '0x61B16b837775a31055e37510CdEb5Bae622dCD50';

const myContract = new web3.eth.Contract(contractABI, contractAddress);

web3.eth.getBalance('0x...', function (err, result) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Ether Balance:', web3.utils.fromWei(result, 'ether'));
    }
});

myContract.methods.getHash().estimateGas({ from: '0x...' })
    .then(function (gasAmount) {
        console.log('Estimated Gas:', gasAmount);
    })
    .catch(function (error) {
        console.error('Error estimating gas:', error);
    });