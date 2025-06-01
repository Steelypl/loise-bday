import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaMusic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BirthdayPage() {
  const navigate = useNavigate();
  const [showLetter, setShowLetter] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  //   useEffect(() => {
  //     const music = new Audio("/music.mp3"); // Place her favorite song in public folder
  //     music.loop = true;
  //     music.volume = 0.5;
  //     music.play();
  //     return () => music.pause();
  //   }, []);

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 flex flex-col items-center justify-center gap-5 p-6 relative overflow-hidden">
      {/* Floating Hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400"
          initial={{ y: "100vh", x: `${Math.random() * 100}%`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <FaHeart size={16 + Math.random() * 20} />
        </motion.div>
      ))}

      <motion.h1
        className="text-5xl font-bold text-pink-700 text-center drop-shadow-sm"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Happy Birthday, Loise!! 🎉
      </motion.h1>

      <motion.p
        className="text-center text-gray-700 mt-4 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Today is all about you — your smile, your laugh, your beautiful heart.
      </motion.p>

      <motion.button
        onClick={() => setShowLetter(!showLetter)}
        className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg"
        whileTap={{ scale: 0.95 }}
      >
        {showLetter ? "Hide 💌" : "Show 💌"}
      </motion.button>

      {showLetter && (
        <motion.div
          className="bg-white p-6 mt-6 rounded-2xl shadow-xl max-w-xl text-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-semibold mb-2">To My Dearest Loise 💜</h2>
          <p>
            On this special day, I just want to say how lucky I am to have you
            in my life. Your kindness, laughter, and your beautiful soul make
            every day brighter. I hope this little website reminds you of how
            loved and cherished you are. Happy birthday, my love.
          </p>
          <p className="mt-4 italic">Forever yours dear 💜</p>
        </motion.div>
      )}

      <motion.button
        onClick={() => navigate("/surprise")}
        className="mt-4 text-sm text-pink-700"
        whileHover={{ scale: 1.1 }}
      >
        🎁
      </motion.button>
    </div>
  );
}
