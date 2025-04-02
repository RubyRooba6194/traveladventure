// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// const SignIn = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [showPassword, setShowPassword] = useState(false);

//   const onSubmit = (data) => {
//     console.log("User Signed In:", data);
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//           Sign In
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
//               placeholder="Enter your email"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-gray-700">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 {...register("password", { required: "Password is required" })}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
//                 placeholder="Enter your password"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-600"
//               >
//                 {showPassword ? "👁️" : "🔒"}
//               </button>
//             </div>
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Register Now
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );
      console.log("User Signed In:", res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        alert("Login Successful!");
        navigate("/"); // Redirect to home page after login
      } else {
        setErrorMessage("Login failed: No token received");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Sign In
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-600"
              >
                {showPassword ? "👁️" : "🔒"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
