import { motion } from "framer-motion";

export default function Flexibility() {
  const exercises = [
    {
      name: "Yoga",
      image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
      desc: "Enhances flexibility, strength, and balance.",
    },
    {
      name: "Stretching",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
      desc: "Prevents injury and reduces muscle soreness.",
    },
    {
      name: "Pilates",
      image: "https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg",
      desc: "Improves posture and strengthens core muscles.",
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
        Flexibility Training
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
