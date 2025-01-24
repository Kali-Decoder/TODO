const express = require("express");
const fs = require("fs");
const ethers = require("ethers");
const { mainContractABI, mainContractAddress } = require("./constant");
const dotenv = require("dotenv");
dotenv.config();
app = express();
app.use(express.json());
const provider = new ethers.providers.JsonRpcProvider(
  "https://sepolia-rollup.arbitrum.io/rpc"
);

const signer = new ethers.Wallet("0x" + process.env.PRIVATE_KEY, provider);
console.log("Signer Address: ", signer.address);



// api to publish task 

app.post("/add-task",async (req,res)=>{
  console.log(req.body);
  let {emoji,name,description,category} = req.body;

  const contractInstance = new ethers.Contract(
    mainContractAddress,
    mainContractABI,
    signer
  );

  console.log(contractInstance);

  let tx= await contractInstance.create_task(
    emoji,name,description,category
  );

  console.log(tx);
  await tx.wait();

  return res.json({data : tx});

});

app.get("/get-task-address",async(req,res)=>{

  const contractInstance = new ethers.Contract(
    mainContractAddress,
    mainContractABI,
    signer
  );

  console.log(signer.address)

  let result = await contractInstance.get_user_tasks({from:signer.address});

  return res.json({data : result});
});

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
