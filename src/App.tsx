import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import WorkoutPlayerWrapper from './components/WorkoutPlayerWrapper';
import Home from './components/Home';
import CalorieTracker from './components/CalorieTracker';
import Shop from './components/Shop';
import FitnessTrainer from './components/FitnessTrainer';
import TrainerSelection from './components/TrainerSelection';
import MuscleExercises from './components/MuscleExercises';
import WaterTracker from './components/WaterTracker';
import HabitTracker from './components/HabitTracker';
import Meditation from './components/Meditation';
import PeriodTracker from './components/PeriodTracker';
import Login from './components/Login';
import Signup from './components/Signup';
import PostureCheck from './components/PostureCheck';
import Profile from './components/profile';
import UserProfile from './components/UserProfile';
import NeedTrainer from './components/NeedTrainer';
// import BeTrainerForm from './components/BeTrainerForm';
import WorkoutSplitGenerator from './components/WorkoutSplitGenerator';
import WorkoutResultPage from './components/WorkoutResultPage';
import StrengthTrain from "./components/StrengthTrain";
import Cardio from "./components/Cardio";
import Flexibility from "./components/Flexibility";

// ✅ New pages
// import StrengthTrain from "./components/StrengthTrain";
// import Cardio from "./components/Cardio";
// import Flexibility from "./components/Flexibility";

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Existing routes */}
        <Route path="/workout/:goal" element={<WorkoutPlayerWrapper />} />
        <Route path="/posture-check" element={<PostureCheck />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/fitness-trainer" element={<FitnessTrainer />} />
        <Route path="/trainer-selection" element={<TrainerSelection />} />
        <Route path="/muscle-exercises/:muscle" element={<MuscleExercises />} />
        <Route path="/calories-tracker" element={<CalorieTracker />} />
        <Route path="/water-tracker" element={<WaterTracker />} />
        <Route path="/habit-tracker" element={<HabitTracker />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/period-tracker" element={<PeriodTracker />} />

        {/* ✅ New workout pages */}
        {/* <Route path="/strength" element={<StrengthTrain />} />
        <Route path="/cardio" element={<Cardio />} />
        <Route path="/flexibility" element={<Flexibility />} /> */}

        {/* Other existing routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fitness-trainer/male" element={<NeedTrainer />} />
        {/* <Route path="/fitness-trainer/client" element={<BeTrainerForm />} /> */}
        <Route path="/workout-tracker" element={<WorkoutSplitGenerator />} />
        <Route path="/workout-plan" element={<WorkoutResultPage />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/strength" element={<StrengthTrain />} />
      <Route path="/cardio" element={<Cardio />} />
      <Route path="/flexibility" element={<Flexibility />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
