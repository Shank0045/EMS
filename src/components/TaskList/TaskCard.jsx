import React from "react";

const TaskCard = ({ data }) => {
  let tasks = data.tasks;

  return (
    <div
      id="card"
      className="p-[0px]    flex items-center  shrink-0 gap-[20px] overflow-x-scroll "
    >
      {tasks.map((elem, index) => {
        return (
          <div
            key={index}
            className="max-w-[300px] flex flex-col  shrink-0 overflow-auto rounded-[30px] h-[33vh]  bg-blue-300"
          >
            <div className="p-[30px] shrink-0 flex items-center justify-between">
              <h1 className="w-[70px] font-[500] flex items-center justify-center rounded-[10px] bg-purple-500 h-[35px]">
                {" "}
                {index + 1}
              </h1>
              <p className=" text-[24px] font-[500]">
                {" "}
                {data.tasks[index].date}
              </p>
            </div>

            <h1 className="p-[10px]  font-[500] uppercase text-[25px]">
              {data.tasks[index].title}{" "}
            </h1>

            <p className="p-[10px] text-[20px] ">
              {" "}
              {data.tasks[index].description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskCard;
