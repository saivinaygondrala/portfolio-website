# Images Directory

This directory contains all the images used in your portfolio.

## Required Images

### Profile Image
- **File**: `profile.jpg`
- **Purpose**: Your profile photo displayed in the hero section
- **Recommended**: Square format (400x400px or larger)
- **Formats**: JPG, PNG, or WebP

### Project Images
- **Files**: `project1.png`, `project2.png`, etc.
- **Purpose**: Screenshots or images of your work/projects
- **Recommended**: 16:10 aspect ratio (400x250px or larger)
- **Formats**: PNG, JPG, or WebP

## Image Optimization Tips

1. **Keep file sizes small** (under 1MB each) for fast loading
2. **Use appropriate formats**:
   - JPG for photos
   - PNG for graphics with transparency
   - WebP for modern browsers (smaller file sizes)
3. **Optimize before uploading** using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)
   - [Squoosh](https://squoosh.app/)

## Usage in Configuration

Reference images in your `src/config/portfolio.ts` file:

```typescript
// Profile image
personal: {
  profileImage: "/images/profile.jpg"
}

// Project images
projects: [
  {
    image: "/images/project1.png"
  }
]
```

**Note**: All image paths must start with `/images/` to reference files in this directory.