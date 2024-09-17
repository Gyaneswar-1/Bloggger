import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Loginpagedemo() {
  const { register, handleSubmit } = useForm();
  const api = "http://localhost:3000/auth/register";
  const addProduct = async (data) => {
    const {email,username,password} = data;
    await axios.post(api, {
      email: email,
      username: username,
      password: password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    console.log(username,email,password);
  };
  return (
    <div className="p-9">
      <form action="" onSubmit={handleSubmit((data) => addProduct(data))}>
        <input
          {...register("username")}
          type="text"
          className="border-2 p-1 m-2 rounded-sm"
          placeholder="name"
        />
        <input
          {...register("email")}
          type="email"
          className="border-2 p-1 m-2 rounded-sm"
          placeholder="email"
        />
        <input
          {...register("password")}
          type="password"
          className="border-2 p-1 m-2 rounded-sm"
          placeholder="password"
        />
        <input
          type="submit"
          className="bg-green-300 p-2 rounded cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Loginpagedemo;
