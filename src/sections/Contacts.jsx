import React from "react";
import {
    Box,
    Center,
    Image,
    Input,
    Textarea,
    Heading,
    Button,
    Icon,
    Flex,
} from "@chakra-ui/react";
import ImageContacts from "../assets/images/image-contacts.svg";
import ImageBackground from "../assets/images/lebihKicik.png";
import { ArrowRight } from "react-feather";

export default function Contacts() {
    return (
        <Flex
            justifyContent={{ base: "space-evenly", md: "space-between" }}
            alignItems={{ md: "center" }}
            mx={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            direction={{ base: "column-reverse", md: "row" }}
            backgroundImage={ImageBackground}
            backgroundPosition={{ base: "top", md: "left" }}
            backgroundRepeat="no-repeat"
            backgroundSize={"contain"}
            id="contacts"
        >
            <Box maxW={{ md: "40%" }}>
                <Heading
                    fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                    display={{ base: "none", md: "block" }}
                >
                    Pump it app
                </Heading>
                <Flex mt={{ base: 5, md: 10 }} justifyContent={"space-between"}>
                    <Input
                        placeholder="Your Name"
                        size="lg"
                        w={{ base: "45%", md: "50%" }}
                        border={0}
                        className="glassmorphismInput"
                        fontSize={"md"}
                        color={"#000"}
                    />
                    <Input
                        placeholder="Your Email"
                        size="lg"
                        w={{ base: "45%", md: "50%" }}
                        border={0}
                        className="glassmorphismInput"
                        fontSize={"md"}
                        color
                    />
                </Flex>
                <Textarea
                    placeholder="Message, also other contact details"
                    size="lg"
                    w={{ base: "100%", md: "100%" }}
                    mt={2}
                    border={0}
                    minH={{ base: 28, md: 52 }}
                    className="glassmorphismInput"
                    fontSize={"md"}
                    color
                />
                <Button
                    bgColor={"black"}
                    color={"white"}
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight={"medium"}
                    width={44}
                    mt={{ base: 5 }}
                    _hover={{ bgColor: "black" }}
                >
                    Send
                    <Icon
                        as={ArrowRight}
                        ml={4}
                        w={5}
                        h={5}
                        fontWeight={"light"}
                    />
                </Button>
            </Box>
            <Box>
                <Heading
                    fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                    display={{ base: "block", md: "none" }}
                >
                    Pump it app
                </Heading>
                <Center>
                    <Image
                        src={ImageContacts}
                        width={{
                            base: "30vw",
                            md: "30vw",
                            lg: "20vw",
                        }}
                        draggable={false}
                    />
                </Center>
            </Box>
        </Flex>
    );
}
