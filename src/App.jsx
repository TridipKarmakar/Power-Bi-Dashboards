import { useState } from "react";
import Sidebar from "./component/Sidebar";
import { dashboards } from "./data/dashboards";

function App() {
  const [selectedDashboard, setSelectedDashboard] =
    useState(dashboards[0]);

  return (
    <div className="h-screen flex bg-[#F8FAFC]">
      {/* Sidebar */}
      <Sidebar
        dashboards={dashboards}
        selectedDashboard={selectedDashboard}
        setSelectedDashboard={setSelectedDashboard}
      />

      {/* Dashboard Area */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full p-4 flex flex-col gap-4">
          
          {/* Disclaimer */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">
              Dashboard Showcase Disclaimer
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              The dashboards displayed below use demo data and sample visuals
              to maintain organizational confidentiality. These examples
              demonstrate my capabilities in designing interactive reporting
              solutions, data modeling, and analytics dashboards.
            </p>

            <p className="text-sm text-slate-700 mt-2 leading-relaxed">
              During my tenure at PS Group, I have also developed and managed
              several business-critical solutions, including HR dashboards,
              issue tracking and escalation dashboards, project monitoring
              dashboards, management reporting systems, and real-time analytics
              solutions.
            </p>
          </div>

          {/* Dashboard Container */}
          <div className="bg-white flex-1 rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <iframe
              title={selectedDashboard.name}
              src={selectedDashboard.embedUrl}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;