import React from 'react'

const LeadScore = ({score}:{
    score:number
}) => {
    const colorClass = score >= 90 ? "bg-blue-500" : "bg-green-500";
    return (
      <div
        className={`text-sm font-semibold text-white py-1 px-2 rounded ${colorClass}`}
      >
        {score}
      </div>
    );
}

export default LeadScore