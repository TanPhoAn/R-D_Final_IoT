import React, { useState } from "react";
import axios from "axios";
import loginimage from "../assets/loginimage.png";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS, getAuthHeader } from "../config/apiConfig";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmpassword } = formData;

    if (password !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await axios.post(API_ENDPOINTS.REGISTER, { email, password }, getAuthHeader());
      alert("Register successful!");
      navigate("/login");
    } catch (error) {
      const message = error?.response?.data?.detail || "Registration failed.";
      alert(message);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Illustration */}
      <div className="w-2/3 flex items-center justify-center bg-orange-100">
        <img
          src={loginimage}
          alt="Beekeeper"
          className="max-w-xs md:max-w-sm"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-1/3 flex flex-col justify-center items-center bg-white px-12">
        <div className="w-full max-w-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d088f690e5ab1bc29b66d083d409dab8f35341da8e04455104e2bdd22f519bc?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
            alt="Logo"
            className="object-contain self-center max-w-full aspect-[1.69] w-[108px]"
          />
          <h1 className="text-2xl font-bold mb-2 text-gray-700">Sign Up</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="mail@abc.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="**********"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Confirm password</label>
              <input
                onChange={handleChange}
                name="confirmpassword"
                type="password"
                placeholder="**********"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
            >
              Sign Up
            </button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already Registered?{" "}
              <a
                href="#"
                className="text-yellow-500 hover:underline"
                onClick={() => navigate("/login")}
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
