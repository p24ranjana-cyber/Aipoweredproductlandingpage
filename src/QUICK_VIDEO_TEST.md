# Quick Video Test - Add Sample Videos

If you want to **test the video functionality immediately** while you prepare your actual testimonial videos, here are some options:

## Option 1: Use Sample YouTube Videos

Open `/components/SocialProof.tsx` and update the `videoUrl` fields with these sample YouTube videos:

```typescript
const testimonials = [
  {
    name: "Neha Rao",
    // ... other fields ...
    videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",  // Sample testimonial-style video
    // ... rest of fields
  },
  {
    name: "Sandeep Verma",
    // ... other fields ...
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",  // Another sample
    // ... rest of fields
  },
  {
    name: "Riya Mehta",
    // ... other fields ...
    videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",  // Third sample
    // ... rest of fields
  }
];
```

## Option 2: Use Sample Direct MP4 Videos

You can use these publicly available sample videos for testing:

```typescript
videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
```

## How It Works

The component will:
1. Detect if the URL is YouTube → embed YouTube player
2. Detect if the URL ends in .mp4/.webm → use HTML5 video player
3. Show a helpful message if URL is empty or invalid

## Your GitHub Pages Videos

To make your GitHub Pages videos work, you need to either:

### Option A: Point to the actual .mp4 file
Change:
```
https://p24akshitha-collab.github.io/video1/
```

To:
```
https://p24akshitha-collab.github.io/video1.mp4
```
(Only works if the .mp4 file exists at that path)

### Option B: Use GitHub Raw URLs
If videos are in your repo:
1. Navigate to the video file in GitHub
2. Click "Raw" 
3. Copy the URL: `https://raw.githubusercontent.com/username/repo/branch/path/to/video.mp4`
4. Use that URL

## Quick Copy-Paste Example

Here's a complete working example using YouTube (just copy and paste):

```typescript
const testimonials = [
  {
    name: "Neha Rao",
    role: "Ops Lead @ TechVenture",
    persona: "Operations Lead",
    quote: "We usually spend 6–8 weeks collecting options and cleaning Excel sheets. PropEdge gave us a structured shortlist in under 24 hours, and we closed our lease in 3.5 weeks instead of 3 months.",
    fullTranscript: "We usually spend 6–8 weeks collecting options and cleaning Excel sheets. PropEdge gave us a structured shortlist in under 24 hours, and we closed our lease in 3.5 weeks instead of 3 months.\n\nWhat made the biggest difference for us was how organised everything suddenly became. Earlier, we would receive different formats — PDFs, forwarded WhatsApp images, Excel files with missing fields — and my team spent more time standardising data than evaluating spaces. It always felt like we were running behind the process instead of driving it.\n\nWith PropEdge, every option came clean, comparable, and ready for alignment. Commute scoring, cost projections, ESG indicators — everything was already laid out. It saved us multiple internal meetings and weeks of manual effort. For the first time, the leasing process felt fast, structured, and actually manageable.",
    posterImage: "https://images.unsplash.com/photo-1551989745-8ac16ba81d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwb2ZmaWNlfGVufDF8fHx8MTc2MzE5OTE1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",  // ← Working YouTube URL
    videoType: "mp4" as const,
    avatar: "from-blue-400 to-cyan-500",
    icon: Briefcase,
    duration: "1:24"
  },
  // ... repeat for other testimonials
];
```

## Next Steps

1. **Test with sample videos first** to verify everything works
2. **Record/prepare your actual testimonial videos**
3. **Upload to YouTube, Cloudinary, or S3** (see VIDEO_CONFIGURATION_GUIDE.md)
4. **Replace the sample URLs** with your actual video URLs

## Still Having Issues?

Check the browser console (F12) for error messages, and make sure:
- URLs are complete and accessible
- Videos are not blocked by CORS
- File extensions are correct (.mp4, .webm)
