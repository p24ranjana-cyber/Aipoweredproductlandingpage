import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

interface Logo {
  name: string;
  brandColor: string;
}

export function CommunityLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const logos: Logo[] = [
    {
      name: 'WeWork',
      brandColor: '#000000',
    },
    {
      name: 'Awfis',
      brandColor: '#FF6B00',
    },
    {
      name: 'NASSCOM 10K',
      brandColor: '#0066CC',
    },
    {
      name: 'SaaSBOOMi',
      brandColor: '#0066FF',
    },
    {
      name: 'Smartworks',
      brandColor: '#1E40AF',
    }
  ];

  return (
    <section ref={ref} className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading and Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 
            className="text-[#0F1A34] mb-3"
            style={{ 
              fontSize: '24px', 
              fontWeight: 700, 
              letterSpacing: '-0.02em',
              lineHeight: '1.3'
            }}
          >
            Where teams like yours work, collaborate and make decisions.
          </h2>
          
          <p 
            className="text-[#6B7280] mx-auto"
            style={{ 
              fontSize: '15px', 
              fontWeight: 400, 
              maxWidth: '700px',
              lineHeight: '1.6'
            }}
          >
            We build for the environments your team already lives in — coworking floors, ops communities, and startup ecosystems.
          </p>
        </motion.div>

        {/* Divider Line */}
        <motion.div 
          className="h-px bg-[#E5E7EB] mb-14 mx-auto max-w-4xl"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        />

        {/* Brand Names Row */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 py-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ 
                opacity: 0, 
                y: 8
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0
              } : { 
                opacity: 0, 
                y: 8
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.08,
                ease: 'easeOut'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer"
            >
              {/* Brand Name */}
              <motion.span
                className="whitespace-nowrap select-none block"
                style={{ 
                  fontSize: '32px', 
                  fontWeight: 800,
                  letterSpacing: '-0.02em'
                }}
                animate={{
                  y: hoveredIndex === index ? -4 : 0,
                  color: hoveredIndex === index ? logo.brandColor : '#1F2937',
                }}
                transition={{ 
                  duration: 0.25,
                  ease: 'easeOut'
                }}
              >
                {logo.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}