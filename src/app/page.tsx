'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Logo } from '@/components/ui/Logo';
import { 
  Sparkles, 
  Brain,
  Code,
  Palette,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const renderAssessment = () => {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">AI Readiness Assessment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-black bg-opacity-50 backdrop-blur">
              <h3 className="text-xl font-bold mb-4">Evaluate Your AI Potential</h3>
              <p className="text-gray-300 mb-6">
                Our comprehensive assessment helps determine your organization's readiness 
                for AI implementation and identifies key opportunities for optimization.
              </p>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500">
                Start Assessment
              </Button>
            </Card>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background remains the same */}

      {/* Updated Navigation with Logo */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex space-x-8">
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => setActiveSection('home')}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => setActiveSection('assessment')}
              >
                Assessment
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => setActiveSection('services')}
              >
                Services
              </Button>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Conditional rendering based on active section */}
      {activeSection === 'home' && (
        <section className="flex justify-center items-center h-screen">
          <h1 className="text-5xl font-bold">Welcome to Our AI Solutions</h1>
        </section>
      )}

      {activeSection === 'assessment' && renderAssessment()}
      {/* Services section and other components remain the same */}
    </div>
  );
}