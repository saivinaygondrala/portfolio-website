# 🚀 Modern Portfolio Template

A sleek, responsive, and fully customizable portfolio website template built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Perfect for developers, designers, artists, writers, musicians, and any professional looking to showcase their work online.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/modern-portfolio-template)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/modern-portfolio-template)

## ✨ Features

- **🎨 Modern Design**: Clean, professional, and visually appealing
- **📱 Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Built with Next.js for optimal speed and SEO
- **🔧 TypeScript**: Full type safety and excellent developer experience
- **🎯 Easy Configuration**: Single config file to customize everything
- **🌍 Universal**: Works for ANY profession - not just developers
- **🎨 Flexible Skills**: Use any categories (Art, Music, Writing, etc.)
- **📄 Resume Integration**: Link to external resume or download PDF
- **🚀 Deploy Ready**: One-click deployment to Vercel, Netlify, or any platform
- **♿ Accessible**: Built with accessibility best practices in mind
- **🔍 SEO Optimized**: Meta tags and structured data included
- **🎨 Dynamic Logo & Favicon**: Automatically generated from your initials

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [FontAwesome](https://fontawesome.com/) (free tier)
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 🚀 Quick Start

### 1. Fork & Clone

```bash
# 1. Fork this repository on GitHub
# 2. Clone your forked repository
git clone https://github.com/YOUR_USERNAME/modern-portfolio-template.git
cd modern-portfolio-template
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Customize Your Portfolio

The main configuration file is located at `src/config/portfolio.ts`. This is where you'll add all your personal information, skills, experience, and projects.

```bash
# Open the configuration file
code src/config/portfolio.ts
```

### 4. Add Your Images

```bash
# Add your profile image (square format recommended)
public/images/profile.jpg

# Add project screenshots (16:10 aspect ratio recommended)
public/images/project1.png
public/images/project2.png
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

### 6. Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm run start
```

## 📝 Configuration Guide

### Personal Information

Update your basic information in the `personal` section:

```typescript
personal: {
  name: "Your Full Name",
  title: "Your Professional Title", // e.g., "Graphic Designer", "Software Engineer", "Artist"
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567", // Optional
  location: "Your City, Country",
  bio: "A brief description of who you are and what you do. Keep it engaging and professional.",
  profileImage: "/images/profile.jpg",
  initials: "YN" // Your initials for logo and favicon (e.g., "SV", "JD")
}
```

### Skills & Expertise

The skills system is completely flexible - use ANY categories that fit your profession:

```typescript
skills: [
  // For a Graphic Designer
  { name: 'Adobe Photoshop', icon: '🎨', category: 'Design Software' },
  { name: 'Logo Design', icon: '✏️', category: 'Specializations' },
  { name: 'Typography', icon: '📝', category: 'Core Skills' },
  
  // For a Musician
  { name: 'Piano', icon: '🎹', category: 'Instruments' },
  { name: 'Composition', icon: '🎼', category: 'Skills' },
  { name: 'Pro Tools', icon: '🎵', category: 'Software' },
  
  // For a Writer
  { name: 'Creative Writing', icon: '✍️', category: 'Writing Styles' },
  { name: 'SEO Content', icon: '📈', category: 'Specializations' },
  { name: 'WordPress', icon: '📝', category: 'Tools' },
]
```

**Icons**: You can use emojis (🎨), FontAwesome classes (`fab fa-react`), or simple text.

### Work Experience

Add your professional experience, freelance work, or any relevant positions:

```typescript
experience: [
  {
    company: "Company Name or Client",
    position: "Your Role",
    duration: "Jan 2023 - Present",
    location: "City, Country or Remote",
    description: "Brief description of your role and responsibilities.",
    achievements: [
      "Specific achievement with quantifiable results",
      "Another accomplishment that showcases your impact",
      "Skills or technologies you used or learned"
    ],
    technologies: ["Skill 1", "Tool 2", "Software 3"] // Can be any skills/tools
  }
]
```

### Projects Portfolio

Showcase your work - this could be software projects, design work, art pieces, writing samples, etc.:

```typescript
projects: [
  {
    title: "Project Name",
    description: "Brief description for project cards",
    longDescription: "Detailed description for featured projects",
    tech: ["Tool 1", "Skill 2", "Software 3"], // Technologies, mediums, or tools used
    image: "/images/project1.png", // Project screenshot, artwork, or photo
    demoUrl: "https://your-project.com", // Live demo, portfolio piece, or showcase
    codeUrl: "https://github.com/username/project", // Source code, case study, or additional info
    featured: true, // Set to true for featured projects (displays prominently)
    highlights: [
      "Key feature or achievement",
      "What makes this project special",
      "Results or impact"
    ]
  }
]
```

### Social Links & Resume

```typescript
social: {
  github: "https://github.com/yourusername", // Or portfolio site
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername", // Optional
  email: "mailto:your.email@example.com"
},

resume: {
  url: "https://drive.google.com/file/d/your-file-id/view", // External URL
  external: true // Opens in new tab instead of downloading
}
```

## 🎨 Customization Examples

### For Different Professions

<details>
<summary>🎨 Graphic Designer</summary>

```typescript
personal: {
  title: "Graphic Designer",
  bio: "Creative designer specializing in brand identity and digital design..."
},
skills: [
  { name: 'Adobe Photoshop', icon: '🎨', category: 'Design Software' },
  { name: 'Illustrator', icon: '✏️', category: 'Design Software' },
  { name: 'Figma', icon: '🎯', category: 'Design Software' },
  { name: 'Logo Design', icon: '🏷️', category: 'Specializations' },
  { name: 'Brand Identity', icon: '🎭', category: 'Specializations' },
  { name: 'Typography', icon: '📝', category: 'Core Skills' }
]
```

</details>

<details>
<summary>🎵 Musician</summary>

```typescript
personal: {
  title: "Music Producer & Composer",
  bio: "Professional musician with 10+ years of experience in composition and production..."
},
skills: [
  { name: 'Piano', icon: '🎹', category: 'Instruments' },
  { name: 'Guitar', icon: '🎸', category: 'Instruments' },
  { name: 'Logic Pro X', icon: '🎵', category: 'Software' },
  { name: 'Composition', icon: '🎼', category: 'Skills' },
  { name: 'Jazz', icon: '🎷', category: 'Genres' },
  { name: 'Classical', icon: '🎻', category: 'Genres' }
]
```

</details>

<details>
<summary>✍️ Writer</summary>

```typescript
personal: {
  title: "Content Writer & Editor",
  bio: "Professional writer specializing in technical documentation and creative content..."
},
skills: [
  { name: 'Creative Writing', icon: '✍️', category: 'Writing Styles' },
  { name: 'Technical Writing', icon: '📋', category: 'Writing Styles' },
  { name: 'SEO Content', icon: '📈', category: 'Specializations' },
  { name: 'WordPress', icon: '📝', category: 'Tools' },
  { name: 'Grammarly', icon: '✅', category: 'Tools' },
  { name: 'Research', icon: '🔍', category: 'Core Skills' }
]
```

</details>

<details>
<summary>🎭 Artist</summary>

```typescript
personal: {
  title: "Digital Artist & Illustrator",
  bio: "Contemporary artist creating digital illustrations and traditional artwork..."
},
skills: [
  { name: 'Digital Painting', icon: '🎨', category: 'Mediums' },
  { name: 'Watercolor', icon: '💧', category: 'Mediums' },
  { name: 'Procreate', icon: '📱', category: 'Software' },
  { name: 'Character Design', icon: '👤', category: 'Specializations' },
  { name: 'Concept Art', icon: '💡', category: 'Specializations' },
  { name: 'Color Theory', icon: '🌈', category: 'Core Skills' }
]
```

</details>

## 🎯 Section Customization

### Making Sections Optional

You can hide entire sections by leaving them empty:

```typescript
// Hide education section
education: [],

// Hide publications section  
publications: [],

// Hide certifications section
certifications: []
```

### Custom Logo & Favicon

The portfolio automatically generates a professional logo and favicon from your initials:

1. **Set your initials** in the configuration:
```typescript
personal: {
  initials: "SV" // Replace with your initials
}
```

2. **Logo appears** in the navigation bar automatically
3. **Favicon is generated** dynamically for all device sizes
4. **Professional gradient design** with modern styling

### Custom "What I Do" Section

Edit the hardcoded services in `src/components/About.tsx`:

```tsx
// Replace these with your services
<li className="flex items-center">
  <span className="text-green-400 mr-2">✓</span>
  Your Service 1
</li>
<li className="flex items-center">
  <span className="text-green-400 mr-2">✓</span>
  Your Service 2
</li>
```

Or remove the entire section if you don't need it.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign up
3. Click "New Project" and import your GitHub repository
4. Deploy with default settings
5. Your portfolio will be live at `https://your-portfolio.vercel.app`

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git" and connect your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Deploy to GitHub Pages

```bash
# Install GitHub Pages deployment package
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d out",
"export": "next build && next export"

# Deploy
npm run export
npm run deploy
```

### Other Platforms

This template works with any static hosting service:
- **Firebase Hosting**
- **AWS S3 + CloudFront** 
- **DigitalOcean App Platform**
- **Surge.sh**

## 📁 Project Structure

```
modern-portfolio-template/
├── public/                 # Static assets
│   ├── images/            # Profile and project images
│   └── favicon.ico        # Website favicon
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── About.tsx      # About section
│   │   ├── Contact.tsx    # Contact section
│   │   ├── Experience.tsx # Experience section
│   │   ├── Hero.tsx       # Hero/landing section
│   │   ├── Navigation.tsx # Navigation bar
│   │   ├── Projects.tsx   # Projects showcase
│   │   └── Publications.tsx # Publications section
│   └── config/           # Configuration files
│       ├── portfolio.ts  # Main configuration (EDIT THIS!)
│       └── types.ts      # TypeScript type definitions
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Check TypeScript types
npm run export       # Export static site
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to the main page in `src/app/page.tsx`
3. Update configuration types in `src/config/types.ts` if needed

### Customizing Styles

- **Global styles**: Edit `src/app/globals.css`
- **Component styles**: Use Tailwind classes in components
- **Colors**: Modify Tailwind config in `tailwind.config.js`

## 🐛 Troubleshooting

### Common Issues

**Images not displaying:**
- Ensure images are in the `public/images/` directory
- Check file paths start with `/` (e.g., `/images/profile.jpg`)
- Verify image file names match your configuration

**TypeScript errors:**
- Run `npm run type-check` to see all type errors
- Ensure all required fields in the configuration are filled
- Check that skill categories and other enums match the defined types

**Styles not applying:**
- Clear browser cache and hard refresh (Ctrl+F5)
- Check that Tailwind classes are spelled correctly
- Verify FontAwesome CDN is loading in the browser

**Build failures:**
- Run `npm run lint` to check for code issues
- Ensure all images referenced in the config actually exist
- Check that external URLs are valid

### Getting Help

1. Check the [Issues](https://github.com/yourusername/modern-portfolio-template/issues) tab for common problems
2. Search existing issues before creating a new one
3. Provide specific error messages and your configuration when reporting bugs

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Ideas

- Additional color themes
- New section components
- Improved accessibility features
- Performance optimizations
- Bug fixes and improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Show Your Support

If this template helped you create your portfolio, please give it a star! ⭐

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [FontAwesome](https://fontawesome.com/)
- Deployed on [Vercel](https://vercel.com/)

---

**Happy building!** 🚀

Made with ❤️ for the open source community