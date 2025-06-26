/**
 * Portfolio Configuration Types
 * 
 * This file contains all TypeScript interfaces and types for the portfolio configuration.
 * Use these types to ensure type safety and get IntelliSense support when editing the config.
 */

// ============================================================================
// PERSONAL INFORMATION
// ============================================================================

export interface PersonalInfo {
  /** Your full name as displayed in the hero section */
  name: string;
  /** Your professional title/role */
  title: string;
  /** Your professional email address */
  email: string;
  /** Your phone number (optional) */
  phone?: string;
  /** Your current location (city, country) */
  location: string;
  /** A brief bio describing your professional background */
  bio: string;
  /** Path to your profile image (should be in public folder) */
  profileImage: string;
  /** Your initials for logo/favicon (e.g., "SV", "JD") - will be used to generate logo */
  initials: string;
}

// ============================================================================
// SKILLS & TECHNOLOGIES
// ============================================================================

// Skill categories are completely flexible - use ANY category name that fits your field
// Examples: 'Programming', 'Design', 'Music', 'Writing', 'Languages', 'Art', 'Sports', etc.
export type SkillCategory = string;

export interface Skill {
  /** Name of the skill, tool, or expertise */
  name: string;
  /** Icon representing the skill - can be FontAwesome class (e.g., 'fas fa-paint-brush') or emoji/text */
  icon: string;
  /** Category for grouping skills - use any category name that fits your field */
  category: SkillCategory;
  /** Optional proficiency level (0-100) - currently not displayed but available for future use */
  level?: number;
}

// ============================================================================
// WORK EXPERIENCE
// ============================================================================

export interface WorkExperience {
  /** Organization, company, or client name */
  company: string;
  /** Your position, role, or title */
  position: string;
  /** Time period (e.g., "Jan 2022 - Present", "Summer 2023") */
  duration: string;
  /** Location or work arrangement */
  location: string;
  /** Brief description of your role and responsibilities */
  description: string;
  /** List of key achievements, accomplishments, and results */
  achievements: string[];
  /** Skills, tools, or technologies used (can be any type of skills) */
  technologies: string[];
}

// ============================================================================
// EDUCATION
// ============================================================================

export interface Education {
  /** Degree type (e.g., "Bachelor of Technology", "Master of Science") */
  degree: string;
  /** Field of study */
  field: string;
  /** Institution name */
  institution: string;
  /** Study period */
  duration: string;
  /** Institution location */
  location: string;
  /** GPA or CGPA (optional) */
  cgpa?: string;
}

// ============================================================================
// PUBLICATIONS
// ============================================================================

export type PublicationType = 'Journal Article' | 'Conference Paper' | 'Workshop Paper' | 'Book Chapter';

export interface Publication {
  /** Publication title */
  title: string;
  /** List of authors */
  authors: string[];
  /** Journal name (for journal articles) */
  journal?: string;
  /** Conference name (for conference papers) */
  conference?: string;
  /** Publication year */
  year: string;
  /** Volume and issue information */
  volume?: string;
  /** Page numbers */
  pages?: string;
  /** Conference location (for conference papers) */
  location?: string;
  /** DOI identifier */
  doi?: string;
  /** Type of publication */
  type: PublicationType;
  /** Abstract or brief description */
  abstract?: string;
  /** URL to the publication */
  url?: string;
  /** Keywords associated with the publication */
  keywords?: string[];
}

// ============================================================================
// PROJECTS
// ============================================================================

export interface Project {
  /** Project or work title */
  title: string;
  /** Short description for project cards */
  description: string;
  /** Detailed description for featured projects */
  longDescription?: string;
  /** Skills, tools, or technologies used in the project */
  tech: string[];
  /** Path to project image, artwork, or screenshot */
  image: string;
  /** URL to live demo, portfolio piece, or showcase */
  demoUrl: string;
  /** URL to source code, additional materials, or case study */
  codeUrl: string;
  /** Whether to feature this project prominently */
  featured: boolean;
  /** Key highlights, features, or achievements (optional) */
  highlights?: string[];
}

// ============================================================================
// CERTIFICATIONS
// ============================================================================

export interface Certification {
  /** Certification name */
  name: string;
  /** Issuing organization */
  issuer: string;
  /** Date of certification */
  date: string;
  /** Credential ID (optional) */
  credentialId?: string;
  /** URL to verify certification (optional) */
  verificationUrl?: string;
}

// ============================================================================
// SOCIAL LINKS
// ============================================================================

export interface SocialLinks {
  /** GitHub profile URL */
  github: string;
  /** LinkedIn profile URL */
  linkedin: string;
  /** Twitter/X profile URL */
  twitter: string;
  /** Email mailto link */
  email: string;
  /** Personal website URL (optional) */
  website?: string;
  /** YouTube channel URL (optional) */
  youtube?: string;
  /** Medium profile URL (optional) */
  medium?: string;
}

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export interface ContactInfo {
  /** Primary email address */
  email: string;
  /** Phone number (optional) */
  phone?: string;
  /** Current location */
  location: string;
  /** Whether available for new opportunities */
  availableForWork: boolean;
  /** Expected response time */
  responseTime: string;
}

// ============================================================================
// PROFESSIONAL SUMMARY
// ============================================================================

export interface ProfessionalSummary {
  /** Years of professional experience */
  yearsOfExperience: string;
  /** Number of projects, works, or clients completed */
  projectsCompleted: string;
  /** Number of skills, tools, or areas of expertise mastered */
  skillsAreas: string;
  /** Whether you have team leadership or management experience */
  teamLeadExperience: boolean;
  /** Whether you have remote or freelance work experience */
  remoteWorkExperience: boolean;
  /** Industries, fields, or areas you focus on */
  industryFocus: string[];
}

// ============================================================================
// RESUME CONFIGURATION
// ============================================================================

export interface ResumeConfig {
  /** Path to resume PDF file or external URL */
  url: string;
  /** Filename for download (optional, only used for local files) */
  filename?: string;
  /** Whether the resume is hosted externally (opens in new tab) or local (downloads) */
  external?: boolean;
}

// ============================================================================
// MAIN PORTFOLIO CONFIGURATION
// ============================================================================

export interface PortfolioConfig {
  /** Personal information section */
  personal: PersonalInfo;
  /** Skills and technologies */
  skills: Skill[];
  /** Work experience */
  experience: WorkExperience[];
  /** Educational background */
  education: Education[];
  /** Research publications (optional) */
  publications?: Publication[];
  /** Projects portfolio */
  projects: Project[];
  /** Professional certifications */
  certifications: Certification[];
  /** Social media links */
  social: SocialLinks;
  /** Contact information */
  contact: ContactInfo;
  /** Professional summary stats */
  summary: ProfessionalSummary;
  /** Resume configuration */
  resume: ResumeConfig;
}

// ============================================================================
// HELPER TYPES
// ============================================================================

/** Helper type for optional configuration sections */
export type OptionalConfigSections = 'publications' | 'certifications';

/** Helper type for required configuration sections */
export type RequiredConfigSections = Exclude<keyof PortfolioConfig, OptionalConfigSections>;

/** Utility type for partial configuration updates */
export type PartialPortfolioConfig = Partial<PortfolioConfig>;

// ============================================================================
// CONFIGURATION CONSTANTS
// ============================================================================

/** 
 * Skill categories are completely flexible - these are just examples
 * You can use ANY category names that fit your field:
 * - For developers: 'Programming', 'Design', 'DevOps', 'Mobile'
 * - For artists: 'Painting', 'Digital Art', 'Photography', 'Sculpture'
 * - For musicians: 'Instruments', 'Composition', 'Performance', 'Production'
 * - For writers: 'Fiction', 'Non-fiction', 'Technical Writing', 'Editing'
 * - For designers: 'UI/UX', 'Branding', 'Print Design', 'Illustration'
 */

/** Default image paths */
export const DEFAULT_IMAGES = {
  profile: '/images/profile.jpg',
  projectPlaceholder: '/api/placeholder/400/250',
  favicon: '/favicon.ico'
} as const;