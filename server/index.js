const express = require("express");
const fs = require("fs");
const ethers = require("ethers");
const { mainContractABI, mainContractAddress } = require("./constant");
const dotenv = require("dotenv");
dotenv.config();
app = express();
const provider = new ethers.providers.JsonRpcProvider(
  "https://node.ghostnet.etherlink.com/"
);

const signer = new ethers.Wallet("0x" + process.env.PRIVATE_KEY, provider);
console.log("Signer Address: ", signer.address);



// api to publish task 

app.post("/add-task",async (req,res)=>{
  let {emoji,name,description,category} = req.body;
  const contractInstance = new ethers.Contract(
    mainContractAddress,
    mainContractABI,
    signer
  );

  let tx= await contractInstance.create_task(
    emoji,name,description,category
  );

  await tx.wait();

});

app.get("/get-task-address",async(req,res)=>{

  const contractInstance = new ethers.Contract(
    mainContractAddress,
    mainContractABI,
    signer
  );

  let res = await contractInstance.get_user_tasks({from:signer.address});
  return res;
});

app.listen(8080, function () {
  console.log("Server is running on port 3000");
});
