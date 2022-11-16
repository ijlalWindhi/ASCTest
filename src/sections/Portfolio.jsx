import React from "react";
import {
    Box,
    Center,
    Image,
    Text,
    Heading,
    Button,
    Icon,
    Flex,
} from "@chakra-ui/react";
import ImageMockup from "../assets/images/image-mockup.svg";
import ImageBackground from "../assets/images/lebihKicik.png";
import { ArrowRight } from "react-feather";

export default function Portfolio() {
    return (
        <Flex
            justifyContent={{ base: "space-evenly", md: "space-between" }}
            alignItems={{ md: "center" }}
            mx={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            direction={{ base: "column", md: "row" }}
            backgroundImage={ImageBackground}
            backgroundPosition={{ base: "top", md: "left" }}
            backgroundRepeat="no-repeat"
            backgroundSize={"contain"}
            id="portfolio"
        >
            <Box>
                <Heading
                    fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                    display={{ base: "block", md: "none" }}
                >
                    Portfolio
                </Heading>
                <Center>
                    <Image
                        src={ImageMockup}
                        width={{
                            base: "100%",
                            sm: "50vw",
                            md: "40vw",
                            lg: "35vw",
                        }}
                        draggable={false}
                    />
                </Center>
            </Box>
            <Box maxW={{ md: "40%" }}>
                <Heading
                    fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                    display={{ base: "none", md: "block" }}
                >
                    Portfolio
                </Heading>
                <Button
                    bgColor={"black"}
                    color={"white"}
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight={"medium"}
                    width={{ base: 44, sm: 56 }}
                    display={{ base: "flex", md: "none" }}
                    position={"relative"}
                    top={-20}
                    _hover={{ bgColor: "black" }}
                >
                    View All
                    <Icon
                        as={ArrowRight}
                        ml={4}
                        w={5}
                        h={5}
                        fontWeight={"light"}
                    />
                </Button>
                <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight={"medium"}
                    my={{ base: 3, sm: 5, md: 10 }}
                >
                    It's no secret that mobile devices have now become an
                    integral part of our lives. Your favorite business can also
                    be always at hand and in the pocket of each client. Our team
                    will be your best guide to the world of automation and
                    modernization of your business. Automate your business to
                    make life easier
                </Text>
                <Button
                    bgColor={"black"}
                    color={"white"}
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight={"medium"}
                    width={44}
                    display={{ base: "none", md: "flex" }}
                    _hover={{ bgColor: "black" }}
                >
                    View All
                    <Icon
                        as={ArrowRight}
                        ml={4}
                        w={5}
                        h={5}
                        fontWeight={"light"}
                    />
                </Button>
            </Box>
        </Flex>
    );
}
