"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { Brain, Code, Sparkles, ArrowRight } from '@lucide/react';

export default function HomeContent() {
  const router = useRouter();

  type Section = 'home' | 'assessment' | 'contact';
  const handleNavigation = (section: Section) => {
    switch (section) {
      case 'home':
        router.push('/');
        break;
      case 'assessment':
        router.push('/assessment');
        break;
      case 'contact':
        router.push('/contact');
        break;
      default:
        router.push('/');
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Logo />
            <div className="flex space-x-8">
              <Button
                variant="ghost"
                className="text-white hover:text-blue-400"
                onClick={() => handleNavigation('home')}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-blue-400"
                onClick={() => handleNavigation('assessment')}
              >
                Assessment
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => handleNavigation('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold leading-tight mb-6">
              <span className="block">Transform Your Business</span>
              <span className="block text-blue-500">With Next-Gen AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Next Logic Design and AI delivers cutting-edge artificial intelligence solutions 
              that enhance your business operations and digital presence.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              onClick={() => handleNavigation('assessment')}
            >
              <span className="flex items-center">
                Start Your Assessment
                <ArrowRight className="ml-2" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-black rounded-xl p-8 border border-gray-800">
              <Brain className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">AI Implementation</h3>
              <p className="text-gray-400">
                Strategic AI solutions tailored to improve your business operations with measurable ROI.
              </p>
            </div>
            <div className="bg-black rounded-xl p-8 border border-gray-800">
              <Code className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-400">
                Create powerful digital experiences that elevate your online presence.
              </p>
            </div>
            <div className="bg-black rounded-xl p-8 border border-gray-800">
              <Sparkles className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Design Services</h3>
              <p className="text-gray-400">
                Innovative design solutions that enhance user experience and brand identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>© 2025 Next Logic Design and AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}