import React from "react";
import {
  Flex,
  Button,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Link,
  HStack,
} from "@chakra-ui/react";

const AboutMeList = () => {
  return (
    <>
      <UnorderedList display={"flex"} justifyContent={"center"} fontSize={"xl"}>
        <ListItem>
          I am a Computer Science student at Louisiana State University
        </ListItem>
        <ListItem></ListItem>
      </UnorderedList>
    </>
  );
};

export default AboutMeList;
