import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

export function InsightSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isStripHovered, setIsStripHovered] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null as number | null);
  
  // Count-up animation state
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Count-up effect
  useEffect(() => {
    if (isInView) {
      // Animate 60%
      let start1 = 0;
      const end1 = 60;
      const duration1 = 1500;
      const increment1 = end1 / (duration1 / 16);
      
      const timer1 = setInterval(() => {
        start1 += increment1;
        if (start1 >= end1) {
          setCount1(end1);
          clearInterval(timer1);
        } else {
          setCount1(Math.floor(start1));
        }
      }, 16);

      // Animate 20-30%
      setTimeout(() => {
        let start2 = 0;
        const end2 = 25; // midpoint for display
        const duration2 = 1500;
        const increment2 = end2 / (duration2 / 16);
        
        const timer2 = setInterval(() => {
          start2 += increment2;
          if (start2 >= end2) {
            setCount2(end2);
            clearInterval(timer2);
          } else {
            setCount2(Math.floor(start2));
          }
        }, 16);
      }, 200);

      // Animate 100%
      setTimeout(() => {
        let start3 = 0;
        const end3 = 100;
        const duration3 = 1800;
        const increment3 = end3 / (duration3 / 16);
        
        const timer3 = setInterval(() => {
          start3 += increment3;
          if (start3 >= end3) {
            setCount3(end3);
            clearInterval(timer3);
          } else {
            setCount3(Math.floor(start3));
          }
        }, 16);
      }, 400);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* Full-width blue gradient strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full py-12 px-6"
        style={{
          background: isStripHovered 
            ? 'linear-gradient(135deg, #0A3FFF 0%, #2A63FF 50%, #0A3FFF 100%)'
            : 'linear-gradient(135deg, #0A3FFF 0%, #2A63FF 100%)',
          transition: 'background 0.3s ease-out'
        }}
        onMouseEnter={() => setIsStripHovered(true)}
        onMouseLeave={() => setIsStripHovered(false)}
      >
        {/* Gradient shimmer overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          }}
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 2
          }}
        />

        {/* Radiance effect */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left side: Main insight text */}
            <div className="flex-1 space-y-4">
              {/* Insight pill with animated icon */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <TrendingUp className="h-5 w-5 text-white drop-shadow-lg" />
                </motion.div>
                <span className="text-sm tracking-wide">Market Insight</span>
              </div>

              {/* Main headline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-2"
              >
                <p className="text-2xl lg:text-3xl text-white leading-relaxed max-w-3xl">
                  <motion.span 
                    className="inline-block"
                    style={{
                      textShadow: '0 0 20px rgba(174, 221, 255, 0.6)',
                      color: '#AEDDFF'
                    }}
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(174, 221, 255, 0.6)',
                        '0 0 30px rgba(174, 221, 255, 0.8)',
                        '0 0 20px rgba(174, 221, 255, 0.6)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {count1}%
                  </motion.span>
                  {' '}of mid-sized Indian companies choose offices based on{' '}
                  <span className="relative inline-block group">
                    <motion.span 
                      className="text-white"
                      whileHover={{ rotate: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      availability
                    </motion.span>
                    <motion.span 
                      className="absolute bottom-0 left-0 h-0.5 bg-[#AEDDFF]"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  , not{' '}
                  <span className="relative inline-block group">
                    <motion.span 
                      className="text-white"
                      whileHover={{ rotate: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      suitability
                    </motion.span>
                    <motion.span 
                      className="absolute bottom-0 left-0 h-0.5 bg-[#AEDDFF]"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                  {' '}— because they see only{' '}
                  <motion.span 
                    className="inline-block"
                    style={{
                      textShadow: '0 0 20px rgba(174, 221, 255, 0.6)',
                      color: '#AEDDFF'
                    }}
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(174, 221, 255, 0.6)',
                        '0 0 30px rgba(174, 221, 255, 0.8)',
                        '0 0 20px rgba(174, 221, 255, 0.6)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    20–30%
                  </motion.span>
                  {' '}of the real market.
                </p>

                {/* Glassy info box */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="inline-block mt-4 backdrop-blur-md bg-white/10 rounded-xl px-5 py-3 border border-white/20"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    scale: 1.02
                  }}
                >
                  <p className="text-sm text-white/90">
                    PropEdge gives you access to{' '}
                    <span 
                      className="text-[#AEDDFF]"
                      style={{ textShadow: '0 0 10px rgba(174, 221, 255, 0.5)' }}
                    >
                      100% of market inventory
                    </span>
                    {' '}using AI-powered matching.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side: Stats as floating white pill cards */}
            <motion.div 
              className="flex flex-row lg:flex-col gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Stat 1: 60% */}
              <motion.div
                className="bg-white rounded-full px-6 py-4 min-w-[140px] flex flex-col items-center justify-center shadow-lg cursor-pointer"
                onMouseEnter={() => setHoveredStat(1)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(174, 221, 255, 0.8), 0 8px 20px rgba(0, 0, 0, 0.15)'
                }}
                animate={{
                  y: hoveredStat === 1 ? -3 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-3xl text-[#0A3FFF]"
                  animate={{
                    scale: hoveredStat === 1 ? 1.1 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {count1}%
                </motion.div>
                <p className="text-xs text-gray-600 mt-1 text-center">Choose by availability</p>
              </motion.div>

              {/* Stat 2: 20-30% */}
              <motion.div
                className="bg-white rounded-full px-6 py-4 min-w-[140px] flex flex-col items-center justify-center shadow-lg cursor-pointer"
                onMouseEnter={() => setHoveredStat(2)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(174, 221, 255, 0.8), 0 8px 20px rgba(0, 0, 0, 0.15)'
                }}
                animate={{
                  y: hoveredStat === 2 ? -3 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-3xl text-[#0A3FFF]"
                  animate={{
                    scale: hoveredStat === 2 ? 1.1 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  20–30%
                </motion.div>
                <p className="text-xs text-gray-600 mt-1 text-center">Traditional visibility</p>
              </motion.div>

              {/* Stat 3: 100% */}
              <motion.div
                className="bg-white rounded-full px-6 py-4 min-w-[140px] flex flex-col items-center justify-center shadow-lg cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveredStat(3)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 35px rgba(174, 221, 255, 1), 0 8px 20px rgba(0, 0, 0, 0.15)'
                }}
                animate={{
                  y: hoveredStat === 3 ? -3 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Subtle pulse animation on this card */}
                {hoveredStat === 3 && (
                  <motion.div
                    className="absolute inset-0 bg-blue-100 rounded-full"
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
                <motion.div 
                  className="text-3xl relative z-10"
                  style={{
                    color: '#0A3FFF',
                    textShadow: hoveredStat === 3 ? '0 0 15px rgba(10, 63, 255, 0.5)' : 'none'
                  }}
                  animate={{
                    scale: hoveredStat === 3 ? 1.15 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {count3}%
                </motion.div>
                <p className="text-xs text-gray-600 mt-1 text-center relative z-10">PropEdge visibility</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}