import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded  bg-gradient-to-r to-[#E9E9E5] from-[#E4E4E4] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
       Chat with RIPLEY, your AI assistant for verifying carbon offsets.
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            RIPLEY is your personal AI assistant designed to help verify carbon offsets and manage carbon offset projects. Use this chat to ask RIPLEY questions about carbon offsets and how to verify them.
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
            To learn more about RIPLEY, check out PaidPlanet's Website <a href="https://www.paidplanet.com/"></a>.
                       </span>
        </li>     

        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking <code>What all can I do with RIPLEY?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji=""
      titleText="RIPLEY"
      placeholder="I'm Ripley, your AI Assistant for verifying carbon offsets. Try asking me what all can you do?'"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
