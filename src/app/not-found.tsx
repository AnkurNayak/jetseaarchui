"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gray-800 text-blue-400"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-9xl font-bold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Page Not Found
      </motion.p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 text-lg font-semibold text-gray-800 bg-blue-400 rounded hover:bg-blue-300 transition-all"
      >
        Go Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
