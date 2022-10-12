import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  Image,
  Stack,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function SingnForm(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <Box>
      <Text onClick={onOpen}>{props.name}</Text>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Image
              w={"140px"}
              src="https://s3.ap-south-1.amazonaws.com/custpostimages/sb_images/SB_logo_horizontal_text.png"
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} mt="60px">
            <Center>
              {" "}
              <Stack id="modalboday" gap={"10px"}>
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Phone number" />
                <Input placeholder="Password" />
              </Stack>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() =>
                toast({
                  title: "Account created.",
                  description: "We've created your account for you.",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                })
              }
              colorScheme="blue"
              mr={3}
            >
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
