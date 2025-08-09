import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const healthcareChart = (
  <Line
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Patient Engagement Rate (%)",
          data: [62, 68, 74, 80, 85, 90],
          borderColor: "#ec4899",
          backgroundColor: "rgba(236, 72, 153, 0.3)",
          tension: 0.3,
          fill: true
        }
      ]
    }}
    options={{
      responsive: true,
      plugins: { legend: { labels: { color: "#fff" } }, title: { display: false } },
      scales: {
        x: { ticks: { color: "#ccc" }, grid: { color: "#333" } },
        y: { ticks: { color: "#ccc" }, grid: { color: "#333" } }
      }
    }}
  />
);

const projects = [
  {
    slug: "healthcare-ai-platform",
    title: "Healthcare AI Platform",
    description:
      "Enterprise-grade AI system for patient care optimization across a multi-hospital network.",
    image: "/projects/healthcare.jpg",
    featured: true,
    stats: [
      "90% patient engagement rate",
      "28% reduction in average wait time",
      "Integrated across 5 hospitals"
    ],
    chart: healthcareChart
  },
  {
    slug: "ai-powered-e-commerce-optimization",
    title: "AI-Powered E-Commerce Optimization",
    description:
      "Increased conversion rates by 37% through personalized AI-driven product recommendations.",
    image: "/projects/ecommerce.jpg"
  },
  {
    slug: "predictive-finance-risk-platform",
    title: "Predictive Finance Risk Platform",
    description:
      "AI model predicting loan defaults with 92% accuracy for a major bank.",
    image: "/projects/finance.jpg"
  },
  {
    slug: "real-estate-virtual-tour-system",
    title: "Real Estate Virtual Tour System",
    description:
      "Interactive 3D property viewing platform with live chat integration.",
    image: "/projects/realestate.jpg"
  }
];

export default projects;
