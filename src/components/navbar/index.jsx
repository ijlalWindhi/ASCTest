import React from "react";
import {
    Box,
    Heading,
    Flex,
    Icon,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import NavItem from "./fragment/NavItem";
import { X, AlignRight } from "react-feather";

export default function index() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mx={{ base: 10, md: 20, lg: 32 }}
                py={4}
            >
                <Flex
                    justifyContent={{ base: "space-between" }}
                    w={"full"}
                    my="auto"
                    alignItems={"center"}
                >
                    <Heading
                        textTransform={"uppercase"}
                        fontWeight={"bold"}
                        fontSize={{ base: "2xl", md: "3xl" }}
                    >
                        pumpit
                    </Heading>
                    <Icon
                        as={isOpen ? X : AlignRight}
                        onClick={isOpen ? onClose : onOpen}
                        display={{ md: "none" }}
                        w={6}
                        h={6}
                    />
                </Flex>
                <Flex gap={8} display={{ base: "none", md: "flex" }}>
                    <NavItem title={"About"} link={"about"} />
                    <NavItem title={"Workflow"} link={"workflow"} />
                    <NavItem title={"Portfolio"} link={"portfolio"} />
                    <NavItem title={"Contacts"} link={"contacts"} />
                </Flex>
            </Box>
            {isOpen ? (
                <Box
                    py={4}
                    display={{ md: "none" }}
                    textAlign={"center"}
                    position={"absolute"}
                    w={"full"}
                    className={"glassmorphism"}
                >
                    <Stack as={"nav"} spacing={[4]}>
                        <NavItem title={"About"} link={"about"} />
                        <NavItem title={"Workflow"} link={"workflow"} />
                        <NavItem title={"Portfolio"} link={"portfolio"} />
                        <NavItem title={"Contacts"} link={"contacts"} />
                    </Stack>
                </Box>
            ) : null}
        </>
    );
}
