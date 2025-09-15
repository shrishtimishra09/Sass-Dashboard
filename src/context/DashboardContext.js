import React, { createContext, useState, useContext, useEffect } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
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
    <DashboardContext.Provider
      value={{
        contracts,
        loading,
        error,
        search,
        setSearch,
        statusFilter,
        setStatusFilter,
        riskFilter,
        setRiskFilter,
        showUpload,
        setShowUpload,
        filteredContracts,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
