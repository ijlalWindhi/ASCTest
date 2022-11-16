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
import ImageHero from "../assets/images/image-hero.svg";
import ImageBackground from "../assets/images/image-background1.png";
import { ArrowRight } from "react-feather";

export default function Hero() {
    return (
        <Flex
            justifyContent={{ base: "space-evenly", md: "space-between" }}
            alignItems={{ md: "center" }}
            mx={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            direction={{ base: "column-reverse", md: "row" }}
        >
            <Box>
                <Heading
                    fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                >
                    Progressive Unique
                </Heading>
                <Heading
                    className="textOutline"
                    fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                >
                    Mobile Product IT
                </Heading>
                <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight={"medium"}
                    maxW={{ base: "100%", lg: "50%" }}
                    my={{ base: 3, sm: 5, md: 10 }}
                >
                    Mobile development applications
                </Text>
                <Button
                    bgColor={"black"}
                    color={"white"}
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight={"medium"}
                    width={44}
                    _hover={{ bgColor: "black" }}
                >
                    Contact
                    <Icon
                        as={ArrowRight}
                        ml={4}
                        w={5}
                        h={5}
                        fontWeight={"light"}
                    />
                </Button>
            </Box>
            <Box
                backgroundImage={ImageBackground}
                backgroundPosition={{ base: "top", md: "center" }}
                backgroundRepeat="no-repeat"
                backgroundSize={"contain"}
            >
                <Center>
                    <Image
                        src={ImageHero}
                        width={{
                            base: "100%",
                            sm: "100vw",
                            md: "55vw",
                            lg: "45vw",
                        }}
                        draggable={false}
                    />
                </Center>
            </Box>
        </Flex>
    );
}
