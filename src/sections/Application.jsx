import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import CardApplication from "../components/card application/CardApplication";
import ImageApplication1 from "../assets/images/image-feature1.svg";
import ImageApplication2 from "../assets/images/image-feature2.svg";
import ImageApplication3 from "../assets/images/image-feature3.svg";
import ImageApplication4 from "../assets/images/image-feature4.svg";
import ImageApplication5 from "../assets/images/image-feature5.svg";
import ImageApplication6 from "../assets/images/image-feature6.svg";

export default function Application() {
    return (
        <Box
            mx={{ base: 10, md: 20, lg: 32 }}
            py={{ base: 5, md: 10 }}
            h="full"
            id="about"
        >
            <Heading fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }}>
                Applications
            </Heading>
            <Flex
                justifyContent={"space-between"}
                gap={4}
                mt={{ base: 5, md: 10 }}
                direction={{ base: "column", md: "row" }}
            >
                <CardApplication
                    title={"Automation and optimization "}
                    description={"Working staff, HR, Senior management"}
                    image={ImageApplication1}
                />
                <CardApplication
                    title={"Marketing tool"}
                    description={
                        "Point of contact. Brand extension. Increasing customer loyalty"
                    }
                    image={ImageApplication2}
                />
                <CardApplication
                    title={"Professional tool"}
                    description={"Customer loyalty A tool for professional use"}
                    image={ImageApplication3}
                />
            </Flex>
            <Flex
                justifyContent={"space-between"}
                gap={4}
                mt={{ base: 5, md: 10 }}
                direction={{ base: "column", md: "row" }}
            >
                <CardApplication
                    title={"Sales"}
                    description={
                        "Sale in 1 click. Expanding the sales funnel. Loyalty program. NFC. QR"
                    }
                    image={ImageApplication4}
                />
                <CardApplication
                    title={"Social networks. Games"}
                    description={
                        "Formation of a client base, communities, fans, bases, etc."
                    }
                    image={ImageApplication5}
                />
                <CardApplication
                    title={"IoT"}
                    description={
                        "Remote control of devices and complex systems. WiFi, Bluetooth"
                    }
                    image={ImageApplication6}
                />
            </Flex>
        </Box>
    );
}
