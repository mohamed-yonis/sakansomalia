import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [userdata, setUserData] = useState({
    user_name: "",
    password: "",
  });
  const navigate = useNavigate();
  const HandleChange = async (e) => {
    setUserData({ ...userdata, [e.target.id]: e.target.value });
  };

  const handeSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/login", userdata);
      navigate("/dashboard");
      return toast.success(data.message);
    } catch (error) {
      toast.error(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-gray-200  w-80 h-96 p-6 rounded-md shadow-xl">
        <h1 className="text-center text-4xl font-bold text-green-500 m-2">
          Login
        </h1>
        <p className="text-gray-700">Fill in the form below to sign up.</p>
        <form onSubmit={handeSubmit}>
          <input
            type="text"
            onChange={HandleChange}
            id="user_name"
            className="w-full p-2 my-2 rounded"
            placeholder="Enter Your Email.."
          />{" "}
          <br />
          <input
            type="password"
            onChange={HandleChange}
            id="password"
            className="w-full p-2 my-2 rounded"
            placeholder="Enter Your Password.."
          />{" "}
          <br />
          <button className="w-full p-2 mt-2 bg-green-500 text-white rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
