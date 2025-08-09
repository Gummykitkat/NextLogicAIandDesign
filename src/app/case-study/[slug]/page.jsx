import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projects from "@/data/projects";
import Image from "next/image";

export default function CaseStudyPage({ params }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="rounded-xl mb-8 object-cover"
        />
        <p className="text-gray-300 mb-6">{project.description}</p>

        {project.stats && (
          <ul className="mb-6 space-y-2 text-gray-300 list-disc list-inside">
            {project.stats.map((stat, idx) => (
              <li key={idx}>{stat}</li>
            ))}
          </ul>
        )}

        {/* Optional Chart for featured project */}
        {project.chart && (
          <div className="bg-black p-4 rounded-xl mb-8">
            {project.chart}
          </div>
        )}

        <a
          href="/portfolio"
          className="inline-block mt-8 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded text-white"
        >
          ← Back to Portfolio
        </a>
      </main>

      <Footer />
    </div>
  );
}
