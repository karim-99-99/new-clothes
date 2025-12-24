import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Categories() {
  const categories = [
    {
      id: "new-arrivals",
      title: "New Arrivals",
      subtitle: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: "best-selling",
      title: "Best Selling",
      subtitle: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: "hoodies",
      title: "Hoodies",
      subtitle: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: "joggers",
      title: "Joggers",
      subtitle: "SHOP NOW",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    }
  ];

  const bannerTexts = [
    "New collection available",
    "Limited time offers",
    "Premium quality"
  ];

  const bannerIcons = ["📷", "👑", "🔔"];

  return (
    <div className="min-h-screen bg-black pt-40 pb-20 mt-8">
      {/* Banner Section */}
      <div className="overflow-hidden bg-black border-b border-white/10">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              {bannerTexts.map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white text-sm md:text-base font-medium">
                  <span>{text}</span>
                  <span className="text-xl">{bannerIcons[idx % bannerIcons.length]}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-4">
            Explore Our Collection
          </p>
          <h2 className="text-4xl md:text-6xl text-white">
            Browse Categories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const getLink = () => {
              if (category.id === "new-arrivals") return "/new-arrivals";
              if (category.id === "best-selling") return "/best-selling";
              if (category.id === "hoodies") return "/hoodies";
              if (category.id === "joggers") return "/joggers";
              return "#";
            };

            return (
              <Link key={category.id} to={getLink()}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden bg-[#f5f5f5] rounded-lg cursor-pointer shadow-lg"
                >
                  {/* Image */}
                  <div className="relative h-[400px] overflow-hidden rounded-t-lg">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content with Title and Button */}
                  <div className="p-6 bg-[#f5f5f5]">
                    <h3 className="text-white text-2xl md:text-3xl px-4 font-bold mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white  py-3 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300 w-full"
                    >
                      {/* {category.subtitle} */}
                    </motion.button>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
