import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

// Define the form data structure
interface RegisterFormData {
  email: string;
  password: string;
  name: string;
  photoURL: string;
}

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { emailPasswordRegister, setUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmitRegister = async (data: RegisterFormData) => {
    const { email, password, photoURL, name } = data;

    try {
      // Register user with email and password
      const res = await emailPasswordRegister(email, password);

      // Update the user's profile
      await updateProfile(res.user, {
        displayName: name,
        photoURL,
      });

      // Create user entry in the database
      const userInfo = {
        name,
        email,
        profilePicture: photoURL,
      };
      const result = await axiosPublic.post("/user", userInfo);

      if (result.data?.insertedId) {
        reset();
        toast.success("Registration successful.");
        setUser(res.user); // Set user in the context
        navigate("/");
      }
    } catch (err: any) {
      // Handle errors
      if (err?.customData?._tokenResponse?.error?.message === "EMAIL_EXISTS") {
        toast.error("Email already exists.");
      } else {
        console.error(err);
        toast.error("Registration unsuccessful.");
      }
    }
  };

  return (
    <div className="mx-2">
      <Helmet>
        <title>TripZone | Register</title>
      </Helmet>
      <ScrollRestoration />
      <div
        data-aos="zoom-in"
        className="w-full mb-9 border border-gray-200 border-gray-100/25 max-w-md mx-auto mt-12 p-8 space-y-3 rounded-xl bg-white text-gray-900"
      >
        <h1 className="text-2xl font-bold text-center text-black font-bugrasimo">
          Register Now!
        </h1>
        <form onSubmit={handleSubmit(onSubmitRegister)} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block text-gray-900">
              Name
            </label>
            <input
              {...register("name", {
                required: "This field is required.",
              })}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full placeholder:text-gray-700 px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-400 bg-transparent appearance-none"
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>

          {/* Photo URL Input */}
          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block text-gray-900">
              Photo URL
            </label>
            <input
              {...register("photoURL", {
                required: "This field is required.",
                pattern: {
                  value: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i,
                  message: "URL must be valid and include http or https.",
                },
              })}
              type="url"
              name="photoURL"
              placeholder="Photo URL"
              className="w-full placeholder:text-gray-700 px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-400 bg-transparent appearance-none"
            />
            {errors.photoURL && <span className="text-red-500">{errors.photoURL.message}</span>}
          </div>

          {/* Email Input */}
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-900">
              Email
            </label>
            <input
              {...register("email", {
                required: "This field is required.",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                  message: "Email must be valid.",
                },
              })}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full placeholder:text-gray-700 px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-400 bg-transparent appearance-none"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          {/* Password Input */}
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-gray-900">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "This field is required.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                  validate: {
                    oneLower: (value) =>
                      /[a-z]/.test(value) || "Password must include a lowercase character.",
                    oneUpper: (value) =>
                      /[A-Z]/.test(value) || "Password must include an uppercase character.",
                  },
                })}
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full placeholder:text-gray-700 px-4 py-3 rounded-md border-2 border-gray-500 bg-main text-gray-800 focus:border-violet-400 bg-transparent appearance-none"
              />
              <span
                className="absolute top-4 right-3 cursor-pointer p-1"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none font-bugrasimo"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-sm text-center sm:px-6 text-gray-800">
          Have an account?
          <Link to="/login" className="underline font-bold text-gray-800 ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
