import React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function NavItem({ title, link }) {
    return (
        <Link to={link} smooth={true}>
            <Text
                color={"black"}
                fontSize={"lg"}
                fontWeight={"medium"}
                cursor={"pointer"}
            >
                {title}
            </Text>
        </Link>
    );
}
