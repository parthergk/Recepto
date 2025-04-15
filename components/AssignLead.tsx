import React, { useState } from "react";
import { X } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  avatar: string;
}

interface Props {
  showAssignModal: boolean;
  setShowAssignModal: React.Dispatch<React.SetStateAction<boolean>>;
  teamMembers: TeamMember[];
}

const AssignLead: React.FC<Props> = ({
  showAssignModal,
  setShowAssignModal,
  teamMembers
}) => {
  const [selectedMemberId, setSelectedMemberId] = useState<number | null>(null);

  function assignLead(memberId:number){
    setSelectedMemberId(memberId)
    setShowAssignModal(false)
  }
  return (
    <>
      {showAssignModal && (
        <div className="fixed inset-0 bg-black/40 text-[#344054] flex items-start justify-center pt-20 z-50">
          <div className="bg-white shadow-lg w-80 max-h-[400px] overflow-y-auto relative">
            <div className="sticky top-0 bg-white z-10 p-3 border-b flex items-center gap-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full border rounded-md px-3 py-1 text-sm"
              />
              <button onClick={() => setShowAssignModal(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div>
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => assignLead(member.id)}
                  className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    selectedMemberId === member.id ? "bg-gray-100" : ""
                  }`}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignLead;
