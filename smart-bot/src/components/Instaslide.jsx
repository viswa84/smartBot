import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Instaslide() {
  return (
    <Box ml="10%" mr="10%">
      <HStack justifyContent={"space-evenly"} textAlign="center">
        <Stack gap={"20px"}>
          <Text fontSize={"26px"}>Personalized experiences</Text>
          <Text pl="20px">
            Build Authentic Relationships with your users using <br />
            personalized messages & experiences.
          </Text>
          <Image
            w="385px"
            src="https://www.smatbot.com/img/Instagram/Personalized%20exp.png"
          />
          <Text></Text>
        </Stack>
        <Stack gap={"20px"}>
          <Text fontSize={"26px"}>Personalized experiences</Text>
          <Text>
            Automate customer support using chatbots and <br /> answer queries
            instantly 24/7.
          </Text>
          <Image
            w="385px"
            src="https://www.smatbot.com/img/Instagram/Deliver%20instant.png"
          />
          <Text></Text>
        </Stack>
      </HStack>
    </Box>
  );
}
