import React, { useState } from "react";
import { register } from "../../services/authService";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const  handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Email:", email);
    // console.log("Email:", username);
    // console.log("Email:", password);
    // console.log("Email:", confirmPassword);

    if (password === confirmPassword) {
      const userdata = {
        email: email,
        username: username,
        password: password,
        pfp: "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/GettyImages-2150913647-copy.jpg?w=1296&h=730&crop=1",
      };
      console.log(await register(userdata));
      
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

export default Login;
