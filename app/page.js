import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-3xl mb-4">Home</h1>
      <Link href="/dashboard/home/dashboard/">View Dashboard</Link>
    </div>
  );
}
