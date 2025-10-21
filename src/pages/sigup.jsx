import React from "react";
import '../App.css';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import profile from "../Images/profile.png";

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (formData) => {
    try {
      // 🔹 Fetch all existing users
      const response = await fetch("https://main-projectnode.vercel.app/user/Get");
      const jsonData = await response.json();
      const users = jsonData.Data || []; // ✅ extract array only

      // 🔹 Check if user already exists
      const nameExists = users.find((u) => u.username === formData.username);
      const emailExists = users.find((u) => u.email === formData.email);
      const phoneExists = users.find((u) => u.phone === formData.phone);

      if (nameExists) return toast.error("User with this name already exists");
      if (emailExists) return toast.error("User with this email already exists");
      if (phoneExists) return toast.error("User with this number already exists");

      // 🔹 Prepare signup data
      const newUser = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        Useraddress: "",
        Userpincode: "",
        Userstate: "",
        Usercity: "",
        profileimage: profile,
        role: "Users"
      };

      // 🔹 Send POST request
      const postRes = await fetch("https://main-projectnode.vercel.app/user/Post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      });

      if (postRes.ok) {
        toast.success("User signup successful");
        reset();
        setTimeout(() => navigate("/Login"), 2000);
      } else {
        toast.error("Error during signup");
      }
    } catch (error) {
      toast.error("Please try again later");
      console.error(error);
    }
  };

  return (
    <>
      <Helmet><title>Signup Page</title></Helmet>
      <Toaster />
      <div className="signup-wrapper">
        <div className="signup-card">
          <h2>Sign Up</h2>
          <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            
            {/* Username */}
            <input
              type="text"
              placeholder="Full Name"
              {...register("username", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters allowed in name"
                }
              })}
            />
            {errors.username && <p className="error">{errors.username.message}</p>}

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format"
                }
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message:
                    "Password must be 8+ chars, include upper, lower, number & special char"
                }
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}

            {/* Phone */}
            <input
              type="text"
              placeholder="Mobile Number"
              {...register("phone", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers allowed"
                },
                minLength: {
                  value: 10,
                  message: "Minimum 10 digits required"
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 digits allowed"
                }
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}

            <button type="submit">Create Account</button>
          </form>
          <p className="bottom-text">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export { Signup };
