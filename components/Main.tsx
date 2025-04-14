"use client";
import React, { useEffect, useState } from "react";
import FiltersBar from "./FiltersBar";
import LeadsList from "./LeadsList";
import { User } from "lucide-react";

interface Props {
  organization: string;
}

const Main: React.FC<Props> = ({ organization }) => {
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const storedTeamMembers = localStorage.getItem(`recepto_team_${organization}`);
    if (storedTeamMembers) {
      setTeamMembers(JSON.parse(storedTeamMembers));
    } else {
      const initialTeamMembers = generateTeamMembers(organization);
      setTeamMembers(initialTeamMembers);
      localStorage.setItem(`recepto_team_${organization}`, JSON.stringify(initialTeamMembers));
    }
  }, [organization]);

  const assignLead = (memberId: number) => {
    setShowAssignModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow">
        <FiltersBar />
        <LeadsList organization={organization} setShowAssignModal={setShowAssignModal} />
      </div>

      {showAssignModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-medium mb-4">Assign Lead</h2>
            <div className="space-y-2 mb-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="p-2 hover:bg-gray-100 rounded cursor-pointer flex items-center"
                  onClick={() => assignLead(member.id)}
                >
                  <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <User size={16} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-xs text-gray-500">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-200 rounded text-gray-700"
                onClick={() => setShowAssignModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;

// Mock generator
function generateTeamMembers(org: string) {
  return [
    { id: 1, name: "Gaurav", role: "Member" },
    { id: 2, name: "Anand", role: "Admin" },
  ];
}
