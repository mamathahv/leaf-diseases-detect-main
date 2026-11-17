import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Train, Users, Wrench, CreditCard } from "lucide-react";

export default function MetroAIDashboard() {
  const [chatInput, setChatInput] = useState("");
  const [chatLog, setChatLog] = useState([
    { role: "ai", text: "Hello! I am your Metro AI assistant. Ask me anything." }
  ]);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    setChatLog([...chatLog, { role: "user", text: chatInput }]);

    // Mock AI reply
    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          role: "ai",
          text: `Forecast: 120 trains required tomorrow for Onam Festival. Suggested induction starts at 6 AM aligned with solar peak hours.`
        }
      ]);
    }, 1000);

    setChatInput("");
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-100 min-h-screen">
      {/* Feature Cards */}
      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-4">
          <h2 className="flex items-center text-xl font-bold mb-2"><Train className="mr-2"/> Energy-Optimized Scheduling</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Kochi: India’s first solar-powered metro.</li>
            <li>AI aligns train induction with solar peak hours.</li>
            <li>Idle trains minimized when solar is low.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-4">
          <h2 className="flex items-center text-xl font-bold mb-2"><Users className="mr-2"/> Passenger Flow & Crowd Management</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Heatmaps of crowd density per station/hour.</li>
            <li>Redirect passengers to less crowded trains.</li>
            <li>Real-time display boards & mobile updates.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-4">
          <h2 className="flex items-center text-xl font-bold mb-2"><Wrench className="mr-2"/> Predictive Maintenance</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>AI predicts breakdowns before they happen.</li>
            <li>Analyzes brake usage, door cycles, energy consumption.</li>
            <li>Maintenance scheduled outside rush hours.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-xl rounded-2xl">
        <CardContent className="p-4">
          <h2 className="flex items-center text-xl font-bold mb-2"><CreditCard className="mr-2"/> Payment & Ticketing Integration</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>AI tracks entry/exit tap data.</li>
            <li>Understands origin-destination demand.</li>
            <li>Adjusts frequency based on passenger flow.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Chatbot */}
      <Card className="col-span-1 lg:col-span-2 shadow-xl rounded-2xl">
        <CardContent className="p-4">
          <h2 className="flex items-center text-xl font-bold mb-4"><MessageSquare className="mr-2"/> AI Chatbot for Metro Planners</h2>

          <div className="bg-gray-50 p-3 rounded-xl h-64 overflow-y-auto mb-4">
            {chatLog.map((msg, i) => (
              <div key={i} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-3 py-2 rounded-xl ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Ask about trains, schedules, etc."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
