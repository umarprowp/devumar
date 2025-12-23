import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Target, Zap } from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "Started Web Development",
    description: "Began my journey into the world of web development and design.",
    icon: Code2,
  },
  {
    year: "2020",
    title: "Specialized in E-commerce",
    description: "Mastered Shopify and WordPress for building powerful online stores.",
    icon: Rocket,
  },
  {
    year: "2022",
    title: "SEO & Digital Marketing",
    description: "Expanded expertise to include comprehensive digital marketing strategies.",
    icon: Target,
  },
  {
    year: "2024",
    title: "Full-Stack Solutions",
    description: "Delivering end-to-end web solutions for businesses worldwide.",
    icon: Zap,
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subheading">
            A passionate developer on a mission to create impactful digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl font-bold mb-4 neon-text">
                Hello, I'm Alex
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a full-stack web developer with over 6 years of experience creating 
                stunning, high-performance websites and digital experiences. My expertise 
                spans across WordPress, Shopify, and modern web technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of clean code, thoughtful design, and strategic 
                thinking. Every project is an opportunity to push boundaries and deliver 
                exceptional results that drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "50+", label: "Projects" },
                { value: "6+", label: "Years Exp." },
                { value: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="relative pl-20"
                >
                  {/* Icon */}
                  <div className="absolute left-0 w-16 h-16 glass-card-hover flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="glass-card p-6 hover:border-primary/30 transition-colors">
                    <span className="text-sm font-display text-primary">{item.year}</span>
                    <h4 className="font-display text-lg font-semibold mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
