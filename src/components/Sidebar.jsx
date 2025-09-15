import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ClipboardDocumentListIcon,
  LightBulbIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const location = useLocation();
  const links = [
    { name: "Contracts", path: "/dashboard", icon: ClipboardDocumentListIcon },
    { name: "Insights", path: "#", icon: LightBulbIcon, disabled: true },
    { name: "Reports", path: "#", icon: ChartBarIcon, disabled: true },
    { name: "Settings", path: "#", icon: Cog6ToothIcon, disabled: true },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-blue-700">SaaS Dashboard</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.disabled ? "#" : link.path}
            className={`flex items-center gap-2 p-2 rounded-lg transition-colors 
            ${
              location.pathname === link.path
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            } ${link.disabled && "opacity-50 cursor-not-allowed"}`}
          >
            <link.icon className="w-5 h-5" />
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
