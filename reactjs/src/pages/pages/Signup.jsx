import React from "react";
import "../../components/client/css/signup.css";
import { useForm } from "react-hook-form";
import { signup } from "../../apis/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('data', data);
    signup(data).then((res) => {
      if (res) {
        navigate("/");
      }
    });
  };
  return (
    <div className="w-full container">
      <div className="container-left"></div>
      <div className="container-right">
        <div className="title">
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              start your 14-day free trial{" "}
            </a>
          </p>
        </div>

        <div className="form border-2 rounded-lg shadow-md">
          <div className="p-4">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="company-website"
                  class="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Name{" "}
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    {...register("username", { required: true })}
                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full p-3 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Enter your username..."
                  />
                </div>
                <div className="px-3">
                  {errors.username && (
                    <span className="text-red-400 text-[14px] italic">
                      Please enter your username
                    </span>
                  )}
                </div>
              </div>
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="company-website"
                  class="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "}
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full p-3 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Enter your email..."
                  />
                </div>
                <div className="px-3">
                  {errors.email && (
                    <span className="text-red-400 text-[14px] italic">
                      Please enter your email
                    </span>
                  )}
                </div>
              </div>
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="company-website"
                  class="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full p-3 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Enter your password..."
                  />
                </div>
                <div className="px-3">
                  {errors.password && (
                    <span className="text-red-400 text-[14px] italic">
                      Please enter your password
                    </span>
                  )}
                </div>
              </div>
              <div class="px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
                  class="items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
