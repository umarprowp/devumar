import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 12, 18, 0)", "rgba(10, 12, 18, 0.95)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/0"
    >
      <nav className="container px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-display text-xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          ALEX.DEV
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-muted-foreground hover:text-foreground transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="glow-button !px-6 !py-2.5 text-sm"
          >
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
      >
        <div className="container px-6 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
            transition={{ delay: navLinks.length * 0.1 }}
            onClick={() => setIsOpen(false)}
            className="glow-button inline-block !px-6 !py-2.5 text-sm mt-4"
          >
            <span>Hire Me</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
