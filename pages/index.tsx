import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AstroSurya AI</title>
        <meta name="description" content="AI-powered Vedic Astrology" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to AstroSurya AI</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate your Vedic chart powered by AI insights.
        </p>
        <p className="text-sm text-gray-500">(Preview only – Beta version)</p>
      </main>
    </>
  )
}
