import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import FotItem from "./fragment/FotItem";

export default function index() {
    return (
        <Box bgColor={"black"}>
            <Flex
                justifyContent={{ base: "space-evenly", md: "space-between" }}
                alignItems={{ md: "center" }}
                mx={{ base: 10, md: 20, lg: 32 }}
                py={{ base: 5, md: 8 }}
                color={"white"}
                direction={{ base: "column-reverse", md: "row" }}
                gap={{ base: 10, md: 0 }}
            >
                <Box>
                    <Text fontSize={{ base: "sm", md: "md" }}>
                        Copyright © 2020 PUMPIT
                    </Text>
                    <Text fontSize={{ base: "sm", md: "md" }}>
                        620142. Belinsky 108, Yekaterinburg, Sverdlovsk region,
                        Russia
                    </Text>
                </Box>
                <Box
                    display={"flex"}
                    gap={{ base: 1, md: 5 }}
                    flexDir={{ base: "column", md: "row" }}
                >
                    <FotItem title={"About"} link={"about"} />
                    <FotItem title={"Workflow"} link={"workflow"} />
                    <FotItem title={"Portfolio"} link={"portfolio"} />
                    <FotItem title={"Contacts"} link={"contacts"} />
                </Box>
            </Flex>
        </Box>
    );
}
