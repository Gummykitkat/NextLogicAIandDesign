"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Code, Palette, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function HomeContent() {
  // Navigate function using window.location
  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  const services = [
    {
      icon: Brain,
      title: "AI Implementation",
      description: "Strategic AI solutions to improve your business operations with measurable ROI",
      price: "$597",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Create stunning, high-performance digital experiences that transform your online presence",
      price: "$997",
    },
    {
      icon: Palette,
      title: "Enterprise Solutions",
      description: "Comprehensive AI strategy with multi-department implementation",
      price: "$2,497",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div onClick={() => navigateTo('/')} className="cursor-pointer">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            </div>
            <div className="flex space-x-4">
              <button onClick={() => navigateTo('/services')} className="text-white px-4 py-2 hover:text-pink-500">
                Services
              </button>
              <button onClick={() => navigateTo('/assessment')} className="text-white px-4 py-2 hover:text-pink-500">
                Assessment
              </button>
              <button onClick={() => navigateTo('/about')} className="text-white px-4 py-2 hover:text-pink-500">
                About
              </button>
              <button onClick={() => navigateTo('/contact')} className="bg-pink-500 text-white px-4 py-2 rounded">
                Begin Assessment
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Rest of your content */}
    </div>
  );
}