import type { PortfolioConfig } from './types';

/**
 * Portfolio Configuration
 * 
 * This is the main configuration file for your portfolio website.
 * Update the values below to customize your portfolio with your personal information,
 * work experience, projects, and other details.
 * 
 * @see types.ts for detailed type definitions and documentation
 * 
 * 🚀 QUICK START:
 * 1. Replace "Your Name" with your actual name
 * 2. Update the title with your professional role
 * 3. Add your email, phone, and location
 * 4. Write your bio (2-3 sentences about your expertise)
 * 5. Add your profile image to public/images/profile.jpg
 * 6. Update work experience, projects, and skills
 * 7. Add your social media links
 * 8. Update resume URL
 */
export const portfolioConfig: PortfolioConfig = {
  // ============================================================================
  // PERSONAL INFORMATION
  // ============================================================================
  /**
   * Your personal information displayed throughout the portfolio
   * This appears in the hero section, page titles, and contact information
   */
  personal: {
    name: "Your Name",
    title: "Full Stack Developer", // e.g., "Frontend Developer", "Backend Engineer", "Software Engineer"
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567", // Optional - remove if you don't want to display
    location: "Your City, Country",
    bio: "Passionate Full Stack Developer with expertise in building scalable web applications using modern technologies. Experienced in both frontend and backend development with a strong focus on clean code and user experience.",
    profileImage: "/images/profile.jpg",
    initials: "YN" // Replace with your initials (e.g., "SV", "JD") - used for logo and favicon
  },

  // ============================================================================
  // SKILLS & TECHNOLOGIES
  // ============================================================================
  /**
   * Your technical skills grouped by category
   * These appear in the About section with icons and hover effects
   * Categories: Backend, Frontend, Database, Cloud, DevOps, Tools
   */
  /**
   * Skills & Expertise - Add your skills, tools, and areas of expertise
   * 
   * Categories are completely flexible - use ANY names that fit your field:
   * - For developers: 'Programming Languages', 'Frameworks', 'Tools', 'Cloud Platforms'
   * - For designers: 'Design Tools', 'Typography', 'Branding', 'Digital Art'
   * - For artists: 'Mediums', 'Techniques', 'Software', 'Styles'
   * - For musicians: 'Instruments', 'Genres', 'Software', 'Performance'
   * - For writers: 'Writing Styles', 'Genres', 'Tools', 'Languages'
   * 
   * Icons can be FontAwesome classes (e.g., 'fab fa-react') or emojis/text (e.g., '🎨', '♪')
   */
  skills: [
    // Core Skills - Replace with your main expertise areas
    { name: 'Skill 1', icon: '🎯', category: 'Core Skills' },
    { name: 'Skill 2', icon: '⚡', category: 'Core Skills' },
    { name: 'Skill 3', icon: '🚀', category: 'Core Skills' },
    { name: 'Skill 4', icon: '💡', category: 'Core Skills' },
    
    // Tools & Software - Replace with tools you use
    { name: 'Tool 1', icon: '🛠️', category: 'Tools & Software' },
    { name: 'Tool 2', icon: '💻', category: 'Tools & Software' },
    { name: 'Tool 3', icon: '📱', category: 'Tools & Software' },
    
    // Specializations - Replace with your specialized areas
    { name: 'Specialization 1', icon: '🎨', category: 'Specializations' },
    { name: 'Specialization 2', icon: '📊', category: 'Specializations' },
    
    // Languages - Replace with languages you speak/use
    { name: 'English', icon: '🌍', category: 'Languages' },
    { name: 'Language 2', icon: '🗣️', category: 'Languages' },
    
    // Other - Any additional skills
    { name: 'Additional Skill', icon: '⭐', category: 'Other' },
  ],

  // ============================================================================
  // WORK EXPERIENCE
  // ============================================================================
  /**
   * Your professional work history in reverse chronological order (most recent first)
   * Displays in timeline format with achievements and technologies used
   */
  /**
   * Work Experience - Add your professional experience here
   * List in reverse chronological order (most recent first)
   * Include company, position, duration, location, description, achievements, and technologies
   */
  experience: [
    {
      company: "Your Current Company", // Replace with your current/most recent company
      position: "Senior Full Stack Developer", // Replace with your actual position
      duration: "Jan 2023 - Present", // Replace with your actual duration
      location: "Your City, Country", // Replace with actual location or "Remote"
      description: "Brief description of your role and responsibilities at this company. Focus on the main technologies and type of work you do.",
      achievements: [
        "Achievement 1 - Include specific metrics and impact (e.g., 'Improved performance by 50%')",
        "Achievement 2 - Mention team leadership, architecture decisions, or major features built",
        "Achievement 3 - Include any business impact, user growth, or technical improvements",
        "Achievement 4 - Add more achievements as needed, focus on quantifiable results"
      ],
      technologies: ["Technology1", "Technology2", "Technology3", "Framework1", "Database", "Cloud Platform"]
    },
    {
      company: "Previous Company Name", // Replace with your previous company
      position: "Full Stack Developer", // Replace with your actual position
      duration: "Mar 2021 - Dec 2022", // Replace with your actual duration
      location: "Previous City, Country", // Replace with actual location
      description: "Brief description of your role at this company. What did you work on? What technologies did you use?",
      achievements: [
        "Achievement 1 - What did you build or improve?",
        "Achievement 2 - Any leadership or mentoring experience?",
        "Achievement 3 - Performance improvements, new features, or process improvements",
        "Achievement 4 - Add more as needed"
      ],
      technologies: ["Technology1", "Technology2", "Technology3", "Database", "Tools"]
    },
    {
      company: "First Company or Internship", // Replace with your first role
      position: "Junior Developer / Intern", // Replace with your actual position  
      duration: "Jun 2020 - Feb 2021", // Replace with your actual duration
      location: "City, Country", // Replace with actual location
      description: "Description of your entry-level role or internship. What did you learn? What did you contribute?",
      achievements: [
        "Learning achievement - What technologies did you learn?",
        "Project contribution - What did you build or help build?",
        "Team collaboration - How did you work with others?",
        "Growth - How did you develop professionally?"
      ],
      technologies: ["Technology1", "Technology2", "Framework", "Tools"]
    }
  ],

  // ============================================================================
  // EDUCATION
  // ============================================================================
  /**
   * Your educational background in reverse chronological order
   * Includes degrees, institutions, and academic achievements
   */
  /**
   * Education - Add your educational background here
   * List in reverse chronological order (most recent first)
   */
  education: [
    {
      degree: "Master of Science", // Replace with your degree type
      field: "Computer Science", // Replace with your field of study
      institution: "Your University Name", // Replace with your university
      duration: "2022 - 2024", // Replace with your study period
      location: "University City, Country", // Replace with university location
      cgpa: "3.8/4.0" // Replace with your GPA/CGPA (optional)
    },
    {
      degree: "Bachelor of Technology", // Replace with your degree type
      field: "Computer Science and Engineering", // Replace with your field
      institution: "Your University Name", // Replace with your university
      duration: "2018 - 2022", // Replace with your study period
      location: "University City, Country", // Replace with university location
      cgpa: "3.6/4.0" // Replace with your GPA/CGPA (optional)
    }
  ],

  /**
   * Projects - Add your portfolio projects here
   * Include both featured projects (displayed prominently) and regular projects
   * For each project, include title, description, technologies, images, and links
   */
  projects: [
    // Featured Projects (these will be displayed prominently)
    {
      title: 'Your Featured Project 1', // Replace with your project name
      description: 'Brief description of your project that highlights the main features and technologies used. Keep it concise for project cards.',
      longDescription: 'Detailed description of your featured project. Explain the problem it solves, the approach you took, key features implemented, and any challenges you overcame. This appears in the featured projects section.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'], // Replace with technologies you used
      image: '/images/project1.png', // Add your project screenshot to public/images/
      demoUrl: 'https://your-project-demo.com', // Replace with your live demo URL
      codeUrl: 'https://github.com/yourusername/project1', // Replace with your GitHub repo URL
      featured: true, // Keep true for featured projects
      highlights: [
        'Key feature or achievement 1',
        'Key feature or achievement 2', 
        'Key feature or achievement 3',
        'Performance improvement or scale achieved'
      ]
    },
    {
      title: 'Your Featured Project 2', // Replace with your project name
      description: 'Another brief description of a significant project you want to showcase prominently.',
      longDescription: 'Detailed description of your second featured project. Focus on different technologies or types of challenges compared to your first project.',
      tech: ['Vue.js', 'Python', 'Django', 'MongoDB'], // Replace with technologies you used
      image: '/images/project2.png', // Add your project screenshot
      demoUrl: 'https://your-project2-demo.com', // Replace with your live demo URL
      codeUrl: 'https://github.com/yourusername/project2', // Replace with your GitHub repo URL
      featured: true, // Keep true for featured projects
      highlights: [
        'Unique feature of this project',
        'Technical challenge you solved',
        'Business impact or user growth',
        'Innovation or creative solution'
      ]
    },
    
    // Regular Projects (these appear in the projects grid)
    {
      title: 'Your Project 3', // Replace with your project name
      description: 'Description of another project in your portfolio. This can be smaller projects, contributions, or learning projects.',
      tech: ['Technology1', 'Technology2', 'Technology3'], // Replace with actual technologies
      image: '/images/project3.png', // Add your project screenshot (optional)
      demoUrl: 'https://your-project3-demo.com', // Replace or use '#' if no demo
      codeUrl: 'https://github.com/yourusername/project3', // Replace with your GitHub repo
      featured: false // Keep false for regular projects
    },
    {
      title: 'Your Project 4', // Replace with your project name
      description: 'Another project description. You can add as many projects as you want.',
      tech: ['Framework1', 'Database1', 'Tool1'], // Replace with actual technologies
      image: '/images/project4.png', // Add your project screenshot (optional)
      demoUrl: 'https://your-project4-demo.com', // Replace or use '#' if no demo
      codeUrl: 'https://github.com/yourusername/project4', // Replace with your GitHub repo
      featured: false // Keep false for regular projects
    }
  ],

  /**
   * Social Links - Add your social media and professional profiles
   * These appear in the contact section and footer
   */
  social: {
    github: 'https://github.com/yourusername', // Replace with your GitHub username
    linkedin: 'https://linkedin.com/in/yourusername', // Replace with your LinkedIn profile
    twitter: 'https://twitter.com/yourusername', // Replace with your Twitter handle (optional)
    email: 'mailto:your.email@example.com' // Replace with your email address
  },

  /**
   * Contact Information - Your contact details
   */
  contact: {
    email: "your.email@example.com", // Replace with your email
    phone: "+1 (555) 123-4567", // Replace with your phone (optional)
    location: "Your City, Country", // Replace with your location
    availableForWork: true, // Set to false if you're not looking for opportunities
    responseTime: "24 hours" // How quickly you typically respond
  },

  /**
   * Certifications - Add your professional certifications here
   * Remove this entire section if you don't have certifications
   */
  certifications: [
    {
      name: "Your Certification Name", // Replace with actual certification
      issuer: "Certification Authority", // Replace with issuing organization
      date: "2024", // Replace with year obtained
      credentialId: "CERT-ID-123", // Replace with credential ID (optional)
      verificationUrl: "https://verify.example.com/cert" // Add verification URL (optional)
    },
    {
      name: "Another Certification", // Add more certifications as needed
      issuer: "Another Authority",
      date: "2023",
      credentialId: "CERT-ID-456"
    }
    // Add more certifications as needed, or remove this section entirely
  ],

  /**
   * Publications (Optional) - Add your research publications, papers, and academic contributions
   * Remove this entire section if you don't have publications
   */
  publications: [
    {
      title: "Your Research Paper Title", // Replace with your actual paper title
      authors: ["Your Name", "Co-Author 1", "Co-Author 2"], // Replace with actual authors
      journal: "Journal Name", // Replace with journal name (for journal articles)
      year: "2024", // Replace with publication year
      volume: "Vol. X, No. Y", // Replace with volume info (optional)
      pages: "1-15", // Replace with page numbers (optional)
      doi: "10.1234/journal.2024.001", // Replace with DOI (optional)
      type: "Journal Article", // or "Conference Paper", "Workshop Paper", "Book Chapter"
      abstract: "Brief abstract of your publication. Explain the main contribution and findings.", // Replace with actual abstract (optional)
      url: "https://doi.org/10.1234/journal.2024.001", // Replace with publication URL
      keywords: ["Keyword1", "Keyword2", "Keyword3"] // Replace with relevant keywords (optional)
    }
    // Add more publications as needed, or remove this entire section if not applicable
  ],

  /**
   * Professional Summary - Your career highlights and statistics
   */
  summary: {
    yearsOfExperience: "3+", // Replace with your years of experience
    projectsCompleted: "10+", // Replace with number of projects/works you've completed
    skillsAreas: "15+", // Replace with number of skills/areas you have expertise in
    teamLeadExperience: true, // Set to false if you haven't led teams or managed people
    remoteWorkExperience: true, // Set to false if you haven't worked remotely or freelanced
    industryFocus: ["Your Industry", "Your Field", "Your Expertise Area"] // Replace with your focus areas
  },

  /**
   * Resume Configuration - Link to your resume
   */
  resume: {
    url: "https://drive.google.com/file/d/your-resume-file-id/view", // Replace with your actual resume URL
    external: true // Keep true for external URLs (Google Drive, LinkedIn, etc.)
  }
}