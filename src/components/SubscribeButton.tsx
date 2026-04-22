import { motion } from "framer-motion";

export function SubscribeButton({ size = "default" }: { size?: "default" | "lg" }) {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={scrollToPrice}
      className={`bg-gradient-primary text-primary-foreground font-bold rounded-full shadow-glow hover:shadow-elegant transition-all ${
        size === "lg" ? "px-12 py-5 text-xl" : "px-8 py-3 text-base"
      }`}
    >
      اشتراك الآن
    </motion.button>
  );
}
