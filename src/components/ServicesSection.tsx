import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  ShoppingCart, 
  Palette, 
  Search, 
  TrendingUp,
  Smartphone
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Custom themes, plugins, and enterprise-level WordPress solutions tailored to your brand.",
    features: ["Custom Theme Development", "Plugin Development", "Performance Optimization"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description: "Build powerful e-commerce stores that convert visitors into loyal customers.",
    features: ["Custom Storefronts", "Theme Customization", "App Integration"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Web Design",
    description: "Stunning, user-centric designs that captivate audiences and drive engagement.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Identity"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility and rank higher in search engines with proven strategies.",
    features: ["Technical SEO", "Content Strategy", "Link Building"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that grow your business and maximize ROI.",
    features: ["PPC Campaigns", "Social Media", "Analytics"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    description: "Pixel-perfect websites that look and work beautifully on every device.",
    features: ["Mobile-First Design", "Cross-Browser", "Performance"],
    gradient: "from-pink-500 to-rose-500",
  },
];

const ServiceCard = ({ service, index, isInView }: { service: typeof services[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card-hover p-8 h-full">
        {/* Gradient glow on hover */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-7 h-7 text-background" />
        </div>

        <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subheading">
            Comprehensive digital solutions to help your business thrive in the modern web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
