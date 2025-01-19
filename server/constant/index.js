const mainContractAddress = "0xc3B6342Ac62d6Fce5778921B1882E21916bd7888";
const mainContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_emojiCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_taskName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_taskDescription",
				"type": "string"
			},
			{
				"internalType": "enum TaskApp.Category",
				"name": "_taskCategory",
				"type": "uint8"
			}
		],
		"name": "create_task",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_user_tasks",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "Emoji_Code",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Task_Name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Task_Description",
						"type": "string"
					},
					{
						"internalType": "enum TaskApp.Category",
						"name": "Task_Category",
						"type": "uint8"
					}
				],
				"internalType": "struct TaskApp.Task[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "taskId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

module.exports = {
  mainContractABI,
  mainContractAddress
};
