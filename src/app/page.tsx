import Link from "next/link";

export default function Home() {

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">
      Dashboard
      </h1>
      <p className="mt-4 text-gray-600">
        Learning next.js step by step
      </p>
      <Link href="/projects">
      <button className="">View Projects</button>
      </Link>
    </main>
  )
}