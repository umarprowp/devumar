import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Code, 
  ShoppingCart, 
  Palette, 
  Search, 
  TrendingUp,
  Globe
} from "lucide-react";

const skills = [
  {
    name: "WordPress Development",
    level: 95,
    icon: Globe,
    description: "Custom themes, plugins, and full CMS solutions",
  },
  {
    name: "Shopify Development",
    level: 90,
    icon: ShoppingCart,
    description: "E-commerce stores, custom themes, and apps",
  },
  {
    name: "Web Design",
    level: 88,
    icon: Palette,
    description: "UI/UX design, responsive layouts, and prototyping",
  },
  {
    name: "SEO Optimization",
    level: 85,
    icon: Search,
    description: "Technical SEO, content strategy, and analytics",
  },
  {
    name: "Digital Marketing",
    level: 82,
    icon: TrendingUp,
    description: "PPC, social media, and conversion optimization",
  },
  {
    name: "Frontend Development",
    level: 92,
    icon: Code,
    description: "React, TypeScript, and modern frameworks",
  },
];

const SkillBar = ({ skill, index, isInView }: { skill: typeof skills[0]; index: number; isInView: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, index * 150);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover p-6 group"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
          <skill.icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-display font-semibold">{skill.name}</h3>
            <span className="text-sm font-display text-primary">{skill.level}%</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
          <div className="progress-bar">
            <motion.div
              className="progress-bar-fill"
              style={{ width: `${width}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subheading">
            Expertise built through years of hands-on experience and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Tech stack icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["MongoDB", "Express JS", "React", "Node JS"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                className="px-4 py-2 glass-card text-sm font-medium hover:border-primary/50 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
