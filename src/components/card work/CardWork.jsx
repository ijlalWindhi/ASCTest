import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

export default function CardWork({ title, description }) {
    return (
        <Box
            className="glassmorphism"
            py={{ base: 4, lg: 10 }}
            px={{ base: 6, lg: 6 }}
            minW={{ base: "full", md: "52" }}
            maxW={{ base: "full", md: "sm" }}
            minH={{ base: 28, md: 36, lg: 32 }}
            h={"fit-content"}
            rounded={"xl"}
            my={"auto"}
        >
            <Text fontWeight={"bold"} fontSize={{ base: "md", lg: "md" }}>
                {title}
            </Text>
            <Text fontSize={{ base: "sm", lg: "sm" }} fontWeight={"medium"}>
                {description}
            </Text>
        </Box>
    );
}
