'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Brain,
  Code,
  ShoppingBag,
  Activity,
  CreditCard,
  Briefcase,
  Layers,
  Monitor,
  Users,
  ArrowRight,
  Shield
} from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'web' | 'combined'>('all');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  // Background gradient colors for each case study
  const gradients = {
    retail: "from-purple-900 to-pink-900",
    healthcare: "from-blue-900 to-cyan-900",
    finance: "from-green-900 to-emerald-900",
    ecommerce: "from-orange-900 to-amber-900",
    law: "from-indigo-900 to-blue-900",
    saas: "from-cyan-900 to-blue-900",
    combined: "from-purple-900 to-pink-900"
  };

  const caseStudies = [
    {
      title: "Retail Demand Forecasting Transformation",
      client: "Canadian Fashion Retailer (100+ locations)",
      challenge: "Seasonal inventory management leading to 15% overstock and frequent stockouts",
      solution: [
        "Advanced time series forecasting models with 90% confidence intervals",
        "ML-powered demand prediction dashboard for buyers",
        "Automated restock alerts with 30-minute granularity"
      ],
      results: [
        "40% reduction in stockouts",
        "30% decrease in seasonal overstock",
        "$1.2M annual savings in inventory costs",
        "15% increase in buyer efficiency"
      ],
      ethical: "Models were audited for geographic bias to ensure fair inventory distribution across urban and rural locations.",
      gradient: gradients.retail,
      icon: ShoppingBag,
      category: "ai",
      badge: "AI CONSULTANCY"
    },
    {
      title: "Healthcare Patient Flow Optimization",
      client: "Regional Medical Center",
      challenge: "Inefficient resource allocation creating long wait times and staff burnout",
      solution: [
        "Patient volume prediction model with 87% accuracy",
        "Staff scheduling optimizer using reinforcement learning",
        "Real-time department load visualization"
      ],
      results: [
        "45% reduction in average wait times",
        "35% improvement in resource utilization",
        "25% decrease in overtime costs",
        "90% staff satisfaction with new system"
      ],
      ethical: "Model designed with fairness constraints to prevent any patient demographic from experiencing systematically longer wait times.",
      gradient: gradients.healthcare,
      icon: Activity,
      category: "ai",
      badge: "AI CONSULTANCY"
    },
    {
      title: "Financial Fraud Detection System",
      client: "Credit Union",
      challenge: "Rising fraud cases with high false positive rate in existing system",
      solution: [
        "XGBoost fraud detection model with continuous learning",
        "Explainable AI layer to justify flagged transactions",
        "Integration with existing banking systems"
      ],
      results: [
        "25% reduction in false positives",
        "35% increase in fraud detection",
        "$800K prevented fraud in first quarter",
        "90% faster investigation time"
      ],
      ethical: "Transparent decision explanations for both staff and customers, with human review for all denials.",
      gradient: gradients.finance,
      icon: CreditCard,
      category: "ai",
      badge: "AI CONSULTANCY"
    },
    {
      title: "E-Commerce Conversion Optimization",
      client: "Specialty Food Retailer",
      challenge: "High cart abandonment rate (78%) and poor mobile experience",
      solution: [
        "Complete UX redesign with user testing",
        "Streamlined checkout process (5 steps to 2)",
        "Mobile-first responsive implementation",
        "Performance optimization (<2s load time)"
      ],
      results: [
        "45% reduction in cart abandonment",
        "55% increase in mobile conversions",
        "22% higher average order value",
        "95+ Google Lighthouse score"
      ],
      ethical: "Design incorporated honest pricing with no hidden fees and clear opt-in choices for marketing.",
      gradient: gradients.ecommerce,
      icon: ShoppingBag,
      category: "web",
      badge: "WEB DEVELOPMENT"
    },
    {
      title: "Professional Services Website Transformation",
      client: "Law Firm",
      challenge: "Outdated website with poor conversion and accessibility issues",
      solution: [
        "WCAG 2.1 AA compliant design system",
        "Practice area-specific conversion funnels",
        "Client testimonial integration",
        "Knowledge base with semantic search"
      ],
      results: [
        "62% increase in qualified leads",
        "40% improvement in time-on-site",
        "100% WCAG compliance score",
        "28% better search engine rankings"
      ],
      ethical: "Dark patterns eliminated in favor of clear value propositions and straightforward calls-to-action.",
      gradient: gradients.law,
      icon: Briefcase,
      category: "web",
      badge: "WEB DEVELOPMENT"
    },
    {
      title: "SaaS Dashboard UX Enhancement",
      client: "HR Software Provider",
      challenge: "Complex user interface causing training issues and low feature adoption",
      solution: [
        "Comprehensive UX audit and user journey mapping",
        "Redesigned information architecture",
        "Role-based dashboard views",
        "Progressive disclosure of advanced features"
      ],
      results: [
        "65% reduction in support tickets",
        "45% increase in feature adoption",
        "30% faster task completion",
        "35% improvement in user satisfaction scores"
      ],
      ethical: "Design prioritized data minimization and clear purpose specification for all collected information.",
      gradient: gradients.saas,
      icon: Layers,
      category: "web",
      badge: "WEB DEVELOPMENT"
    },
    {
      title: "Retail Personalization Engine & Website",
      client: "Home Décor Retailer",
      challenge: "Generic website experience with low conversion and repeat purchase rates",
      solution: [
        "AI-powered product recommendation engine",
        "Personalized homepage based on browsing behavior",
        "Dynamic content delivery system",
        "Fully redesigned e-commerce experience"
      ],
      results: [
        "35% improvement in conversion rate",
        "45% increase in average order value",
        "65% higher repeat purchase rate",
        "25% reduction in bounce rate"
      ],
      ethical: "Transparent explanation of personalization with easy opt-out options and clear privacy controls.",
      gradient: gradients.combined,
      icon: Monitor,
      category: "combined",
      badge: "COMBINED PROJECT"
    }
  ];

  const filteredCaseStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(255, 0, 128) 0%, transparent 40%),
            radial-gradient(circle at ${mousePosition.x - 400}px ${mousePosition.y + 100}px, rgb(0, 255, 128) 0%, transparent 40%),
            radial-gradient(circle at ${mousePosition.x + 200}px ${mousePosition.y - 300}px, rgb(112, 0, 255) 0%, transparent 40%)
          `
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo('/')}>
              <img 
                src="/logo.png" 
                alt="Next Logic AI" 
                className="h-40 w-auto drop-shadow-[0_0_15px_rgba(255,0,128,0.7)]"
                style={{ filter: 'drop-shadow(0 0 12px rgba(0, 255, 255, 0.6))' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="flex space-x-8">
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/services')}
              >
                Services
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500 bg-pink-500/10"
                onClick={() => navigateTo('/portfolio')}
              >
                Portfolio
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/team')}
              >
                Team
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/about')}
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/contact')}
              >
                Contact
              </Button>
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                onClick={() => navigateTo('/assessment')}
              >
                Begin Assessment
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Portfolio Intro */}
          <section className="mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Portfolio & Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              At Next Logic Design and AI, we measure our success by the tangible business outcomes we 
              deliver for our clients. Explore our selected case studies that demonstrate our ability to 
              transform organizations through ethical AI and compelling web design.
            </p>
          </section>

          {/* Filter Tabs */}
          <section className="mb-12">
            <div className="flex flex-wrap space-x-2">
              <Button 
                variant={activeTab === 'all' ? 'default' : 'outline'} 
                className={activeTab === 'all' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                  : 'border-gray-700 text-gray-300 hover:border-pink-500 hover:text-pink-500'}
                onClick={() => setActiveTab('all')}
              >
                All Projects
              </Button>
              <Button 
                variant={activeTab === 'ai' ? 'default' : 'outline'} 
                className={activeTab === 'ai' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                  : 'border-gray-700 text-gray-300 hover:border-pink-500 hover:text-pink-500'}
                onClick={() => setActiveTab('ai')}
              >
                <Brain className="h-4 w-4 mr-2" />
                AI Solutions
              </Button>
              <Button 
                variant={activeTab === 'web' ? 'default' : 'outline'} 
                className={activeTab === 'web' 
                  ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-white' 
                  : 'border-gray-700 text-gray-300 hover:border-green-400 hover:text-green-400'}
                onClick={() => setActiveTab('web')}
              >
                <Code className="h-4 w-4 mr-2" />
                Web Development
              </Button>
              <Button 
                variant={activeTab === 'combined' ? 'default' : 'outline'} 
                className={activeTab === 'combined' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-500'}
                onClick={() => setActiveTab('combined')}
              >
                <Layers className="h-4 w-4 mr-2" />
                Combined Projects
              </Button>
            </div>
          </section>

          {/* Case Studies */}
          <section>
            <div className="space-y-6">
              {filteredCaseStudies.map((study, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden border border-pink-500/50 rounded-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left Section - Icon/Background */}
                    <div className="lg:col-span-4 relative bg-gradient-to-br p-6 flex items-center justify-center min-h-[200px] lg:min-h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-80`}></div>
                      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
                        <div className="w-16 h-16 bg-pink-500/30 rounded-full flex items-center justify-center mb-4">
                          <study.icon className="h-8 w-8 text-pink-500" />
                        </div>
                        <div className="mt-auto">
                          <div className="bg-black/70 text-white text-xs font-bold py-1 px-3 rounded">
                            {study.badge}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:col-span-8 p-8">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                        {study.title}
                      </h2>
                      
                      <div className="mb-4">
                        <h3 className="text-purple-400 font-medium">Client:</h3>
                        <p className="text-gray-300">{study.client}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="text-purple-400 font-medium">Challenge:</h3>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="text-purple-400 font-medium">Solution:</h3>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          {study.solution.map((item, idx) => (
                            <li key={idx} className="text-gray-300">{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h3 className="text-purple-400 font-medium">Results:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                              <span className="text-gray-300">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 text-pink-500 mr-2" />
                          <h3 className="text-pink-500 font-medium">Ethical Highlight</h3>
                        </div>
                        <p className="text-gray-400 italic">{study.ethical}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255, 0, 128, 0.2), rgba(112, 0, 255, 0.2))"
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to become our next success story?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI and web solutions can deliver similar transformative results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-6 text-lg"
                onClick={() => navigateTo('/assessment')}
              >
                <span className="flex items-center">
                  Begin AI Readiness Assessment
                  <ArrowRight className="ml-2" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-6 text-lg"
                onClick={() => navigateTo('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black bg-opacity-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-white">Next Logic Design and AI</div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/services')}
              >
                Services
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/team')}
              >
                Team
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/about')}
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                className="text-white hover:text-pink-500"
                onClick={() => navigateTo('/contact')}
              >
                Contact
              </Button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400">&copy; 2025 Next Logic Design and AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}