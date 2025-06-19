import React, { useState } from "react";

const Todo = () => {
  const [Task, setTask] = useState([]);
  const [TaskInput, setTaskInput] = useState("");

  const handeltask = () => {
    if (TaskInput.trim() !== "") {
      setTask([...Task, TaskInput]);
      setTaskInput("");
      console.log([...Task, TaskInput]);
    }
  };

  const handeldelete = (index) => {
    const newTask = Task.filter((_, i) => i !== index);
    setTask(newTask);
  };

  return (
    <>
      <div className="brder w-[70%] h-[100vh] m-auto mt-10">
        <div className="border border-gray-300 px-4 rounded-[6px] py-8 bg-gray-50 shadow-xl">
          <h1 className="font-bold text-[24px]">Welcome boss!. Lest Do it</h1>
          <div className="flex gap-5 mt-8">
            <input
              type="text"
              placeholder=" Enter you task"
              value={TaskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              className="border w-[80%] px-5 py-3 rounded-[4px] outline-none border-gray-400 bg-white"
            />
            <button
              onClick={handeltask}
              className="bg-blue-500 text-white font-medium w-[13%] py-3 rounded-[4px] text-center cursor-pointer"
            >
              Add Task +
            </button>
          </div>
        </div>
        <div className="border border-gray-300 px-4 rounded-[6px] py-8 bg-gray-50 shadow-xl mt-8">
          <h1 className="font-bold text-[18px] text-gray-900">Tasks</h1>
          {Task.length === 0 ? (
            <p className="text-gray-500 mt-2">No tasks yet.</p>
          ) : (
            Task.map((task, index) => (
              <div key={index} className="border px-2 py-3 rounded-[4px] mt-2 border-gray-400 shadow-md flex justify-between items-center">
                <h1 className="font-medium text-[18px] text-gray-700">{task}</h1>
                <div className="flex gap-3 justify-center items-center">
                  
                  <div onClick={() => handeldelete(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
