import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Hero from "./sections/Hero";
import Application from "./sections/Application";
import HowWeWorking from "./sections/HowWeWorking";
import Portfolio from "./sections/Portfolio";
import Tariffs from "./sections/Tariffs";
import Contacts from "./sections/Contacts";
import Footer from "./components/footer";

export default function App() {
    return (
        <Box w={"full"} bgColor={"#F5F4F4"} minH={"100vh"}>
            <Box>
                <Navbar />
                <Hero />
                <Application />
                <HowWeWorking />
                <Portfolio />
                <Tariffs />
                <Contacts />
                <Footer />
            </Box>
        </Box>
    );
}
