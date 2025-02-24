"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/Logo';

export default function Home() {
  const router = useRouter();

  const handleNavigation = (section: string) => {
    switch (section) {
      case 'home':
        router.push('/');
        break;
      case 'assessment':
        router.push('/assessment');
        break;
      default:
        router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
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
                onClick={() => handleNavigation('assessment')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Rest of your existing content remains the same */}
    </div>
  );
}