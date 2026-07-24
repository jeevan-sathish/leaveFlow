import { useState } from "react";
import InputField from "../components/InputField";
import Label from "../components/Label";
import Button from "../components/Button";
import { api } from "../service/api";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState();

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (data.name.trim() && data.email.trim() && data.password.trim()) {
      try {
        const response = await api.post("/auth/login", data);
        const result = response.data;
        setUserData(result);
        localStorage.setItem("lf_access_token", result.detail.access_token);
        localStorage.setItem("lf_refresh_token", result.detail.refresh_token);
        setData({ name: "", email: "", password: "" });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("enter the details");
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[20%] h-auto p-3 rounded-2xl flex flex-col gap-2 bg-pink-200"
      >
        <h1 className="text-[24px] text-center font-medium ">
          LeaveFlow LogIn
        </h1>
        <div className="flex flex-col">
          <Label />
          <InputField
            placeholder="enter your name:"
            name="name"
            value={data.name}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <Label />
          <InputField
            placeholder="enter your email:"
            name="email"
            value={data.email}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <Label />
          <InputField
            placeholder="enter your password:"
            name="password"
            value={data.password}
            handleChange={handleChange}
          />
        </div>
        <Button type="submit" />
      </form>

      <p>{userData?.detail.user_name}</p>
    </div>
  );
};

export default Login;
