import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

export default function CardApplication({ title, description, image }) {
    return (
        <Box>
            <Image
                src={image}
                h={{ base: 44, md: 32, lg: 40 }}
                position={"relative"}
                top={{ base: 2, lg: 5 }}
                left={4}
                draggable={false}
            />
            <Box
                bgColor={"#F8F8F8"}
                py={{ base: 4, lg: 10 }}
                px={{ base: 6, lg: 6 }}
                maxW={{ base: "full", md: "sm" }}
                minH={{ base: 36, md: 52, lg: 48 }}
                h={"fit-content"}
                rounded={"xl"}
                my={"auto"}
            >
                <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "md", lg: "md" }}
                    h={{ base: 10, md: 16, lg: 12 }}
                >
                    {title}
                </Text>
                <Text
                    fontSize={{ base: "sm", lg: "sm" }}
                    fontWeight={"medium"}
                    mt={4}
                >
                    {description}
                </Text>
            </Box>
        </Box>
    );
}
