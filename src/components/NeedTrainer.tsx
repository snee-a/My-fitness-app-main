import React, { useEffect, useState } from "react";

interface Trainer {
  name: string;
  email: string;
  qualification: string;
  profilePreview?: string; // agar photo ho
}

const TrainerListPage: React.FC = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("trainers") || "[]");
    setTrainers(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white p-8">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">
        Available Fitness Trainers
      </h1>

      {trainers.length === 0 ? (
        <p className="text-center text-gray-500">
          No trainers registered yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
            >
              {trainer.profilePreview ? (
                <img
                  src={trainer.profilePreview}
                  alt={trainer.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-teal-500"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-100 mb-4 flex items-center justify-center text-gray-400 border-2 border-gray-300">
                  No Photo
                </div>
              )}
              <h2 className="text-xl font-semibold mb-1">{trainer.name}</h2>
              <p className="text-gray-600 mb-1">{trainer.email}</p>
              <p className="text-gray-500 text-sm">{trainer.qualification}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainerListPage;
