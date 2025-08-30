import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        Hi, I’m Dr. Akanksha Vishwakarma
      </h1>
      <p className="text-lg text-gray-700">
        Data Scientist | Researcher | Writer
      </p>
      <p className="mt-4 text-center max-w-xl">
        Welcome to my portfolio — here you’ll find my work in Data Science, my 
        writing, and my travel stories.
      </p>
    </main>
  )
}