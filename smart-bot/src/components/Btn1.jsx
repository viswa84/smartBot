import { Alert, AlertIcon, Box, Button } from "@chakra-ui/react";
import React from "react";
import DrawerExample from "./FreetrailModal";

export function Btn1(props) {
  return (
    <div>
      <Box>
        <DrawerExample name={props.name} size={props.size} />
      </Box>
    </div>
  );
}

export function Btn2(props) {
  let click =()=>{
    <Alert status="error">
    <AlertIcon />
    There was an error processing your request
  </Alert>;
  }
  return (
   
    <div>
      <Button
        size={props.size}
        colorScheme="blue"
        variant="solid"
        onClick={click}
      >
        {props.name}
      </Button>
    </div>
  );
}
