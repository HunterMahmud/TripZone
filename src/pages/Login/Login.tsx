import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string }>();
  const { emailPasswordLogIn, googleLogin } = useAuth()!;
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmitLogin = (data: { email: string; password: string }) => {
    emailPasswordLogIn(data.email, data.password)
      .then((res: any) => {
        toast.success("Login success.");
        navigate(location?.state || "/");
      })
      .catch((err: any) => {
        console.error(err);
        toast.error("Login failed. Invalid credentials");
      });
  };

  const handleLoginWithGoogle = () => {
    googleLogin()
      .then((res: { user: { email: string; displayName: string } }) => {
        const userInfo = { email: res.user.email, name: res.user.displayName };
        axiosPublic.post("/user", userInfo).then((response: any) => {
          console.log(response.data);
          navigate(location?.state || "/");
        });
      })
      .catch((err: any) => {
        console.error(err);
        toast.error("Login failed. Invalid credentials");
      });
  };

  return (
    <div className="mx-2">
      <Helmet>
        <title>TripZone | Login</title>
      </Helmet>
      <div
        data-aos="zoom-in"
        className="w-full mb-9 max-w-md mx-auto mt-12 p-8 space-y-3 rounded-xl border border-gray-200 bg-white text-black shadow-lg"
      >
        <h1 className="text-2xl font-bold text-center text-black font-bugrasimo">Login</h1>
        <form onSubmit={handleSubmit(onSubmitLogin)} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-900">Email</label>
            <input
              {...register("email", {
                required: { value: true, message: "This field is required." },
              })}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full placeholder:text-gray-700 px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-100 bg-transparent appearance-none"
            />
            {errors.email?.message && (
              <span className="text-red-500">
                {typeof errors.email.message === "string" ? errors.email.message : "Invalid input"}
              </span>
            )}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-900">Password</label>
            <div className="relative">
              <input
                {...register("password", {
                  required: { value: true, message: "This field is required." },
                })}
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full placeholder:text-gray-700 px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-100 bg-transparent appearance-none"
              />
              <span
                className="absolute top-4 right-3 text-black cursor-pointer p-1"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password?.message && (
              <span className="text-red-500">
                {typeof errors.password.message === "string" ? errors.password.message : "Invalid input"}
              </span>
            )}
          </div>
          <button type="submit" className="w-full py-3 px-4 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Login
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-200"></div>
          <p className="px-3 text-sm text-gray-800">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-200"></div>
        </div>
        <button
          onClick={handleLoginWithGoogle}
          className="w-full py-3 px-4 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
        >
          Login with Google
        </button>
        <p className="text-xs text-center sm:px-6 text-gray-800">
          Don't have an account?{" "}
          <Link to="/signup" className="underline text-blue-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
