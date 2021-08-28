import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../supabase";
import { useForm } from "react-hook-form";
import { AwesomeButton } from "react-awesome-button";
import { useSnackbar } from "notistack";

export default function Register(params) {
  const [isLogin, setLogin] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  // Signup the student
  const SignupUser = async (params) => {
    const res = await fetch("/api/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    if (res.ok) {
      enqueueSnackbar("Registration Successful!", { variant: "success" });
      router.push("/");
    } else {
      enqueueSnackbar("Registration Failed!", { variant: "warning" });
      reset();
    }
  };

  // Login the student
  const LoginUser = async (params) => {
    let { user, error } = await supabase.auth.signIn({
      email: params.email,
      password: params.password,
    });
    if (error) {
      console.log(error.message);
      enqueueSnackbar("Unable to login!", { variant: "warning" });
    } else {
      enqueueSnackbar("Login Successful!", { variant: "success" });
      router.push("/");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-4 text-4xl font-bold text-indigo-900">Course++</h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin
              ? "Welcome! Login to Course++ below"
              : "Sign-up to join Course++ it's free!"}
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit((data) =>
            isLogin ? LoginUser(data) : SignupUser(data)
          )}
        >
          {!isLogin && (
            <div className="relative">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                Name
              </label>
              <input
                className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: true, maxLength: 40 })}
              />
            </div>
          )}
          {!isLogin && (
            <div className="relative">
              <label className="text-sm font-bold text-gray-700 tracking-wide">
                Registeration Number
              </label>
              <input
                className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                placeholder="Enter registeration number"
                {...register("roll", { required: true, maxLength: 9 })}
              />
            </div>
          )}
          <div className="relative">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              placeholder="Enter your e-mail"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
          </div>
          <div className="mt-8 content-center">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true, maxLength: 16 })}
            />
          </div>
          <div>
            <div className="text-center">
              <AwesomeButton type="primary">
                <button
                  className="flex items-center pt-1 w-32 justify-center"
                  type="submit"
                >
                  {isLogin ? "LOGIN" : "SIGNUP"}
                </button>
              </AwesomeButton>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>
              {isLogin ? "Don't have an account?" : "Have an account?"}
            </span>
            <div
              onClick={() => setLogin(!isLogin)}
              className="text-indigo-400 hover:text-indigo-500 hover:underline cursor-pointer transition ease-in duration-300"
            >
              {isLogin ? "signup" : "login"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
