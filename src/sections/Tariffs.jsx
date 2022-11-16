import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import CardTariffs from "../components/card tariffs/CardTariffs";

export default function Tariffs() {
    return (
        <Box mx={{ base: 10, md: 20, lg: 32 }} py={{ base: 5, md: 10 }}>
            <Heading fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }}>
                Tariffs
            </Heading>
            <Flex
                justifyContent={"space-between"}
                gap={{ base: 10, md: 4 }}
                mt={{ base: 5, md: 10 }}
                direction={{ base: "column", md: "row" }}
            >
                <CardTariffs
                    title={"Signature"}
                    description={
                        "Fixed payments per month. The duration of the subscription is determined based on the total"
                    }
                    color1={"red.300"}
                    color2={"red.500"}
                />
                <CardTariffs
                    title={"Phased"}
                    description={
                        "The amount of payments is determined by the stage of product development and is divided"
                    }
                    color1={"blue.400"}
                    color2={"blue.200"}
                />
                <CardTariffs
                    title={"Hourly"}
                    description={
                        "Hourly evaluation of improvements in small volumes"
                    }
                    color1={"purple.400"}
                    color2={"purple.300"}
                />
                <CardTariffs
                    title={"Component Library"}
                    description={
                        "Formation of a product from prepared code blocks"
                    }
                    color1={"yellow.500"}
                    color2={"yellow.400"}
                />
            </Flex>
        </Box>
    );
}
