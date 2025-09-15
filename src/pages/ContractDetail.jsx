import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClauseCard from "../components/ClauseCard";
import InsightCard from "../components/InsightCard";
import EvidenceDrawer from "../components/EvidenceDrawer";

const ContractDetail = () => {
  const { id } = useParams();
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetch("/contracts.json")
      .then((res) => res.json())
      .then((data) => {
        const c = data.find((item) => item.id === id);
        if (c) {
          setContract({
            ...c,
            clauses: [
              { title: "Termination", summary: "90 days notice period.", confidence: 0.82 },
              { title: "Liability Cap", summary: "12 months’ fees limit.", confidence: 0.87 },
            ],
            insights: [
              { risk: "High", message: "Liability cap excludes data breach costs." },
              { risk: "Medium", message: "Renewal auto-renews unless cancelled 60 days before expiry." },
            ],
            evidence: [
              { source: "Section 12.2", snippet: "Total liability limited to 12 months’ fees.", relevance: 0.91 },
            ],
          });
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-indigo-500 p-6">Loading contract details...</p>;
  if (error || !contract) return <p className="text-red-500 p-6">Contract not found.</p>;

  return (
    <div className="relative p-6">
      <div className="mb-4">
        <h2 className="text-4xl font-bold text-indigo-600 mb-2">{contract.name}</h2>
        <p className="text-gray-700">
          <strong>Parties:</strong> {contract.parties} |{" "}
          <strong>Status:</strong> {contract.status} | <strong>Risk:</strong> {contract.risk}
        </p>
        <p className="text-gray-500">
          <strong>Start:</strong> {contract.start || "N/A"} | <strong>Expiry:</strong> {contract.expiry}
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4 text-indigo-500">Clauses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contract.clauses.map((cl, idx) => (
            <ClauseCard key={idx} clause={cl} />
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-500">AI Insights</h3>
        <div className="space-y-3">
          {contract.insights.map((ins, idx) => (
            <InsightCard key={idx} insight={ins} />
          ))}
        </div>
      </div>

      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition z-50"
      >
        View Evidence
      </button>

      {drawerOpen && <EvidenceDrawer evidence={contract.evidence} closeDrawer={() => setDrawerOpen(false)} />}
    </div>
  );
};

export default ContractDetail;
