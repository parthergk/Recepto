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
  unlocked: boolean;
  credits: number;
  score: number;
  liked: boolean | null;
  assignedTo: string | null;
  groupName?: string;
  contacts?: string[];
};

interface Props {
  organization: string;
  setShowAssignModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeadsList: React.FC<Props> = ({ organization, setShowAssignModal }) => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const storedLeads = localStorage.getItem(`recepto_leads_${organization}`);
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads));
    } else {
      const initialLeads = generateLeads();
      setLeads(initialLeads);
      localStorage.setItem(
        `recepto_leads_${organization}`,
        JSON.stringify(initialLeads)
      );
    }
  }, [organization]);

  return (
    <div className="space-y-4">
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

  for (let i = 0; i < 3; i++) {
    mockLeads.push({
      id: `receptonet-${i}`,
      type: "receptonet",
      name: `Jenny${i}`,
      nameVisible: false,
      location: "Mumbai, India",
      message: "Looking for recommendations on product analytics tools...",
      foundTime: i === 0 ? "Today" : `${i} hours ago`,
      source: "ReceptoNet",
      unlocked: false,
      credits: Math.floor(Math.random() * 4),
      score: Math.floor(Math.random() * 101),
      liked: null,
      assignedTo: null,
    });
  }

  for (let i = 0; i < 3; i++) {
    mockLeads.push({
      id: `org-${i}`,
      type: "organization",
      name: "Jennifer Markus",
      nameVisible: true,
      location: "Mumbai, India",
      message: "A team is seeking a motivated Business Development Executive...",
      foundTime: i === 0 ? "Today" : `${i} hours ago`,
      source: "Org's Network",
      groupName: "Group name",
      contacts: ["John Doe", "Jane Smith", "Mark Johnson"],
      unlocked: false,
      credits: Math.floor(Math.random() * 4),
      score: Math.floor(Math.random() * 101),
      liked: null,
      assignedTo: null,
    });
  }

  return mockLeads;
}
