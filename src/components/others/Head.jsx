import React from "react";
import TaskListCard from "./TaskListCard";
import TaskCard from "../TaskList/TaskCard";

const Head = (props) => {
  let logOutUser = () => {
    localStorage.removeItem("loggedinUser");

    props.setUser(null);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center text-white bg-black ">
      <div className="w-[95vw] h-[90vh] rounded-[20px] flex flex-col  justify-around bg-zinc-900">
        <div className="flex p-[15px]  md:p-[25px] items-center justify-between">
          <div>
            {" "}
            <p className="text-[20px] font-[500]">Hello</p>{" "}
            <span className="text-[25px] font-[500]"> {props.data.name}👋</span>
          </div>

          <button
            onClick={logOutUser}
            className=" w-[59px] md:w-[90px] h-[40px]  text-[15px]  md:text-[18px] font-[500] rounded-[10px] bg-red-500 md:h-[50px]"
          >
            {" "}
            Log Out
          </button>
        </div>

        <TaskListCard data={props.data} />

        <TaskCard data={props.data} />
      </div>
    </div>
  );
};

export default Head;
