import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function CardTariffs({ title, description, color1, color2 }) {
    return (
        <Box
            py={{ base: 4, lg: 10 }}
            px={{ base: 6, lg: 6 }}
            pt={{ base: 4, md: 16, lg: 28 }}
            w={{ base: "full", md: 72 }}
            h={{ base: 52, sm: 64, md: 80 }}
            rounded={{ base: "1rem", md: "2rem", lg: "3rem" }}
            my={"auto"}
            bgGradient={`linear(to-tl, ${color1}, ${color2})`}
            color={"white"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={{ base: "center", md: "initial" }}
            boxShadow={`0px 13px 10px 0px rgba(0,0,0,0.15)`}
        >
            <Text
                fontWeight={"bold"}
                fontSize={{ base: "md", lg: "xl" }}
                top={0}
                position={"relative"}
            >
                {title}
            </Text>
            <Text
                fontSize={{ base: "sm" }}
                fontWeight={"medium"}
                pt={{ md: 4 }}
            >
                {description}
            </Text>
        </Box>
    );
}
