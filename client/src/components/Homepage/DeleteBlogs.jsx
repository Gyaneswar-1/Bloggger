import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { deleteBlog } from "../../services/apiManage.service";

function DeleteBlogs({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const handleDelete = async () => {
    try {
      const response = await deleteBlog(id);
      if (response) {
        toast({
          title: "Blog deleted.",
          description: "The blog has been deleted refresh the page to see the change",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
      }
      onClose();
    } catch (error) {
      console.error("Failed to delete blog:", error);
      toast({
        title: "Error",
        description: "Failed to delete the blog.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete this blog?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" colorScheme="red" onClick={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteBlogs;
