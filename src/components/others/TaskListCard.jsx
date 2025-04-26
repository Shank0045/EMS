import React from "react";

const TaskListCard = ({ data }) => {
  console.log(data);

  return (
    <div className="flex items-center  flex-wrap p-[5px] shrink-0 gap-[10px] justify-between">
      <div className="w-[590px] px-[40px]   rounded-[20px] py-[10px] h-[120px] bg-green-400">
        <p className="lg:text-[20px] font-[500]">Role : {data.role}</p>
        <p className="lg:text-[20px]  font-[500]"> Employee Id : {data.id} </p>

        <p className=" text-[15px]  md:text-[18px] font-[500]">
          {" "}
          Finish it on time, or we’re sending your browser history to HR.
        </p>
      </div>
      <div className="w-[590px] px-[40px]  rounded-[20px] py-[10px] h-[120px] bg-yellow-400">
        <p className="lg:text-[20px] font-[500]">Email : {data.email}</p>
        <p className="lg:text-[20px] font-[500]"> Password : {data.password}</p>
        <p className="  text-[14px] md:text-[18px] font-[500]">
          {" "}
          {data.name} Your password is older than your coffee mug. Let’s freshen
          it up!
        </p>
      </div>
    </div>
  );
};

export default TaskListCard;
