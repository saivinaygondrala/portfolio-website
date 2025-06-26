'use client'

import { useEffect } from 'react'
import { portfolioConfig } from '@/config/portfolio'

/**
 * Favicon Generator Component
 * 
 * Dynamically generates and sets favicon based on user's initials
 * Creates multiple favicon sizes for different devices and use cases
 */
export default function FaviconGenerator() {
  useEffect(() => {
    const generateFavicon = () => {
      const initials = portfolioConfig.personal.initials.toUpperCase().slice(0, 2);
      
      // Create a canvas element
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size
      canvas.width = 64;
      canvas.height = 64;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 64, 64);
      gradient.addColorStop(0, '#3B82F6'); // Blue
      gradient.addColorStop(0.5, '#8B5CF6'); // Purple
      gradient.addColorStop(1, '#EC4899'); // Pink

      // Draw background circle
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(32, 32, 30, 0, 2 * Math.PI);
      ctx.fill();

      // Add subtle border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw initials
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Add text shadow effect
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 2;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      
      ctx.fillText(initials, 32, 32);

      // Convert to data URL
      const dataURL = canvas.toDataURL('image/png');

      // Update favicon
      updateFavicon(dataURL);
    };

    const updateFavicon = (dataURL: string) => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach(favicon => favicon.remove());

      // Create new favicon link elements
      const favicon16 = document.createElement('link');
      favicon16.rel = 'icon';
      favicon16.type = 'image/png';
      favicon16.sizes = '16x16';
      favicon16.href = dataURL;

      const favicon32 = document.createElement('link');
      favicon32.rel = 'icon';
      favicon32.type = 'image/png';
      favicon32.sizes = '32x32';
      favicon32.href = dataURL;

      const faviconApple = document.createElement('link');
      faviconApple.rel = 'apple-touch-icon';
      faviconApple.sizes = '180x180';
      faviconApple.href = dataURL;

      // Add to document head
      document.head.appendChild(favicon16);
      document.head.appendChild(favicon32);
      document.head.appendChild(faviconApple);

      // Also update the main favicon
      const mainFavicon = document.createElement('link');
      mainFavicon.rel = 'shortcut icon';
      mainFavicon.href = dataURL;
      document.head.appendChild(mainFavicon);
    };

    // Generate favicon when component mounts
    generateFavicon();
  }, []);

  // This component doesn't render anything visible
  return null;
}