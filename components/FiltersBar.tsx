import { SlidersHorizontal } from 'lucide-react'
import React from 'react'

const FiltersBar = ({setIsFilterOpen}:{
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className="flex justify-end mb-4 relative border-b py-2.5 px-2 bg-white">
          <button
            className="flex items-center gap-2 p-2 bg-white text-[#344054] border border-gray-300 rounded-md shadow-sm"
              onClick={()=>setIsFilterOpen(true)}
          >
            <SlidersHorizontal />
            <span>Filters</span>
            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              2
            </span>
          </button>
        </div>
  )
}

export default FiltersBar