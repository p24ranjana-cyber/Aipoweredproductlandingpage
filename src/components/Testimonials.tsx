import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Star, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';

const testimonials = [
  {
    name: "Neha Rao",
    role: "Operations Lead",
    company: "Ops Lead @ TechVenture",
    videoUrl: "https://p24akshitha-collab.github.io/video1/",
    shortQuote: "We usually spend 6–8 weeks collecting options and cleaning Excel sheets. PropEdge gave us a structured shortlist in under 24 hours, and we…",
    fullTranscript: `We usually spend 6–8 weeks collecting options and cleaning Excel sheets. PropEdge gave us a structured shortlist in under 24 hours, and we closed our lease in 3.5 weeks instead of 3 months.

What made the biggest difference for us was how organised everything suddenly became. Earlier, we would receive different formats — PDFs, forwarded WhatsApp images, Excel files with missing fields — and my team spent more time standardising data than evaluating spaces. It always felt like we were running behind the process instead of driving it.

With PropEdge, every option came clean, comparable, and ready for alignment. Commute scoring, cost projections, ESG indicators — everything was already laid out. It saved us multiple internal meetings and weeks of manual effort. For the first time, the leasing process felt fast, structured, and actually manageable.`
  },
  {
    name: "Sandeep Verma",
    role: "Finance Controller",
    company: "Finance Controller @ Horizon Labs",
    videoUrl: "https://p24akshitha-collab.github.io/video2/",
    shortQuote: "The biggest win was transparency. PropEdge showed 5-year cost impact and compliance gaps upfront—something we never had visibility into…",
    fullTranscript: `The biggest win was transparency. PropEdge showed 5-year cost impact and compliance gaps upfront—something we never had visibility into before.

Most of the time, financial risk shows up late in the process — when documents come in or once the negotiation has already started. Hidden charges, reinstatement clauses, compliance gaps, CAM assumptions… we usually discover these after building our own models manually.

PropEdge removed that uncertainty. Every building came with a clear 5-year projection, broken down in a way we could immediately validate. Compliance risks were visible from day one, which helped us avoid options that looked attractive upfront but carried long-term cost or regulatory issues.

It made our approval process much smoother because leadership finally had full visibility, not assumptions.`
  },
  {
    name: "Riya Mehta",
    role: "People Operations",
    company: "Head of People Ops @ BlueStack Digital",
    videoUrl: "https://p24akshitha-collab.github.io/Video/",
    shortQuote: "PropEdge's commute scoring and neighbourhood insights made it easy to justify the move internally. Everyone aligned much…",
    fullTranscript: `PropEdge's commute scoring and neighbourhood insights made it easy to justify the move internally. Everyone aligned much faster.

HR often becomes the voice of the employee during an office move — but without data, our concerns are easy to dismiss. Commute pain, unsafe neighbourhoods, or lack of amenities only show up once people start working there.

PropEdge finally gave us a way to quantify these issues. Every option had commute scores, public transport indicators, and neighbourhood insights. For the first time, we could clearly show leadership how each option would actually affect employees' daily lives.

The decision-making became faster and far more empathetic. Instead of debating opinions, we were discussing evidence.`
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openTranscriptIndex, setOpenTranscriptIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingWithSound, setPlayingWithSound] = useState<number[]>([]);

  // Check if URL is a YouTube embed URL
  const isYouTubeEmbed = (url: string) => {
    return url.includes('youtube.com/embed');
  };

  // Check if URL is a GitHub Pages URL (webpage, not direct video)
  const isGitHubPagesEmbed = (url: string) => {
    return url.includes('github.io');
  };

  const handleVideoHoverStart = (index: number) => {
    if (playingWithSound.includes(index)) return;
    const video = videoRefs.current[index];
    if (video) {
      video.muted = true;
      video.currentTime = 0;
      video.play();
    }
  };

  const handleVideoHoverEnd = (index: number) => {
    if (playingWithSound.includes(index)) return;
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleVideoClick = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused || video.muted) {
        video.muted = false;
        video.currentTime = 0;
        video.play();
        setPlayingWithSound([...playingWithSound, index]);
      } else {
        video.pause();
        setPlayingWithSound(playingWithSound.filter(i => i !== index));
      }
    }
  };

  const handleToggleMute = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      if (!video.muted && !playingWithSound.includes(index)) {
        setPlayingWithSound([...playingWithSound, index]);
      } else if (video.muted && playingWithSound.includes(index)) {
        setPlayingWithSound(playingWithSound.filter(i => i !== index));
      }
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">
            You're not alone — others wanted this too
          </h2>
          <p className="text-xl text-gray-600">
            Watch real stories from teams who transformed their leasing workflow with PropEdge.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-200"
            >
              {/* Video Player - 16:9 aspect ratio */}
              <div 
                className="relative w-full bg-black overflow-hidden cursor-pointer group" 
                style={{ aspectRatio: '16/9' }}
                onMouseEnter={() => !isYouTubeEmbed(testimonial.videoUrl) && !isGitHubPagesEmbed(testimonial.videoUrl) && handleVideoHoverStart(index)}
                onMouseLeave={() => !isYouTubeEmbed(testimonial.videoUrl) && !isGitHubPagesEmbed(testimonial.videoUrl) && handleVideoHoverEnd(index)}
                onClick={() => !isYouTubeEmbed(testimonial.videoUrl) && !isGitHubPagesEmbed(testimonial.videoUrl) && handleVideoClick(index)}
              >
                {isGitHubPagesEmbed(testimonial.videoUrl) ? (
                  // GitHub Pages iframe embed - fills entire container
                  <iframe
                    src={testimonial.videoUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; encrypted-media"
                    title={`${testimonial.name} testimonial`}
                    style={{ 
                      objectFit: 'cover',
                      overflow: 'hidden'
                    }}
                  />
                ) : isYouTubeEmbed(testimonial.videoUrl) ? (
                  // YouTube iframe embed
                  <iframe
                    src={testimonial.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${testimonial.name} testimonial`}
                  />
                ) : (
                  // Regular video element
                  <>
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={testimonial.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      playsInline
                      preload="metadata"
                      controls={playingWithSound.includes(index)}
                    />
                        
                    {/* Audio Control Indicator */}
                    {!playingWithSound.includes(index) && (
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <VolumeX className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Role Label */}
                <p className="text-sm text-gray-500 mb-4">
                  {testimonial.role}
                </p>

                {/* Short Quote */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.shortQuote}"
                </p>

                {/* View Full Transcript Button */}
                <button
                  onClick={() => setOpenTranscriptIndex(index)}
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mb-6 transition-colors group"
                >
                  View full transcript
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-4 mt-auto"></div>

                {/* Name & Company */}
                <div>
                  <p className="text-gray-900 mb-1">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transcript Modal */}
        <Dialog open={openTranscriptIndex !== null} onOpenChange={(open) => !open && setOpenTranscriptIndex(null)}>
          <DialogContent className="bg-white max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogTitle className="text-gray-900">Full Transcript</DialogTitle>
            <DialogDescription className="sr-only">
              Complete transcript of the testimonial
            </DialogDescription>
            {openTranscriptIndex !== null && (
              <div className="mt-4">
                <p className="mb-4">
                  <span className="text-gray-900">{testimonials[openTranscriptIndex].name}</span>
                  <span className="text-gray-500 text-sm"> — {testimonials[openTranscriptIndex].company}</span>
                </p>
                <div className="space-y-4">
                  {testimonials[openTranscriptIndex].fullTranscript.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}