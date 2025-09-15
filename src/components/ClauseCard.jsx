import React from "react";
import { motion } from "framer-motion";

const ClauseCard = ({ clause }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-5 shadow-md cursor-pointer hover:shadow-xl"
    >
      <h4 className="text-lg font-semibold text-indigo-600 mb-2">{clause.title}</h4>
      <p className="text-gray-700 mb-2">{clause.summary}</p>
      <p className="text-gray-400 text-sm">Confidence: {(clause.confidence * 100).toFixed(0)}%</p>
    </motion.div>
  );
};

export default ClauseCard;
