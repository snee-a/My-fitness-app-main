import { motion } from "framer-motion";

export default function Cardio() {
  const exercises = [
    {
      name: "Running",
      image: "https://images.pexels.com/photos/1199590/pexels-photo-1199590.jpeg",
      desc: "Boosts endurance and burns calories fast.",
    },
    {
      name: "Cycling",
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
      desc: "Improves leg strength and cardiovascular health.",
    },
    {
      name: "Jump Rope",
      image: "https://images.pexels.com/photos/5874490/pexels-photo-5874490.jpeg",
      desc: "Fun way to improve stamina and coordination.",
    },
  ];

  return (
    <div className="pt-24 px-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Cardio Training
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8">
        {exercises.map((ex, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
            initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <img src={ex.image} alt={ex.name} className="h-56 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{ex.name}</h2>
              <p className="text-gray-600 mt-2">{ex.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
