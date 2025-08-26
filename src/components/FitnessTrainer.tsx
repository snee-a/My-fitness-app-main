import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function FitnessTrainer() {
  const navigate = useNavigate();

  const handleOptionSelect = (option: 'client' | 'trainer') => {
    if (option === 'client') {
      navigate('/fitness-trainer/male'); // or female selection page
    } else {
      navigate('/fitness-trainer/client'); // new page
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full"
      >
        <h1 className="text-3xl font-bold mb-6 text-teal-700">Fitness Trainer Options</h1>
        <div className="flex flex-col gap-6">
          <button
            onClick={() => handleOptionSelect('client')}
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
          >
            Need an Online Fitness Trainer
          </button>
          <button
            onClick={() => handleOptionSelect('trainer')}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
          >
            Be a Fitness Trainer
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default FitnessTrainer;
