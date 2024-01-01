import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded  bg-[#FEF6F0] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Methodologies Overview
      </h1>
      <ul>
     <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            Use this chat to ask Wallace about methodologies and spceific projects regarding their verification.
           </span>
        </li>       

       <li className="hidden text-l md:block">
          📖
          <span className="ml-2">
            
            To learn about how to best use Wallace or ask general questions, check out the <a href="/">Chat with Wallace</a> window.
           </span>
        </li>       

       <li className="hidden text-l md:block">
          🌐
          <span className="ml-2">
            To learn more about Wallace, check out PaidPlanet's Website <a href="https://www.paidplanet.com/"></a>.
           </span>
        </li>     
      
      <li className="text-l">
          👇
          <span className="ml-2">
            Try asking "<code>I've pasted some info about a offset project [here]. Does it meet the requirements of VM0003 v1.3?</code> " below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      showIntermediateStepsToggle={false}
      placeholder={
        'I am Wallace and this is the tool to ask me questions about methodologies and specific projects regarding their verification. Ask away!'
      }
      emoji=""
      titleText="Wallace"
    ></ChatWindow>
  );
}
