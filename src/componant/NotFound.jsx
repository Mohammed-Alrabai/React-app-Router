import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import bgNotFound from "../assets/bg-1.svg";

export default function NotFound() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <chakra.header>
      <Box
        w="85%"
        mx={"auto"}
        h="container.sm"
        backgroundImage={bgNotFound}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="center">
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          position={"relative"}>
          <Stack
          w={"full"}
          h={"full"}
            justify={{ base: "end" }}
            textAlign="center"
            alignItems="center"
            spacing={6}>
            <Button
              bg={{ base: "white", md: "brand.500" }}
              _dark={{ color: "#000" }}
              _hover={{ bg: "blue.500" }}
              textTransform="uppercase"
              w="fit-content">
              Go Back
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
}
