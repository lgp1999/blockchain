const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();



const blockChain1 = {
"chain": [
{
"index": 1,
"timestamp": 1536283938130,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1536283943792,
"transactions": [],
"nonce": 16441,
"hash": "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1536283951225,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "db916c10b23d11e88172e3b91cf344b0",
"transactionId": "df0499d0b23d11e88172e3b91cf344b0"
}
],
"nonce": 116146,
"hash": "0000fe3994a63636adff78f6c607fed80588760682fe7ea92335313a328fa185",
"previousBlockHash": "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285"
},
{
"index": 4,
"timestamp": 1536283990065,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "db916c10b23d11e88172e3b91cf344b0",
"transactionId": "e3618b50b23d11e88172e3b91cf344b0"
},
{
"amount": 100,
"sender": "KJASDHFAS7DF7SADFY72",
"recipient": "232KHKHSAFKSHFKHSASDF",
"transactionId": "e863e490b23d11e88172e3b91cf344b0"
},
{
"amount": 200,
"sender": "KJASDHFAS7DF7SADFY72",
"recipient": "232KHKHSAFKSHFKHSASDF",
"transactionId": "ed9cb720b23d11e88172e3b91cf344b0"
},
{
"amount": 300,
"sender": "KJASDHFAS7DF7SADFY72",
"recipient": "232KHKHSAFKSHFKHSASDF",
"transactionId": "f0b5de00b23d11e88172e3b91cf344b0"
},
{
"amount": 400,
"sender": "KJASDHFAS7DF7SADFY72",
"recipient": "232KHKHSAFKSHFKHSASDF",
"transactionId": "f3c4cbb0b23d11e88172e3b91cf344b0"
}
],
"nonce": 125994,
"hash": "00009b3bee9c71d6e1c357a374c202aea1a34d5a2e2db7577ab626f3567b7de2",
"previousBlockHash": "0000fe3994a63636adff78f6c607fed80588760682fe7ea92335313a328fa185"
},
{
"index": 5,
"timestamp": 1536284013177,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "db916c10b23d11e88172e3b91cf344b0",
"transactionId": "fa8799a0b23d11e88172e3b91cf344b0"
},
{
"amount": 600,
"sender": "KJASDHFAS7DF7SADFY72",
"recipient": "232KHKHSAFKSHFKHSASDF",
"transactionId": "021e3250b23e11e88172e3b91cf344b0"
},
{
"amount": 700,
"sender": "KJASDHFAS7DF7SADFY72",
"recipient": "232KHKHSAFKSHFKHSASDF",
"transactionId": "049748a0b23e11e88172e3b91cf344b0"
}
],
"nonce": 105887,
"hash": "00008b4a6f435c11807658a1cabf62177fdb88dff61b126f8285e4101922116f",
"previousBlockHash": "00009b3bee9c71d6e1c357a374c202aea1a34d5a2e2db7577ab626f3567b7de2"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "db916c10b23d11e88172e3b91cf344b0",
"transactionId": "084ed260b23e11e88172e3b91cf344b0"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

console.log('VALID: ' + bitcoin.chainIsValid(blockChain1.chain));