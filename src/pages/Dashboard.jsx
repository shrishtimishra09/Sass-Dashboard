import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Table from "../components/Table";
import UploadModal from "../components/UploadModal";

const Dashboard = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    fetch("/contracts.json")
      .then((res) => res.json())
      .then((data) => {
        setContracts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredContracts = contracts.filter((c) => {
    return (
      (c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.parties.toLowerCase().includes(search.toLowerCase())) &&
      (statusFilter === "All" || c.status === statusFilter) &&
      (riskFilter === "All" || c.risk === riskFilter)
    );
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar openUpload={() => setShowUpload(true)} />

        <div className="p-4 md:p-6 overflow-auto flex-1">
          <h2 className="text-3xl font-bold mb-6 text-indigo-600">Contracts Dashboard</h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by name or parties"
              className="p-3 border rounded-lg shadow-sm w-full md:w-1/3 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="p-3 border rounded-lg shadow-sm w-full md:w-1/4 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Active</option>
              <option>Expired</option>
              <option>Renewal Due</option>
            </select>
            <select
              className="p-3 border rounded-lg shadow-sm w-full md:w-1/4 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
            >
              <option>All</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {loading && <p className="text-indigo-500">Loading contracts...</p>}
          {error && <p className="text-red-500">Error loading contracts.</p>}
          {!loading && filteredContracts.length === 0 && !error && (
            <p className="text-gray-500">No contracts found. Try adjusting filters or upload files.</p>
          )}
          {!loading && filteredContracts.length > 0 && <Table contracts={filteredContracts} />}
        </div>
      </div>

      {showUpload && <UploadModal closeModal={() => setShowUpload(false)} />}
    </div>
  );
};

export default Dashboard;
