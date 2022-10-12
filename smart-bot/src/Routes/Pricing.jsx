import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import PricingTable from "../components/PricingTable";

export default function Pricing() {
  return (
    <Box>
      <Navbar />

      <Stack
        h="250px"
        bg={"blue"}
        color="white"
        justifyContent={"center"}
        alignItems="center"
        fontWeight={"bold"}
      >
        <Text fontSize={"30px"}>Try SmatBot Free For 14 Days Now.</Text>
        <Text fontSize={"30px"}>Pick Your Plan Later. </Text>
      </Stack>

      <Box mt={'50px'}>
      <PricingTable/>
      </Box>
    </Box>
  );
}
