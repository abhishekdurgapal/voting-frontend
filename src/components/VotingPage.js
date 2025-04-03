import { useState } from "react";

export default function VotingPage() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = ["Candidate A", "Candidate B", "Candidate C"];

  const handleVote = () => {
    alert(`You voted for ${selectedCandidate}`);
    // Here, you'll send the vote to the backend
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Vote for Your Candidate</h1>
      <ul className="mb-4">
        {candidates.map((candidate, index) => (
          <li key={index}>
            <button
              className={`px-4 py-2 m-2 border ${
                selectedCandidate === candidate ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => setSelectedCandidate(candidate)}
            >
              {candidate}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded"
        onClick={handleVote}
        disabled={!selectedCandidate}
      >
        Submit Vote
      </button>
    </div>
  );
}
