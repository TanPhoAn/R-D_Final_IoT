import React, { useState, useEffect } from "react";
import axios from "axios";
import loginimage from "../assets/loginimage.png"; // Import loginimage.png
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS, API_HEADERS } from "../config/apiConfig";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Redirect if token already exists
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        API_ENDPOINTS.LOGIN,
        formData,
        API_HEADERS.JSON
      );
      localStorage.setItem("accessToken", response.data.token);
      navigate("/");
    } catch (error) {
      const message = error?.response?.data?.detail || "Login failed.";
      alert(message);
    }
  };
  const handleSignUpClick = () => {
    navigate(`/signup`); // Navigate to the details page
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

      {/* Right Side - Login Form */}
      <div className="w-1/3 flex flex-col justify-center items-center bg-white px-12">
        <div className="w-full max-w-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d088f690e5ab1bc29b66d083d409dab8f35341da8e04455104e2bdd22f519bc?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
            alt="Logo"
            className="object-contain self-center max-w-full aspect-[1.69] w-[108px]"
          />
          <h1 className="text-2xl font-bold mb-2 text-gray-700">
            Login to your Account
          </h1>
          <p className="text-gray-500 mb-6">Welcome to IoB</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="mail@abc.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
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
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>
                <input type="checkbox" id="remember" className="mr-1" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <a href="#" className="text-yellow-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Not Registered Yet?{" "}
            <a
              href="#"
              className="text-yellow-500 hover:underline"
              onClick={handleSignUpClick}
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
