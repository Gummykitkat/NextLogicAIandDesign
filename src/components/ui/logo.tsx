"use client"

import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="relative w-48 h-16">
      <Image
        src="/logo.png"
        alt="Next Logic AI and Design Logo"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
};