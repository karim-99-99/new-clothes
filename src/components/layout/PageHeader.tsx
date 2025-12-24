import { motion } from "motion/react";

interface PageHeaderProps {
  title: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const PageHeader = ({ title, buttonText, onButtonClick }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 mb-96"
    >
      <div className="flex items-center justify-between mt-96 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
          {title}
        </h1>
        {buttonText && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonClick}
            className="bg-white text-black px-6 py-2.5 rounded-none text-sm uppercase tracking-wider hover:bg-slate-100 transition-all duration-300 font-medium whitespace-nowrap"
          >
            {buttonText}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};


