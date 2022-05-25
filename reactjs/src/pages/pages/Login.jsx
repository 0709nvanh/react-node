import React from "react";
import "../../components/client/css/signup.css";
import { useForm } from "react-hook-form";
import { login } from "../../apis/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log('data', data);
    login(data).then((res) => {
      if (res) {
        // console.log(res.data);
        localStorage.setItem('auth', JSON.stringify(res.data))
        if(res.data.user.role === 1 ){
          navigate('/admin')
        } else {
          navigate('/')
        }
      }
    });
  };
  return (
    <div className="w-full">
      <div className="px-[200px]">
          <div className="container-left"></div>
          <div className="container-right">
            <div className="title">
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Log in
              </h2>
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
    </div>
  );
};

export default Login;
