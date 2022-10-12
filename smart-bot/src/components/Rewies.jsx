import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  Avatar,
  HStack,
  Center,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export default function Rewies() {
  return (
    <Box>
      <Center p={"40px"}>
        <Stack>
          <Text fontSize={"26px"}>Latest Blog & News</Text>
          <Center>
            {" "}
            <Image
              mt={"3px"}
              w={"140px"}
              src="https://www.smatbot.com/img/Line.svg"
            />
          </Center>
        </Stack>
      </Center>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="full"
          maxW="450px"
          mx="auto"
          px={4}
          py={3}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="md"
          rounded="md"
          pl={"40px"}
          pr="40px"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <span
              fontSize="m"
              color="gray.800"
              _dark={{
                color: "gray.400",
              }}
            >
              Instagram Chatbot
            </span>
            <span
              color="brand.800"
              _dark={{
                color: "brand.900",
              }}
              px={3}
              py={1}
              rounded="full"
              textTransform="uppercase"
              fontSize="xs"
            >
              1 JUN
            </span>
          </Flex>

          <Box>
            <Text
              fontSize="lg"
              fontWeight="bold"
              mt={2}
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              How to Build Loyal Customers on Instagram Using Chatoats ?
            </Text>
            <Text
              fontSize="sm"
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
              Cusromer loyalty and retention are things that play a vital role
              for businesses
            </Text>
          </Box>

          <Box>
            <Flex
              alignItems="center"
              mt={2}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            ></Flex>

            <HStack mt={7} gap="20px">
              <Avatar
                name="Ryan Florence"
                src="https://www.smatbot.com/img/sultana.jpg"
              />
              <Box>
                <Text fontSize={"xl"}>Khadeer Sultana</Text>
                <Text fontSize={"s"}> India</Text>
              </Box>
            </HStack>
          </Box>
        </Box>
        <Box
          w="full"
          maxW="450px"
          mx="auto"
          px={4}
          py={3}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="md"
          rounded="md"
          pl={"40px"}
          pr="40px"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <span
              fontSize="m"
              color="gray.800"
              _dark={{
                color: "gray.400",
              }}
            >
              Artificial Intelligence
            </span>
            <span
              color="brand.800"
              _dark={{
                color: "brand.900",
              }}
              px={3}
              py={1}
              rounded="full"
              textTransform="uppercase"
              fontSize="xs"
            >
              2 Feb
            </span>
          </Flex>

          <Box>
            <Text
              fontSize="lg"
              fontWeight="bold"
              mt={2}
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              How To Use RasaX To Create An AI Chatbot
            </Text>
            <Text
              fontSize="sm"
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
              in simple terms ,Rasa is an open -sorce platform used to build
              conversational assistants deployed
            </Text>
          </Box>

          <Box>
            <Flex
              alignItems="center"
              mt={2}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            ></Flex>

            <HStack mt={7} gap="20px">
              <Avatar
                name="Ryan Florence"
                src="https://www.smatbot.com/img/vishal_reddy.jpg"
              />
              <Box>
                <Text fontSize={"xl"}>Vishal Reddy</Text>
                <Text fontSize={"s"}> India</Text>
              </Box>
            </HStack>
          </Box>
        </Box>
        <Box
          w="full"
          maxW="450px"
          mx="auto"
          px={4}
          py={3}
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="md"
          rounded="md"
          pl={"40px"}
          pr="40px"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <span
              fontSize="m"
              color="gray.800"
              _dark={{
                color: "gray.400",
              }}
            >
              Instagram Chatbot
            </span>
            <span
              color="brand.800"
              _dark={{
                color: "brand.900",
              }}
              px={3}
              py={1}
              rounded="full"
              textTransform="uppercase"
              fontSize="xs"
            >
              15 SEP
            </span>
          </Flex>

          <Box>
            <Text
              fontSize="lg"
              fontWeight="bold"
              mt={2}
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              Customer Support Chatbots:Do You Really Need it ?
            </Text>
            <Text
              fontSize="sm"
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
              Customer Service is the new Marketing Strategy .Brands are more
              Focused on Building the customer engagement
            </Text>
          </Box>

          <Box>
            <Flex
              alignItems="center"
              mt={2}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            ></Flex>

            <HStack mt={7} gap="20px">
              <Avatar
                name="Ryan Florence"
                src="https://www.smatbot.com/img/sultana.jpg"
              />
              <Box>
                <Text fontSize={"xl"}>Khadeer Sultana</Text>
                <Text fontSize={"s"}> India</Text>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
