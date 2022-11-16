import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function FotItem({ title, link }) {
    return (
        <Link to={link} smooth={true}>
            <Text
                color={"white"}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight={"medium"}
                cursor={"pointer"}
            >
                {title}
            </Text>
        </Link>
    );
}
