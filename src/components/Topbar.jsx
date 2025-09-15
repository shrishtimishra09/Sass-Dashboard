import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserCircleIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";

const Topbar = ({ openUpload }) => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-sm border-b">
      <h1 className="font-semibold text-xl text-gray-700">Contracts</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={openUpload}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-1"
        >
          <ArrowUpTrayIcon className="w-5 h-5" />
          Upload
        </button>

        <UserCircleIcon className="w-8 h-8 text-gray-500" />
        <span className="text-gray-700 font-medium">User</span>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
