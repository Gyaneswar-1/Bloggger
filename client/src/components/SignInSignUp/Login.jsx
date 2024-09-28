import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) =>{
    setEmail(e.target.value);
    setIsError(!e.target.value.includes("@"));
  }

  return (
    <>
      <FormControl>
        <FormLabel>Email:</FormLabel>
        <Input type="email" value={email} onChange={handleChange}/>
        <FormLabel>Username: </FormLabel>
        <Input type="Username" value={email} onChange={handleChange}/>
        <FormLabel>Password: </FormLabel>
        <Input type="password" value={email} onChange={handleChange}/>
        <FormLabel>confirm: </FormLabel>
        <Input type="password" value={email} onChange={handleChange}/>
        {isError ? (
          <FormHelperText>We'll never share your email.</FormHelperText>
        ) : (
          <FormErrorMessage>Email is required "@"</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
}

export default Login;
