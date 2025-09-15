import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const EvidenceDrawer = ({ evidence, closeDrawer }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        onClick={closeDrawer}
        className="fixed inset-0 bg-black z-40"
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 right-0 h-full w-96 bg-white shadow-xl p-6 z-50 flex flex-col"
      >
        <button
          onClick={closeDrawer}
          className="self-end text-gray-500 hover:text-gray-700 mb-4 font-bold text-lg"
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Evidence</h3>
        <div className="space-y-3 overflow-y-auto flex-1">
          {evidence.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-3 bg-gray-50 rounded-lg shadow cursor-pointer"
            >
              <p className="text-gray-500 text-sm">{item.source}</p>
              <p className="text-gray-700">{item.snippet}</p>
              <p className="text-gray-400 text-xs">Relevance: {(item.relevance * 100).toFixed(0)}%</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EvidenceDrawer;
