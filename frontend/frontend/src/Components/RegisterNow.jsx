// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const RegisterNow = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/signup",
//         data
//       );
//       console.log("User Registered:", res.data);

//       alert("Registration Successful! Please log in.");
//       navigate("/login"); // Redirect to login page
//     } catch (error) {
//       console.error(
//         "Registration Error:",
//         error.response?.data || error.message
//       );
//       setErrorMessage(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
//           Register Now
//         </h2>

//         {errorMessage && (
//           <p className="text-red-500 text-center mb-4">{errorMessage}</p>
//         )}

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Full Name</label>
//             <input
//               type="text"
//               {...register("fullName", { required: "Full Name is required" })}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
//               placeholder="Enter your full name"
//             />
//             {errors.fullName && (
//               <p className="text-red-500 text-sm">{errors.fullName.message}</p>
//             )}
//           </div>

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
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters",
//                   },
//                 })}
//                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
//                 placeholder="Create a password"
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
//             className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
//           >
//             Register Now
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterNow;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterNow = () => {
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
        "http://localhost:5000/api/auth/signup",  // Ensure this matches the backend API endpoint
        data
      );
      console.log("User Registered:", res.data);

      alert("Registration Successful! Please log in.");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error(
        "Registration Error:",
        error.response?.data || error.message
      );
      setErrorMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Register Now
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })} // Corrected to "name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Create a password"
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
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
          >
            Register Now
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterNow;
