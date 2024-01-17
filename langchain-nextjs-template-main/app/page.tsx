'use client'
import { Link } from '@chakra-ui/next-js'
import { Text } from '@chakra-ui/react';

import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded  bg-[#FEF6F0] w-full max-h-[85%] overflow-hidden">
      <Text fontSize='4xl'>
      Chat with Wallace, your AI assistant for verifying carbon offsets.
      </Text>
      <ul>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            Wallace is your personal AI assistant designed to help verify carbon offsets and manage carbon offset projects. Use this chat to ask Wallace questions about carbon offsets and how to verify them.
           </span>
        </li>       

       <li className="hidden text-l md:block">
          📖
          <span className="ml-2">
            To verifying methologies and learn more about them, check out the <a href="/retrieval_agents">Methodologies Overview</a>.
           </span>
        </li>       

       <li className="hidden text-l md:block">
          🌐
          <span className="ml-2">
            To learn more about Wallace, check out PaidPlanet&apos;s Website <a href="https://www.paidplanet.com/"></a>.
                       </span>
        </li>     

        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking <code>How can I use Wallace to help with Carbon Offsets?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji=""
      titleText="Wallace"
      placeholder="I'm Wallace, your AI Assistant for verifying carbon offsets. Try asking me what all can you do?'"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
