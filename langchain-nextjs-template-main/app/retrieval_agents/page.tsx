import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded  bg-gradient-to-r to-[#E9E9E5] from-[#E4E4E4] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Methodologies Overview
      </h1>
      <ul>
     <li className="hidden text-l md:block">
          💻
          <span className="ml-2">
            Use this chat to ask RIPLEY about methodologies and spceific projects regarding their verification.
           </span>
        </li>       

       <li className="hidden text-l md:block">
          📖
          <span className="ml-2">
            
            To learn about what you can do with Ripley, check out the <a href="/">Chat with RIPLEY</a> window.
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
            Try asking <code>Does this project meet the requirements of VM-0045?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'I am Ripley, your assistant to help you verify carbon offsets.FIX THIS LATER!'
      }
      emoji="🤖"
      titleText="Ripley"
    ></ChatWindow>
  );
}
