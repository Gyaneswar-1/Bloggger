import React, { useState } from "react";
import { register } from "../../services/authService.js";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Toast from "../ReuseableComponents.jsx/Toast.jsx";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const toastRes = () => {
    <Toast
      title="User registered"
      desc="User registered success"
      status="success"
    />;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const userdata = {
        email: email,
        username: username,
        password: password,
        pfp: null,
      };

      try {
        await register(userdata);
        navigate("/home");
        toastRes();
      } catch (error) {
        console.log("Registration failed Try again");
        toastRes();
      }
    } else {
      console.log("password did not match");
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setIsError(!e.target.value.includes("@"));
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const isPasswordMismatch = password !== confirmPassword;

  return (
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
        <FormLabel>Username</FormLabel>
        <Input type="text" value={username} onChange={handleChangeUsername} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={handlePassword} />
      </FormControl>
      <FormControl isInvalid={isPasswordMismatch}>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
            
        {isPasswordMismatch && (
          <FormErrorMessage>Passwords do not match</FormErrorMessage>
        )}
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Register
      </Button>
    </form>
  );
}
