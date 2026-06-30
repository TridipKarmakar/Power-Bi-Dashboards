import { useState } from "react";
import Sidebar from "./component/Sidebar";
import { dashboards } from "./data/dashboards";

function App() {
  const [selectedDashboard, setSelectedDashboard] =
    useState(dashboards[0]);

  return (
    <div className="h-screen flex bg-[#F8FAFC]">

      <Sidebar
        dashboards={dashboards}
        selectedDashboard={selectedDashboard}
        setSelectedDashboard={setSelectedDashboard}
      />

      {/* Dashboard Area */}

      <main className="flex-1 overflow-hidden">
        <div className="h-full p-4">

          <div className="bg-white h-full rounded-3xl shadow-xl overflow-hidden border border-slate-200">

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