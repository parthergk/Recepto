import React, { useState } from "react";
import {
  Clock,
  Mail,
  MapPin,
  ThumbsDown,
  ThumbsUp,
  Users,
} from "lucide-react";
import Image from "next/image";

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
  lead: Lead;
  setShowAssignModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeadCard: React.FC<Props> = ({ lead, setShowAssignModal }) => {
  const [currentLead, setCurrentLead] = useState<Lead>(lead);

  const unlockLead = () => {
    setCurrentLead({ ...currentLead, unlocked: true });
  };

  const handleReaction = (liked: boolean) => {
    setCurrentLead({ ...currentLead, liked });
  };

  const renderScore = (score: number) => {
    const colorClass = score >= 90 ? "bg-blue-500" : "bg-green-500";
    return (
      <div
        className={`text-sm font-semibold text-white py-1 px-2 rounded ${colorClass}`}
      >
        {score}
      </div>
    );
  };

  return (
    <div
      className={`bg-white border-l-4 ${
        currentLead.type === "receptonet"
          ? "border-orange-500"
          : "border-green-500"
      } shadow-sm rounded-md overflow-hidden`}
    >
      <div className="py-2.5 px-5">
        <div className="flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="rounded-lg flex items-center justify-center">
                <Image
                  alt="user"
                  height={36}
                  width={36}
                  src="/leadUser.png"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium text-sm text-[#11263C]">
                  {currentLead.nameVisible
                    ? currentLead.name
                    : currentLead.name.substring(0, 4) + "XXXXX"}
                </h3>
                <div className="text-gray-400 text-xs flex items-center gap-1">
                  <MapPin height={15} width={15} />
                  <span>{currentLead.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                {currentLead.unlocked ? (
                  <>
                    {currentLead.assignedTo ? (
                      <div className="flex items-center gap-2.5 text-sm text-gray-400 bg-[#EEEEEE] mt-1 font-semibold px-3 py-1.5 rounded-2xl">
                        <Image
                          alt="icon"
                          src="/user.png"
                          height={24}
                          width={24}
                          className="rounded-full bg-gray-400"
                        />
                        Assigned
                        <span>{currentLead.assignedTo}</span>
                      </div>
                    ) : (
                      <button
                        className="border border-[#A16207] text-[#A16207] px-3 py-1 rounded-2xl text-sm font-medium"
                        onClick={() => setShowAssignModal(true)}
                      >
                        Assign
                      </button>
                    )}

                    <button className="border border-[#A16207] text-[#A16207] px-3 py-1 rounded-2xl text-sm font-medium">
                      View Details
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-[#2859DF] text-white px-4 py-1.5 flex items-center gap-2 rounded-2xl text-sm font-medium"
                    onClick={unlockLead}
                  >
                    <Mail size={15} />
                    Unlock
                    <span>{currentLead.credits}</span>
                  </button>
                )}

                {renderScore(currentLead.score)}

                <div className="flex items-center gap-2">
                  <button
                    className={`p-1 rounded ${
                      currentLead.liked === true
                        ? "bg-blue-100 text-blue-500"
                        : "text-blue-500"
                    }`}
                    onClick={() => handleReaction(true)}
                  >
                    <ThumbsUp size={16} />
                  </button>
                  <button
                    className={`p-1 rounded ${
                      currentLead.liked === false
                        ? "bg-red-100 text-red-500"
                        : "text-blue-500"
                    }`}
                    onClick={() => handleReaction(false)}
                  >
                    <ThumbsDown size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mt-1 text-sm">{currentLead.message}</p>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{currentLead.foundTime}</span>
            </div>

            {currentLead.type === "receptonet" ? (
              <div className="flex items-center gap-1 text-orange-500">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>ReceptoNet</span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>{currentLead.groupName}</span>
                </div>
                <div className="flex items-center gap-1 text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>{currentLead.source}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
