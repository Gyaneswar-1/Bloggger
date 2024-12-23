import React, { useState } from "react";
import { login } from "../../services/authService.js";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import HomeEx from "../Homepage/HomeEx";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const toast = useToast();

  const toastRes = () => {
    toast({
      title: "User is not registered",
      description: "user not registered try register ",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userdata = {
      email: email,
      password: password,
    };

    try {
      await login(userdata);
      navigate("/home/main");
    } catch (error) {
      toastRes();
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setIsError(!e.target.value.includes("@"));
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className=" text-4xl font-playfair text-center">Welcome Back</div>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={isError}>
          <FormLabel>Email:</FormLabel>
          <Input type="email" value={email} onChange={handleChangeEmail} />
          {isError && (
            <FormErrorMessage>
              Email is required and must include "@"
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={handlePassword} />
        </FormControl>
        <div className="google-login flex gap-4 justify-around mt-8">
          <button
            type="button"
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
          >
            <i class="ri-google-fill w-4 h-4 me-2"></i>
            Sign in with Google
          </button>
          <button
            type="button"
            class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
          >
            <i class="ri-twitter-fill w-4 h-4 me-2"></i>
            Sign in with Twitter
          </button>
        </div>
        <Button mt={4}  colorScheme="teal" type="submit">
          SignIn
        </Button>
      </form>
    </>
  );
}

export default SignUp;
