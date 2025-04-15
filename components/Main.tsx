"use client";
import React, { useState } from "react";
import FiltersBar from "./FiltersBar";
import LeadsList from "./LeadsList";
import AssignLead from "./AssignLead";

interface Props {
  organization: string;
}

interface TeamMember {
  id: number;
  name: string;
  avatar: string;
}


const Main: React.FC<Props> = () => {
  const [showAssignModal, setShowAssignModal] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Olivia Rhye",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "Olivia Rhye",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      name: "Olivia Rhye",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 4,
      name: "Olivia Rhye",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    {
      id: 5,
      name: "Olivia Rhye",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 6,
      name: "Olivia Rhye",
      avatar: "https://i.pravatar.cc/150?img=6"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow">
        <FiltersBar />
        <LeadsList
          setShowAssignModal={setShowAssignModal}
        />
      </div>
      <AssignLead
        showAssignModal={showAssignModal}
        setShowAssignModal={setShowAssignModal}
        teamMembers={teamMembers}
      />
    </div>
  );
};

export default Main;
