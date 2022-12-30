import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Logine = ({ setIsModal, isModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [userEmail, setUserEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const { googleUser, loginUser, passwordEmail, loading } =
    useContext(AuthContext);

  const onSubmit = (data) => {
    // console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Login Successfully");
        reset();
      })
      .catch((err) => {
        // console.error(err)
        setLoginError(err.code);
      });
  };

  const googleHandler = () => {
    googleUser(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        // console.error(err)
        setLoginError(err.code);
      });
  };

  const handlePassword = () => {
    passwordEmail(userEmail)
      .then(() => {
        toast.success("Your reset Password Email sent, Check your spam folder");
        setUserEmail(null);
      })
      .catch((err) => {
        console.error(err);
        setLoginError(err.code);
      });
    // console.log(userEmail);
  };

  const handleEmail = (e) => {
    // console.log(e.target.value);
    setUserEmail(e.target.value);
  };

  // if (loading) {
  //   return <div>Auth Login Loading...</div>;
  // }
  return (
    <>
      <div className="w-full p-8 space-y-3 rounded-xl  text-gray-800">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <p className="text-center text-lg text-red-800">{loginError}</p>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-1 text-sm">
            <label for="email" className="block text-lg text-gray-400">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is Required",
              })}
              id="email"
              onChange={handleEmail}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md text-lg border-gray-200 focus:outline-none bg-white text-gray-900"
            />
            {errors.email && (
              <p
                role="alert"
                className="text-red-800 text-[15px] font-semibold"
              >
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-lg text-gray-400">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
              })}
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md text-lg border-gray-200 focus:outline-none bg-white text-gray-900"
            />
            {errors.password && (
              <p
                role="alert"
                className="text-red-800 text-[15px] font-semibold"
              >
                {errors.password?.message}
              </p>
            )}
            <div className="flex justify-end text-sm text-gray-800">
              <span
                className="cursor-pointer hover:text-blue-800 hover:underline"
                onClick={handlePassword}
              >
                Forgot Password?
              </span>
            </div>
          </div>
          {!loading ? (
            <button className="block w-full p-3 text-center rounded-sm text-lg text-gray-900 bg-violet-400 modal-action">
              Log In
            </button>
          ) : (
            <div className="w-full p-3 rounded-sm bg-violet-400">
              <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-white mx-auto"></div>
            </div>
          )}
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-md text-gray-800">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md hover:bg-gray-800 transition-colors duration-700 hover:text-gray-200 border-gray-800"
            onClick={googleHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <p className="text-sm text-center sm:px-6 text-gray-500">
          Don't have an account?
          <span
            rel="noopener noreferrer"
            className="underline text-gray-800 cursor-pointer"
            onClick={() => setIsModal(!isModal)}
          >
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
};

export default Logine;
