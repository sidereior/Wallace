import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#BACC81] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
       Chat with RIPLEY, your AI assistant for verifying carbon offsets.
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            RIPLEY is an AI assistant designed to help you verify carbon offsets. Use this chat to ask RIPLEY questions about carbon offsets and how to verify them.
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
      emoji="🏴‍☠️"
      titleText="RIPLEY"
      placeholder="I'm Ripley, an AI Assistant for verifying carbon offsets. Try asking me a question!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
