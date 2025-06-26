import { portfolioConfig } from '@/config/portfolio'

/**
 * Dynamic Logo Component
 * 
 * Creates a professional SVG logo using the user's initials
 * Automatically uses the initials from the portfolio configuration
 * Features a modern gradient design that works in both light and dark themes
 */

interface LogoProps {
  /** Size of the logo (width and height in pixels) */
  size?: number;
  /** Additional CSS classes */
  className?: string;
}

export default function Logo({ size = 40, className = "" }: LogoProps) {
  const initials = portfolioConfig.personal.initials.toUpperCase().slice(0, 2);
  
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
          {/* Subtle inner shadow effect */}
          <filter id="innerShadow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
            <feOffset dx="1" dy="1" result="offset"/>
          </filter>
        </defs>
        
        {/* Background Circle with Gradient */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#logoGradient)"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
          filter="url(#innerShadow)"
        />
        
        {/* Inner Circle for Depth */}
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
        />
        
        {/* Initials Text */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="32"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
          fill="url(#textGradient)"
          style={{
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            letterSpacing: initials.length === 1 ? '0' : '-1px'
          }}
        >
          {initials}
        </text>
        
        {/* Subtle highlight */}
        <circle
          cx="42"
          cy="42"
          r="8"
          fill="rgba(255, 255, 255, 0.2)"
          style={{
            filter: 'blur(4px)'
          }}
        />
      </svg>
    </div>
  );
}

/**
 * Favicon Logo Component
 * 
 * Simplified version for favicon generation
 * Optimized for small sizes and clarity
 */
export function FaviconLogo({ size = 32 }: { size?: number }) {
  const initials = portfolioConfig.personal.initials.toUpperCase().slice(0, 2);
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="faviconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="url(#faviconGradient)"
      />
      
      {/* Initials Text - Simplified for small sizes */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="36"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="white"
        style={{
          letterSpacing: initials.length === 1 ? '0' : '-2px'
        }}
      >
        {initials}
      </text>
    </svg>
  );
}