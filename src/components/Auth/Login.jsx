import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = ({ handle }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((reslove, reject) => {
      setTimeout(() => {
        reslove();
      }, d * 1000);
    });
  };

  const onSubmit = async (data, e) => {
    await delay(1);

    handle(data.email, data.password, e);
  };

  return (
    <div className=" w-full  h-screen flex items-center justify-center  text-white bg-black ">




      <div className=" w-[85vw] md:w-[80vw] lg:w-[28vw] flex items-center justify-between flex-col  h-[90vh]  md:h-[89vh] border-[1px] border-red-500 ">




        <h1 className=" w-full h-[100px] text-[40px] lg:text-[40px]  md:text-[40px] font-[700] text-red-500 p-[20px] ">
          {" "}
          Log In
        </h1>


      <div className="w-[70vw]  md:w-[28vw] text-xl text-center flex items-center justify-center h-[20vh] font-[500]">
        
     For E-mail and Password, Check out Readme.Md File 

      </div>



        <form
          className=" mb-[100px] flex flex-col w-full  lg:w-[37vw] md:w-[70vw]  justify-between items-center  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            {...register("email", {
              required: true,
              minLength: { value: 3, message: "Email Is Requierd" },
            })}
            placeholder="Enter User Name"
            className="  outline-none h-[50px] w-[95%] bg-white  text-black rounded-[30px] font-[500] p-[20px] lg:w-[70%] border-[2px] border-red-800"
          />
          {errors.email && (
            <div className="text-red-800 text-[3vh] ">
              {" "}
              {errors.email.message}{" "}
            </div>
          )}

          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Password Is Required" },
              minLength: { value: 2, message: "min-length is 8" },
              maxLength: { value: 10, message: "Max-length is 15" },
            })}
            placeholder="Enter Password "
            className="lg:w-[70%] w-[95%] mt-[20px] outline-none h-[50px] bg-white  text-black rounded-[30px] font-[500] p-[20px] border-[2px] border-red-800"
          />
          {errors.password && (
            <div className="text-red-800 text-[3vh] ">
              {" "}
              {errors.password.message}{" "}
            </div>
          )}

          <div className="flex mt-[20px] w-full items-center justify-around  ">
            <input
              type="checkbox"
              {...register("checkbox", {
                required: { value: true, message: "This Section Is Required" },
              })}
              name="checkbox"
              id="check"
            />{" "}
            <label htmlFor="check">Remind Me</label>
          </div>
          {errors.checkbox && (
            <div className="text-red-800 text-[3vh] ">
              {" "}
              {errors.checkbox.message}
            </div>
          )}

          {isSubmitting ? (
            <input
              disabled={isSubmitting}
              value="submit"
              className="mt-[20px] lg:w-[70%] w-[95%] h-[50px] bg-gray-500  flex  items-center font-[700] text-[20px] justify-center rounded-[30px]"
              type="submit"
            />
          ) : (
            <input
              disabled={isSubmitting}
              value="Submit"
              className="mt-[20px] lg:w-[70%] w-[95%] h-[50px] bg-red-500  flex  items-center font-[700] text-[20px] justify-center rounded-[30px]"
              type="submit"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
