'use client'
import { Link } from '@chakra-ui/next-js'
import { Flex, Text } from '@chakra-ui/react';

import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <>
      <Flex
        width={"100%"}
        p={8}
        maxHeight={"85vh"}
        overflow={'hidden'}
        flexDir={'column'}
        background={'#FEF6F0'}
      >
        <Text fontSize='4xl'>
          Chat with Wallace, your AI assistant for verifying carbon offsets.
        </Text>
        <Text>
          💻 Wallace is your personal AI assistant designed to help verify carbon offsets and manage carbon offset projects. Use this chat to ask Wallace questions about carbon offsets and how to verify them.
        </Text>
        <Text>📖 To verifying methologies and learn more about them, check out the <a href="/retrieval_agents" style={{ fontWeight: "bold" }}>Methodologies Overview</a>.</Text>
        <Text>🌐 To learn more about Wallace, check out <a href="https://www.paidplanet.com/" style={{ fontWeight: "bold" }}>PaidPlanet&apos;s Website.</a></Text>
        <Text>👇 Try asking <code>How can I use Wallace to help with carbon offsets?</code> below!</Text>
      </Flex>
    </>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji=""
      titleText="Wallace"
      placeholder="I'm Wallace, your AI Assistant for verifying carbon offsets. Try asking me 'What all can you do?'"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
