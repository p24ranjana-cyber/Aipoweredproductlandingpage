# Video Testimonials Setup Instructions

## 🚨 IMPORTANT UPDATE - Videos Not Playing

**Your current GitHub Pages URLs won't work** because they point to websites, not video files.

👉 **See the comprehensive guide: [VIDEO_CONFIGURATION_GUIDE.md](./VIDEO_CONFIGURATION_GUIDE.md)**

## Current Status
✅ Video player is fully implemented with support for:
- Direct video files (.mp4, .webm, .ogg)
- YouTube videos (automatic embed)
- Vimeo videos (automatic embed)
- Modal video player
- Poster images and controls

⚠️ **Videos currently have empty URLs** - You need to add valid video URLs.

## How to Add Your Own Videos

### Option 1: Host Videos on Cloud Storage (Recommended)

1. **Upload to Cloud Storage:**
   - **AWS S3**: Upload to your S3 bucket and make the files public or use signed URLs
   - **Cloudinary**: Upload videos and get the direct URL
   - **Firebase Storage**: Upload and get the download URL
   - **Google Cloud Storage**: Upload to a bucket and get the public URL
   - **Azure Blob Storage**: Upload and get the blob URL

2. **Update the URLs:**
   Open `/components/SocialProof.tsx` and replace the `videoUrl` values (lines ~17, 30, 43):

   ```tsx
   {
     name: "Priya Sharma",
     videoUrl: "https://your-storage-url.com/priya-testimonial.mp4",
     // ... other properties
   }
   ```

### Option 2: Use YouTube or Vimeo Embeds

If you prefer to use YouTube/Vimeo:
1. Upload your videos to YouTube/Vimeo
2. Modify the component to use an iframe instead of HTML5 video element
3. Use their embed URLs

### Option 3: Self-Host Videos

If you want to host videos on your own server:
1. Place video files in your `/public` directory (create it if it doesn't exist)
2. Reference them like: `videoUrl: "/videos/testimonial-1.mp4"`

## Supported Video Formats

The HTML5 video player supports:
- **MP4** (H.264 codec) - Best compatibility ✅ Recommended
- **WebM** (VP8/VP9 codec)
- **OGG** (Theora codec)

### Recommended Video Specifications:
- **Format**: MP4 (H.264)
- **Resolution**: 720p (1280x720) or 1080p (1920x1080)
- **Aspect Ratio**: 16:9 (horizontal) or 9:16 (vertical portrait)
- **Duration**: 30 seconds to 2 minutes
- **File Size**: Under 50MB for faster loading
- **Bitrate**: 2-5 Mbps

## Quick Setup Steps

1. **Record or collect your testimonial videos**
2. **Optimize the videos** (compress if needed using tools like HandBrake)
3. **Upload to your preferred hosting service**
4. **Copy the direct video URLs**
5. **Update the `videoUrl` in `/components/SocialProof.tsx`**
6. **Test to ensure videos load and play correctly**

## Example Video URLs

### AWS S3 Format:
```
https://your-bucket.s3.amazonaws.com/videos/testimonial-1.mp4
```

### Cloudinary Format:
```
https://res.cloudinary.com/your-cloud/video/upload/v123456/testimonial-1.mp4
```

### Firebase Format:
```
https://firebasestorage.googleapis.com/v0/b/your-app.appspot.com/o/videos%2Ftestimonial-1.mp4?alt=media
```

## Current Placeholder Videos

The component currently uses sample videos from Google's sample repository:
- Priya Sharma: ForBiggerBlazes.mp4
- Vikram Malhotra: ForBiggerEscapes.mp4
- Rajesh Patel: ForBiggerFun.mp4

**Replace these with your real testimonial videos!**

## Troubleshooting

### Video not playing?
- Check if the URL is accessible (try opening it in a new browser tab)
- Ensure CORS is enabled on your storage service
- Verify the video format is supported (MP4 recommended)

### Video is too large/slow to load?
- Compress the video using tools like HandBrake or FFmpeg
- Use adaptive bitrate streaming for large videos
- Consider using a CDN for faster delivery

### Need different aspect ratios?
- Edit the video player height in `/components/SocialProof.tsx` (currently `h-64`)
- Adjust `object-cover` to `object-contain` if videos are getting cropped

## Questions?

If you need help with:
- Video compression
- Cloud storage setup
- Custom player features
- Different video sources

Just ask!
