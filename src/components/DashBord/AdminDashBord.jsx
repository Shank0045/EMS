import React, { useState, useContext, useEffect, act } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const AdminDashBord = (props) => {
  let adata = useContext(AuthContext);

  const [task, settask] = useState([]);

  const [keytask, setkeytask] = useState(adata.employee);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    settask((prev) => {
      return [
        ...prev,
        {
          ...data,
          active: false,
          failed: false,
          intensity: "high",
          completed: false,
          newTask: true,
        },
      ];
    });

    adata.employee.forEach((elem, index) => {
      if (elem.name == data.name) {
        elem.tasks.push(data);
      }
    });

    localStorage.setItem("employee", JSON.stringify(adata.employee));

    reset();
  };

  let logOutUser = () => {
    localStorage.removeItem("loggedinUser");
    props.setUser(null);
  };

  return (
    <div>
      <div className="w-full h-screen  flex flex-col items-center justify-center text-white bg-black ">
        <div className=" w-[95vw]  overflow-scroll lg:w-[95vw] lg:h-[75vh] rounded-[20px] bg-zinc-900">
          <div className="flex p-[10px] items-center justify-between">
            <div>
              <p className=" md:text-[30px] text-[20px] font-[500]"> Hello</p>{" "}
              <span className="text-[30px] font-[500]">Admin👋</span>
            </div>

            <button
              onClick={logOutUser}
              className="w-[70px] md:w-[90px] text-[15px] md:text-[18px] font-[500] rounded-[10px] bg-red-500 h-[50px]"
            >
              {" "}
              Log Out
            </button>
          </div>

          <div className="  p-[20px] w-[full] lg:mt-[80px]  lg:h-[45vh]  flex items-center justify-between">
            <form
              className="flex  w-full mt-[20px]  items-center flex-wrap  justify-between"
              action=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <div className="pt-[10px]">
                  <h1 className="text-[24px] my-[10px] font-[700]">
                    Task Title
                  </h1>
                  <input
                    type="text"
                    {...register("title", {
                      required: {
                        value: true,
                        message: " Please fill the input",
                      },
                    })}
                    placeholder="Task Title"
                    className=" w-[85vw] h-[40px] lg:w-[390px]  outline-none border-[1px] p-[10px]  rounded-[10px]  border-gray-50"
                  />
                </div>
                {errors.title && (
                  <div className="w-full text-red-700  ">
                    {" "}
                    {errors.title.message}
                  </div>
                )}
                <div className="pt-[10px]">
                  <h1 className="text-[24px] my-[10px] font-[700]">Date</h1>
                  <input
                    type="date"
                    {...register("date", {
                      required: {
                        value: true,
                        message: " Please fill the input",
                      },
                    })}
                    placeholder="Date"
                    className=" w-[85vw] h-[40px] lg:w-[390px]  outline-none border-[1px] p-[10px]  rounded-[10px]  border-gray-50"
                  />
                </div>
                {errors.date && (
                  <div className="w-full text-red-700  ">
                    {" "}
                    {errors.date.message}
                  </div>
                )}
                <div className="pt-[10px]">
                  <h1 className="text-[24px] my-[10px] font-[700]">Asing To</h1>
                  <input
                    type="text"
                    {...register("name", {
                      required: {
                        value: true,
                        message: " Please fill the input",
                      },
                    })}
                    placeholder="Employee Name"
                    className=" w-[85vw] h-[40px] lg:w-[390px]  outline-none border-[1px] p-[10px]  rounded-[10px]  border-gray-50"
                  />
                </div>
                {errors.name && (
                  <div className="w-full text-red-700  ">
                    {" "}
                    {errors.name.message}
                  </div>
                )}
                <div className="pt-[10px]">
                  <h1 className="text-[24px] my-[10px] font-[700]">Category</h1>
                  <input
                    type="text"
                    {...register("category", {
                      required: {
                        value: true,
                        message: " Please fill the input",
                      },
                    })}
                    placeholder="Design, Dev, Ect"
                    className=" w-[85vw] h-[40px] lg:w-[390px]  outline-none border-[1px] p-[10px]  rounded-[10px]  border-gray-50"
                  />
                </div>
                {errors.category && (
                  <div className="w-full text-red-700  ">
                    {" "}
                    {errors.category.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col ">
                <h2 className="text-[24px] my-[10px] font-[700]">
                  {" "}
                  Description
                </h2>

                <textarea
                  id="text"
                  {...register("description", {
                    required: {
                      value: true,
                      message: " Please fill the input",
                    },
                  })}
                  rows={7}
                  cols={40}
                  lg:rows={10}
                  lg:cols={59}
                  placeholder=" Description"
                  className=" outline-none border-[1px] p-[5px]  rounded-[10px]  border-gray-50"
                />
                {errors.description && (
                  <div className="w-full text-red-700  ">
                    {" "}
                    {errors.description.message}
                  </div>
                )}
                <button
                  type="submit"
                  className=" w-[80vw] md:w-[40vw] my-[20px] rounded-[20px] font-[500] text-[20px] bg-blue-400 h-[50px]"
                >
                  {" "}
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-[5vh] flex items-center bg-black justify-between ">
          <h1 className=" text-[20px] md:text-[30px] pt-[20px] pl-[20px]">
            {" "}
            Name{" "}
          </h1>
          <h1 className=" text-[20px] md:text-[30px] pt-[20px] pl-[20px]">
            {" "}
            Task Title
          </h1>
          <h1 className=" text-[20px] md:text-[30px] pt-[20px] pl-[20px]">
            Department
          </h1>
        </div>

        <div className="w-[100%] h-[30vh] mt-[20px] flex flex-col gap-[10px] shrink-0 overflow-scroll p-[4px] ">
          {adata.employee.map((elem, index) => {
            return elem.tasks.map((task, inn) => {
              return (
                <div
                  key={inn}
                  className="w-full flex items-center   overflow-scroll shrink-0 justify-between rounded-[10px] p-[4px] font-[500] bg-zinc-700 h-[70px] "
                >
                  <h1 className="w-[150px] md:text-[20px]  h-[40px]">
                    {elem.name}
                  </h1>
                  <h1 className="w-[170px] md:text-[20px] h-[40px]">
                    {elem.tasks[inn].title}
                  </h1>
                  <h1 className="w-[120px] md:text-[20px] h-[40px]">
                    {elem.tasks[inn].category}
                  </h1>
                </div>
              );
            });
          })}

        
        </div>
      </div>
    </div>
  );
};

export default AdminDashBord;
