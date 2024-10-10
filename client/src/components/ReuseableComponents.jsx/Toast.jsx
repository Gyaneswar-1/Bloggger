import React, { useEffect } from "react";
import { useToast, Button } from "@chakra-ui/react";

function Toast({ title, desc, status }) {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: title || "This is test title",
      description: desc || "This is test description",
      status: status || "success",
      duration: 5000,
      isClosable: true,
    });
  }, [toast, title, desc, status]);

  return <></>;
}

export default Toast;
