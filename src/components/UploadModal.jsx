import React, { useState } from "react";
import {
  XCircleIcon,
  CheckCircleIcon,
  CloudArrowUpIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

const UploadModal = ({ closeModal }) => {
  const [files, setFiles] = useState([]);

  const handleFiles = (selectedFiles) => {
    const filesArray = Array.from(selectedFiles).map((file) => ({
      file,
      status: "Uploading",
    }));
    setFiles((prev) => [...prev, ...filesArray]);

    filesArray.forEach((f, idx) => {
      setTimeout(() => {
        setFiles((prev) =>
          prev.map((item) =>
            item === f
              ? { ...item, status: Math.random() > 0.2 ? "Success" : "Error" }
              : item
          )
        );
      }, 1500 + idx * 500);
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleBrowse = (e) => handleFiles(e.target.files);

  const removeFile = (index) => setFiles((prev) => prev.filter((_, idx) => idx !== index));

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      onClick={closeModal} 
    >
      <div
        className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Back Button */}
        <button
          onClick={closeModal}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 mb-4"
        >
          <ArrowLeftIcon className="w-5 h-5" /> Back
        </button>

        <h2 className="text-2xl font-bold mb-4 text-indigo-600 flex items-center gap-2">
          <CloudArrowUpIcon className="w-6 h-6" /> Upload Files
        </h2>

        <div
          className="border-2 border-dashed border-gray-300 rounded-lg h-32 flex flex-col items-center justify-center mb-4 cursor-pointer hover:border-indigo-500 transition relative overflow-hidden"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <p className="text-gray-500 text-center px-2">
            Drag & drop files here or click to browse
          </p>
          <input
            type="file"
            multiple
            className="absolute w-full h-full opacity-0 cursor-pointer"
            onChange={handleBrowse}
          />
        </div>

        <div className="max-h-60 overflow-y-auto space-y-2 mb-4">
          {files.length === 0 && (
            <p className="text-gray-400 text-sm text-center">No files uploaded yet.</p>
          )}
          {files.map((f, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 border rounded-lg hover:shadow-sm transition bg-gray-50"
            >
              <div>
                <p className="font-medium truncate">{f.file.name}</p>
                <p
                  className={`text-sm ${
                    f.status === "Uploading"
                      ? "text-gray-500"
                      : f.status === "Success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {f.status}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {f.status === "Success" && <CheckCircleIcon className="w-5 h-5 text-green-600" />}
                {f.status === "Error" && <XCircleIcon className="w-5 h-5 text-red-600" />}
                <button
                  onClick={() => removeFile(idx)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {files.length > 0 && (
          <button
            onClick={() => setFiles([])}
            className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadModal;