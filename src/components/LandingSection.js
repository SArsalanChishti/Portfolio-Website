import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import source from "./cv photo.jfif";

const greeting = "Hi, Arsalan here!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* The UI for the landing section */}
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar src= {source} size="2xl" name="Arsalan" />
        <Heading as="h4" size="md" noOfLines={1}>{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="4xl" noOfLines={1}>{bio1}</Heading>
        <Heading as="h1" size="4xl" noOfLines={1}>{bio2}</Heading>
      </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;