import { motion } from "motion/react";

interface ProductHoverTooltipProps {
  productName: string;
  description: string;
}

export const ProductHoverTooltip = ({ productName, description }: ProductHoverTooltipProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4 rounded-lg shadow-2xl pointer-events-none w-56 border border-white/10"
    >
      <h4 className="text-white font-bold text-lg mb-2">
        {productName}
      </h4>
      <p className="text-gray-300 text-xs leading-relaxed line-clamp-3">{description}</p>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
    </motion.div>
  );
};


