import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../index.css';
import {
  Dumbbell,
  Droplet,
  CheckSquare,
  Brain,
  Apple,
  ShoppingBag,
  Camera,
  Crop as Drop,
} from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const features = [
    { icon: <Dumbbell className="w-8 h-8" />, title: 'Need a Fitness Trainer', path: '/fitness-trainer' },
    { icon: <Droplet className="w-8 h-8" />, title: 'Water Tracker', path: '/water-tracker' },
    { icon: <CheckSquare className="w-8 h-8" />, title: 'Habit Tracker', path: '/habit-tracker' },
    { icon: <Brain className="w-8 h-8" />, title: 'Meditation', path: '/meditation' },
    { icon: <Apple className="w-8 h-8" />, title: 'Calories/Protein Tracker', path: '/calories-tracker' },
    { icon: <ShoppingBag className="w-8 h-8" />, title: 'Shop', path: '/shop' },
    { icon: <Camera className="w-8 h-8" />, title: 'Period Tracker', path: '/period-tracker' },
    { icon: <Drop className="w-8 h-8" />, title: 'Workout Split Tracker', path: '/workout-tracker' },
  ];

  //  Added navigation paths for workout cards
  const workoutImages = [
    {
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Strength Training",
      path: "/strength"
    },
    {
      url: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Cardio",
      path: "/cardio"
    },
    {
      url:"https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?w=600&auto=format&fit=crop&q=60",
      title: "Flexibility",
      path: "/flexibility"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white pt-16">

      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fitness"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-6"
              >
                Transform Your Life
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-semibold mb-8"
              >
                Your Journey to Better Health Starts Here
              </motion.h2>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Explore more
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features to explore</h2>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(feature.path)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 transition-transform duration-200"
            >
              <div className="flex flex-col items-center text-teal-600">
                {feature.icon}
                <h3 className="mt-4 text-center font-medium">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workout Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transform Your Body</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {workoutImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                onClick={() => navigate(image.path)}  // ✅ navigation added
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.img 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="About Us"
            className="rounded-2xl shadow-lg"
          />
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-teal-700">About Us</h2>
            <p className="text-gray-600 mb-4 text-lg">
              We are passionate about transforming lives through fitness and wellness. 
              Our mission is to provide tools, guidance, and motivation for a healthier lifestyle.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">✅ Personalized workout & diet plans</li>
              <li className="flex items-center gap-2">✅ Progress tracking & habit building</li>
              <li className="flex items-center gap-2">✅ Supportive community & expert trainers</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-700">Contact Us</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-600">support@fitlife.com</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-600">+91 98765 XXXXX</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">📍 Location</h3>
              <p className="text-gray-600">New Delhi, India</p>
            </motion.div>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
            ></textarea>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

export default Home;
