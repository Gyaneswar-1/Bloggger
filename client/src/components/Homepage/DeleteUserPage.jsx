import React, { useEffect } from 'react';
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
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../services/apiManage.service';

function DeleteUserPage(id) {
  console.log("recived id ",id.id);
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const handleDelete = async () => {
    try {
      const result = await deleteUser(id.id);
      onClose();
      if (result) {
        navigate("/welcome");
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete this user?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost' colorScheme="red" onClick={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteUserPage;