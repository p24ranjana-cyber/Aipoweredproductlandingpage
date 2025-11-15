import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, AlertCircle, FileText, Phone } from 'lucide-react';

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-gray-900">
            Tired of waiting months to close a simple lease?
          </h2>
          <p className="text-xl text-gray-600">
            We built this because we felt your pain. Here's the reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                It started when we spoke to Arjun, who leads workplace expansion at a mid-sized tech company in Bengaluru. He told us: 
                <span className="italic"> "Every time we needed a new office, the search felt endless. So many PDFs, so many versions, and nobody had the full picture."</span>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The advisory team helping him was doing their best, but the process itself was slow. Shortlisting took weeks. 
                Numbers changed between calls. ESG and compliance were always afterthoughts. By the time negotiations wrapped up, 
                the team had already outgrown the space.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The problem wasn't the people. It was the <span className="font-semibold text-gray-900">workflow</span>—scattered, 
                manual, and impossible to move quickly.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                That's why we built PropEdge — a platform that brings speed, transparency, and automation 
                to every step of your commercial real estate journey.
              </p>
            </div>

            {/* Pain points */}
            <div className="grid gap-4 mt-8">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                <Clock className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Average lease cycle: 6-8 months</p>
                  <p className="text-sm text-gray-600">Coordinating between parties, endless back-and-forth</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                <FileText className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Manual document processing</p>
                  <p className="text-sm text-gray-600">50+ documents, countless revisions, zero automation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                <Phone className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Fragmented communication</p>
                  <p className="text-sm text-gray-600">WhatsApp, email, calls—information lost in translation</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                <AlertCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Zero visibility</p>
                  <p className="text-sm text-gray-600">No one knows where deals stand or what's blocking them</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1566699270403-3f7e3f340664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXN5JTIwY2hhb3RpYyUyMG9mZmljZSUyMHdvcmtzcGFjZSUyMHN0cmVzc3xlbnwxfHx8fDE3NjMxMzI5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="The frustration of traditional CRE processes"
                className="w-full h-[600px] object-cover rounded-3xl"
              />
              
              {/* Overlay with before scenario */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-2xl mb-2">The old way: Chaos and delays</p>
                  <p className="text-gray-300">Months lost to manual processes and miscommunication</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}