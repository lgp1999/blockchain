![University Of Karachi](https://github.com/riazahmed0147/blockchain/blob/master/img/logo.png)

## University Of Karachi - Department Of Computer Science

**Final Year Project (MCS 2017-2018)**<br>
**Project Title**: Bitcoin Blockchain Application<br>
**Supervisor**: Sir Khalid Jamal<br>
**Members**: Riaz Ahmed, Ayesha Qureshi<br>


### Prequisites
1. Install Node LTS 8.x.x (https://nodejs.org/en/download/)
2. Install NPM (if you have installed node it comes with NPM)
3. Install Application dependencies `npm install`
4. A text editor (sublime preferred) (https://www.sublimetext.com/3)
5. Postman (https://www.getpostman.com/downloads/)

### How To Interact With API
Please follow the steps given below, do it in sequence.<br>

#### 1. Start server
Run 5 instances on different ports, all should be up and running<br><br>
> npm run node_1 <br>
> npm run node_2 <br>
> npm run node_3 <br>
> npm run node_4 <br>
> npm run node_5 <br>

#### 2. Decentralise
Register all nodes together to make a decentralised network<br><br>
**URL**: http://localhost:3001/register-and-broadcast-node<br>
**METHOD**: POST<br>
**PAYLOAD**:
```
{
	"newNodeUrl": "http://localhost:3002"
}
```
```
{
	"newNodeUrl": "http://localhost:3003"
}
```
```
{
	"newNodeUrl": "http://localhost:3004"
}
```
```
{
	"newNodeUrl": "http://localhost:3005"
}
```

#### 3. Transaction
Make a transaction on any node, it will be broadcasted to all other nodes as well<br><br>
**URL**: http://localhost:3001/transaction/broadcast<br>
**METHOD**: POST<br>
**PAYLOAD**:
```
{
	"amount": 600,
	"sender": "JENSDHFAS7DF7SADFY72",
	"recipient": "SALDFJALKSFDJ82YE"
}
```

#### 4. Mine
Mine a new block on any node, and it will be broadcasted to all other nodes as well<br><br>
**URL**: http://localhost:3001/transaction/mine<br>

#### 5. Consensus
Consensus will validate the chain, to make it work shutdown any node let's say at port 3005 and make some transactions on any other node and start the server at port 3005 again and again register it with any other node. So blockchain at port 3005 does not contain the valid chain. In order to validate do the following:<br>
**URL**: http://localhost:3005/consensus<br>

#### 6. Block Explorer
You can see the transaction details for each block by using `BlockHash, TransactionID, Address`
**URL**: http://localhost:3005/block-explorer