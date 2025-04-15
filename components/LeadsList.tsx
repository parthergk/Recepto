import React, { useEffect, useState } from "react";
import LeadCard from "./LeadCard";

type Lead = {
  id: string;
  type: "receptonet" | "organization";
  name: string;
  nameVisible: boolean;
  location: string;
  message: string;
  foundTime: string;
  source: string;
  credits: number;
  score: number;
  liked: boolean | null;
  groupName?: string;
  contacts?: string[];
  unlocked?: boolean;
  assignedTo?: string;
};

interface Props {
  setShowAssignModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeadsList: React.FC<Props> = ({ setShowAssignModal }) => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const mockLeads = generateLeads();
    setLeads(mockLeads);
  }, []);

  return (
    <div className="space-y-4 px-10">
      {leads.map((lead) => (
        <LeadCard
          key={lead.id}
          lead={lead}
          setShowAssignModal={setShowAssignModal}
        />
      ))}
    </div>
  );
};

export default LeadsList;

function generateLeads(): Lead[] {
  const mockLeads: Lead[] = [];

  for (let i = 0; i < 2; i++) {
    mockLeads.push({
      id: `receptonet-${i}`,
      type: "receptonet",
      name: `Jenny${i}`,
      nameVisible: false,
      location: "Mumbai, India",
      message: "Looking for recommendations on product analytics tools for our B2B SaaS platform. Currently evaluating options for a team of 50 ...read more",
      foundTime: i === 0 ? "Today" : `${i} hours ago`,
      source: "ReceptoNet",
      credits: Math.floor(Math.random() * 4),
      score: Math.floor(Math.random() * 101),
      liked: null,
      unlocked: false,
    });
  }

  for (let i = 0; i < 3; i++) {
    mockLeads.push({
      id: `org-${i}`,
      type: "organization",
      name: "Jennifer Markus",
      nameVisible: true,
      location: "Mumbai, India",
      message: "A team from *company name mentioned* is seeking a highly motivated Business Development Executive to outreach and secure bot...",
      foundTime: i === 0 ? "Today" : `${i} hours ago`,
      source: "Org's Network",
      groupName: "Group name",
      contacts: ["John Doe", "Jane Smith", "Mark Johnson"],
      credits: Math.floor(Math.random() * 4),
      score: Math.floor(Math.random() * 101),
      liked: null,
      unlocked: false,
      assignedTo: i === 0 ? "Mark" : undefined,
    });
  }

  return mockLeads;
}
