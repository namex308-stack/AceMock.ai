import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg mb-4">
        Welcome to your AceMock.ai dashboard. Track your progress and start new interviews.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Mock Interviews</h3>
          <p>Start a new AI-powered mock interview session.</p>
          <Link href="/interview" className="btn btn-primary mt-4">
            Start Interview
          </Link>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
          <p>View your interview performance and improvement over time.</p>
          <button className="btn btn-secondary mt-4">View Progress</button>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Settings</h3>
          <p>Manage your account preferences and settings.</p>
          <button className="btn btn-secondary mt-4">Account Settings</button>
        </div>
      </div>
    </div>
  );
}