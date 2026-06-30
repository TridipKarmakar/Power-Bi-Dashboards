import {
  HiOutlineChartBar,
  HiOutlineBriefcase,
  HiOutlineUser,
} from "react-icons/hi";

export default function Sidebar({
  dashboards,
  selectedDashboard,
  setSelectedDashboard,
}) {
  return (
    <aside className="w-80 bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}

      <div className="px-8 py-10">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            T
          </div>

          <div>
            <h1 className="font-bold text-2xl text-slate-900">
              Tridip
            </h1>

            <p className="text-slate-500">
              Analytics Portfolio
            </p>
          </div>

        </div>

      </div>

      {/* Recruiter Section */}

      <div className="px-8 mb-8">

        <div className="rounded-3xl p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">

          <h3 className="font-semibold text-lg">
            Construction Analytics
          </h3>

          <p className="text-slate-300 text-sm mt-2">
            Power BI • SQL • Python • Autosesk Construction Cloud
          </p>

        </div>

      </div>

      {/* Dashboard List */}

      <div className="flex-1 overflow-y-auto px-5">

        <h4 className="uppercase text-xs text-slate-400 mb-4 px-3">
          Dashboards
        </h4>

        <div className="space-y-3">

          {dashboards.map((dashboard) => (
            <button
              key={dashboard.id}
              onClick={() =>
                setSelectedDashboard(dashboard)
              }
              className={`w-full rounded-2xl p-5 transition-all duration-300 text-left group
              
              ${
                selectedDashboard.id === dashboard.id
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg"
                  : "hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-4">

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center
                  
                  ${
                    selectedDashboard.id === dashboard.id
                      ? "bg-white/20"
                      : "bg-slate-100"
                  }`}
                >
                  <HiOutlineChartBar size={24} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {dashboard.name}
                  </h3>

                  <p
                    className={`text-sm
                    ${
                      selectedDashboard.id === dashboard.id
                        ? "text-white/70"
                        : "text-slate-500"
                    }`}
                  >
                    {dashboard.category}
                  </p>
                </div>

              </div>
            </button>
          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="p-6 border-t">

        <div className="flex items-center gap-3 text-slate-500">

          <HiOutlineBriefcase />

          <span className="text-sm">
            Assistant Manager | PS Group
          </span>

        </div>

      </div>

    </aside>
  );
}