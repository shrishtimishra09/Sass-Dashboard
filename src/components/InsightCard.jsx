import React from "react";
import { motion } from "framer-motion";

const InsightCard = ({ insight }) => {
  const riskColor = {
    High: "text-red-600",
    Medium: "text-yellow-600",
    Low: "text-green-600",
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-gray-50 rounded-xl p-4 shadow hover:shadow-lg cursor-pointer"
    >
      <p className={`font-semibold ${riskColor[insight.risk]}`}>{insight.risk} Risk</p>
      <p className="text-gray-700">{insight.message}</p>
    </motion.div>
  );
};

export default InsightCard;
