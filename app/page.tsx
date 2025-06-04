import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">AI Chat OpenRouter</h1>
      <div className="flex justify-center">
        <Link
          href="/new"
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          + Obrolan Baru
        </Link>
      </div>
    </main>
  );
}
