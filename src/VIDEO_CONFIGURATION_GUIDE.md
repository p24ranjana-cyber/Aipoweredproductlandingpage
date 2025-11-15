# Video Configuration Guide for PropEdge Landing Page

## Problem with Current Setup

The URLs you're using (e.g., `https://p24akshitha-collab.github.io/video1/`) point to **GitHub Pages websites**, not actual video files. The HTML5 `<video>` tag and video players need **direct file URLs** that end in `.mp4`, `.webm`, or use embeddable video platforms.

## Solutions to Get Videos Working

### Option 1: Upload Videos to a Cloud Storage Service (Recommended)

Upload your `.mp4` files to one of these services and get the direct file URL:

#### A. **Cloudinary** (Free tier available)
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Upload your video files
3. Copy the **Resource URL** (it will look like: `https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/video.mp4`)
4. Paste this URL into the `videoUrl` field in `/components/SocialProof.tsx`

#### B. **AWS S3** or **Google Cloud Storage**
1. Upload videos to a public bucket
2. Get the direct file URL (e.g., `https://bucket-name.s3.amazonaws.com/video1.mp4`)
3. Update the `videoUrl` in the testimonials array

#### C. **GitHub Raw Content** (If videos are in your repo)
If your videos are committed to your GitHub repository:
1. Go to your video file in GitHub
2. Click "Raw" button
3. Copy the URL (e.g., `https://raw.githubusercontent.com/username/repo/main/videos/video1.mp4`)
4. Use this URL in the `videoUrl` field

### Option 2: Use YouTube (Easiest for Most People)

If your videos are on YouTube:

1. Upload your video to YouTube (can be unlisted)
2. Copy the full YouTube URL:
   - Regular video: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - YouTube Shorts: `https://www.youtube.com/shorts/abc123`
3. Paste this directly into the `videoUrl` field

**Example:**
```typescript
{
  name: "Neha Rao",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  // ... rest of fields
}
```

The component will automatically detect it's a YouTube URL and embed it properly.

### Option 3: Use Vimeo

If your videos are on Vimeo:

1. Upload to Vimeo
2. Copy the Vimeo URL (e.g., `https://vimeo.com/123456789`)
3. Paste into the `videoUrl` field

## How to Update the Videos

Open `/components/SocialProof.tsx` and find the `testimonials` array. Update the `videoUrl` field for each testimonial:

```typescript
const testimonials = [
  {
    name: "Neha Rao",
    role: "Ops Lead @ TechVenture",
    persona: "Operations Lead",
    // ... other fields ...
    videoUrl: "YOUR_VIDEO_URL_HERE",  // ← Replace this
    videoType: "mp4" as const,
    // ... rest of fields
  },
  // ... other testimonials
];
```

## Supported Video Formats

The component automatically detects and supports:

- ✅ **Direct video files**: URLs ending in `.mp4`, `.webm`, `.ogg`
- ✅ **YouTube**: Full YouTube URLs (watch or shorts)
- ✅ **Vimeo**: Vimeo video URLs

## Testing Your Videos

1. Update the `videoUrl` in `/components/SocialProof.tsx`
2. Save the file
3. Click the play button on any testimonial card
4. The video should play in the modal

If you see "Video URL Not Configured", the URL format is not recognized. Make sure:
- Direct video URLs end with `.mp4`, `.webm`, or `.ogg`
- YouTube URLs start with `youtube.com` or `youtu.be`
- Vimeo URLs start with `vimeo.com`

## Current GitHub Pages Issue

Your current URLs (`https://p24akshitha-collab.github.io/video1/`) won't work because they're web pages, not video files. You need to:

1. Either change the URL to point directly to the `.mp4` file on GitHub Pages:
   - `https://p24akshitha-collab.github.io/video1.mp4` (if that exists)
   
2. Or upload the videos to one of the services mentioned above

## Quick Fix for Now

If you want to test the functionality immediately, you can use sample YouTube videos:

```typescript
videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

Then replace with your actual videos once they're properly hosted.

## Need Help?

If you're still having issues:
1. Check the browser console for errors
2. Verify the video URL opens directly in a new browser tab
3. Make sure the URL ends in a video extension (.mp4, .webm) or is from YouTube/Vimeo
