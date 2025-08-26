import React, { useState, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

const BeTrainerForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [clients, setClients] = useState('');
  const [clientImages, setClientImages] = useState<File[]>([]);
  const [clientPreviews, setClientPreviews] = useState<string[]>([]);

  const handleProfilePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePhoto(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleClientImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setClientImages(files);
      setClientPreviews(files.map((file) => URL.createObjectURL(file)));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Trainer profile submitted!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-50 to-white p-6">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-4">Become a Fitness Trainer</h2>

        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <label className="mb-2 font-medium text-gray-700">Profile Photo</label>
          <input type="file" accept="image/*" onChange={handleProfilePhotoChange} className="mb-3" />
          {profilePreview ? (
            <img
              src={profilePreview}
              alt="Profile Preview"
              className="w-28 h-28 object-cover rounded-full border-2 border-teal-500 shadow"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border-2 border-gray-300">
              Preview
            </div>
          )}
        </div>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

        {/* Qualification */}
        <input
          type="text"
          placeholder="Fitness Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

        {/* Previous Clients Description */}
        <textarea
          placeholder="Previous Clients / Transformations"
          value={clients}
          onChange={(e) => setClients(e.target.value)}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-300"
          rows={3}
        />

        {/* Client Images */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Upload Client Images</label>
          <input type="file" accept="image/*" multiple onChange={handleClientImagesChange} className="mb-3" />
          {clientPreviews.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {clientPreviews.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Client ${index}`}
                  className="w-20 h-20 object-cover rounded-xl border-2 border-teal-300"
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition"
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
};

export default BeTrainerForm;
