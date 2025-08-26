import { motion } from "framer-motion";

export default function Strength() {
  const exercises = [
    {
      name: "Push Ups",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      desc: "Builds chest, shoulders, and triceps strength.",
    },
    {
      name: "Deadlift",
      image: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg",
      desc: "Strengthens back, glutes, and hamstrings.",
    },
    {
      name: "Squats",
      image: "https://images.pexels.com/photos/2261487/pexels-photo-2261487.jpeg",
      desc: "Improves lower body power and stability.",
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
        Strength Training
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
