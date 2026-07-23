import { useState } from "react";
import { api } from "../service/api";

const About = () => {
  const [message, setMessage] = useState("");

  async function handleCall() {
    try {
      const response = await api.get("/data");
      const result = response.data.message;
      setMessage(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <button className="p-2 bg-green-400" onClick={handleCall}>
        call
      </button>
      <h1 className="font-extrabold">{message}</h1>
    </div>
  );
};

export default About;
