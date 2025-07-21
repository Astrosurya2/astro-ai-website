import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
  });

  const [aiOutput, setAiOutput] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAiOutput('🔮 Generating your AI-powered Vedic horoscope...');
    setTimeout(() => {
      setAiOutput(`🪐 Hello ${formData.name}, your birth details have been received. AI-generated Vedic chart preview coming soon.`);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>AstroSurya AI</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-yellow-50 to-pink-100 p-6 text-gray-800">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
            AstroSurya AI 🔭<br />
            <span className="text-xl text-gray-600">AI-Powered Vedic Astrology</span>
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Your Name" className="w-full p-2 border rounded" onChange={handleChange} required />
            <input name="date" type="date" className="w-full p-2 border rounded" onChange={handleChange} required />
            <input name="time" type="time" className="w-full p-2 border rounded" onChange={handleChange} required />
            <input name="place" placeholder="Place of Birth" className="w-full p-2 border rounded" onChange={handleChange} required />
            <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
              Get AI Horoscope
            </button>
          </form>
          {aiOutput && (
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400 rounded">
              {aiOutput}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
