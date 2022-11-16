import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import ImageBackground from "../assets/images/lebihKicik.png";
import CardWork from "../components/card work/CardWork";

export default function HowWeWorking() {
    return (
        <Box
            mx={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            minH="100vh"
            backgroundImage={ImageBackground}
            backgroundPosition={"center"}
            backgroundRepeat="no-repeat"
            backgroundSize={"contain"}
            id="workflow"
        >
            <Heading fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }}>
                How We Are Working
            </Heading>
            <Flex
                justifyContent={"space-between"}
                gap={4}
                mt={{ base: 5, md: 10 }}
                direction={{ base: "column", md: "row" }}
            >
                <CardWork
                    title={"1. Data collection"}
                    description={
                        "Gathering requirements for the project. We set goals and objectives"
                    }
                />
                <CardWork
                    title={"2. Proposals"}
                    description={
                        "We optimize and structure information. We offer solutions"
                    }
                />
                <CardWork
                    title={"3. Analytics"}
                    description={
                        "We analyze existing markets and areas of application of the product"
                    }
                />
            </Flex>
            <Flex
                justifyContent={"space-evenly"}
                gap={4}
                mt={{ base: 5, md: 10 }}
                direction={{ base: "column", md: "row" }}
            >
                <CardWork
                    title={"4. Prototyping We are"}
                    description={
                        "Working on User Experience, creating a map of screens 5."
                    }
                />
                <CardWork
                    title={"5. Terms of Reference We"}
                    description={"Describe User Cases and product architecture"}
                />
            </Flex>
            <Flex
                justifyContent={"space-between"}
                gap={4}
                mt={{ base: 5, md: 10 }}
                direction={{ base: "column", md: "row" }}
            >
                <CardWork
                    title={"6. Concept design"}
                    description={
                        "We offer 3 options for concept design. Test and render with simplicity and product functionality"
                    }
                />
                <CardWork
                    title={"7. MVP"}
                    description={
                        "Optimum costs and determine minimal, but sufficient functionality to start a project"
                    }
                />
                <CardWork
                    title={"8. Layout and Programming"}
                    description={
                        "We form a team and program with using advanced technologies native development"
                    }
                />
            </Flex>
            <Flex
                justifyContent={"space-evenly"}
                gap={4}
                mt={{ base: 5, md: 10 }}
                direction={{ base: "column", md: "row" }}
            >
                <CardWork
                    title={"9. Testing Fixing"}
                    description={"Bugs. We control quality 10. Launch"}
                />
                <CardWork
                    title={"10. We place"}
                    description={"the product on the web and in the App Store"}
                />
            </Flex>
        </Box>
    );
}
