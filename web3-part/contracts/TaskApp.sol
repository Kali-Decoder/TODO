// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.20;

contract TaskApp {
    mapping(address => Task[]) private user_tasks;
    uint public taskId;
    enum Category {
        HOME,
        PERSONAL,
        WORK,
        HEALTH,
        EDUCATION
    }
    struct Task {
        string Emoji_Code;
        string Task_Name;
        string Task_Description;
        Category Task_Category;
    }

    function create_task(string calldata _emojiCode,string calldata _taskName, string calldata _taskDescription,Category _taskCategory) external {
        Task memory _task = Task(_emojiCode,
            _taskName,_taskDescription,_taskCategory);
        user_tasks[msg.sender].push(_task);
        unchecked {
            taskId++;
        }
    }

    function get_user_tasks() external view returns(Task[] memory){
        return user_tasks[msg.sender];
    }
}
