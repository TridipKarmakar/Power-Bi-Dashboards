import {
  HiOutlineOfficeBuilding,
  HiOutlineExclamation,
  HiOutlineClock,
  HiOutlineCheckCircle,
} from "react-icons/hi";

export default function DashboardViewer({
  dashboard,
}) {
  return (
    <div className="space-y-8">

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10">

        <h1 className="text-4xl font-bold mb-3">
          {dashboard.name}
        </h1>

        <p className="text-slate-400 text-lg">
          {dashboard.description}
        </p>

      </section>

      <section className="grid grid-cols-4 gap-6">

        <StatCard
          icon={<HiOutlineOfficeBuilding />}
          title="Projects"
          value="14"
        />

        <StatCard
          icon={<HiOutlineCheckCircle />}
          title="On Track"
          value="8"
        />

        <StatCard
          icon={<HiOutlineExclamation />}
          title="Risks"
          value="4"
        />

        <StatCard
          icon={<HiOutlineClock />}
          title="Delayed"
          value="2"
        />

      </section>

      <section className="bg-slate-900 rounded-3xl p-3 border border-slate-800">

        <iframe
          title={dashboard.name}
          src={dashboard.embedUrl}
          className="w-full h-[900px] rounded-2xl"
          frameBorder="0"
          allowFullScreen
        />

      </section>

    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">

      <div className="text-indigo-400 text-3xl mb-5">
        {icon}
      </div>

      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}