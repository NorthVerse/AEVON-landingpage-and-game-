import { motion } from 'framer-motion';
import { Marquee } from '@/components/ui/marquee';

const teamMembers = [
  {
    image: "/samuel-geoffrey.jpeg",
    name: "Samuel Geoffrey",
    role: "CEO - Co-Founder",
  },
  // Additional team members will be added later
];

export default function Team() {
  return (
    <section className="relative w-full overflow-hidden bg-aevon-charcoal py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-aevon-teal/5 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-aevon-coral/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-aevon-coral text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 21H2v-2a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v2Z" />
              <circle cx="9" cy="7" r="4" />
              <circle cx="19" cy="8" r="3" />
            </svg>
          </div>

          <h2 className="relative mb-4 font-bold text-4xl sm:text-5xl text-aevon-white leading-tight">
            Meet the Aevon Team
            <svg
              className="absolute -top-3 -right-8 w-20 text-aevon-coral/20"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h2>

          <p className="max-w-2xl text-aevon-cream/80 text-lg">
            Visionary leaders and creators crafting the future of heritage through immersive experiences.
          </p>
        </motion.div>

        {/* Team Marquee */}
        <div className="relative w-full py-8">
          {/* Fade overlays */}
          <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-32 bg-gradient-to-r from-aevon-charcoal to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-32 bg-gradient-to-l from-aevon-charcoal to-transparent" />

          <Marquee className="[--gap:2rem] [--duration:60s]" pauseOnHover>
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group flex w-72 shrink-0 flex-col"
              >
                {/* Team Member Card */}
                <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-aevon-navy/40 border border-aevon-teal/20 group-hover:border-aevon-teal/50 transition-colors duration-300">
                  {/* Image */}
                  <img
                    alt={member.name}
                    src={member.image}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-aevon-navy via-aevon-navy/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_30px_rgba(20,184,166,0.2)]" />

                  {/* Member Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-bold text-xl text-aevon-cream mb-1">
                      {member.name}
                    </h3>
                    <p className="text-aevon-coral text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-20 max-w-3xl px-6 text-center"
        >
          <div className="relative rounded-2xl border border-aevon-teal/20 bg-aevon-navy/30 p-8 backdrop-blur-sm">
            <p className="mb-8 font-medium text-lg text-aevon-cream leading-relaxed md:text-xl">
              "Aevon represents the intersection of heritage and innovation. We're committed to creating immersive experiences that preserve and celebrate cultural narratives."
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-aevon-teal/30">
                <img
                  alt="Samuel Geoffrey"
                  className="h-full w-full object-cover"
                  src="/samuel-geoffrey.jpeg"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-aevon-white">
                  Samuel Geoffrey
                </p>
                <p className="text-aevon-coral text-sm font-medium">
                  CEO & Co-Founder · Aevon Labs
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
