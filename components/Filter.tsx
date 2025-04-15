"use client"

import { useState } from "react"
import { X, Search, SlidersHorizontal, ScrollTextIcon } from "lucide-react"

function Filter({ isOpen, onClose }: { isOpen: boolean; onClose: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [activeCategory, setActiveCategory] = useState("Location")
  const [appliedFilters, setAppliedFilters] = useState({
    total: 22,
    Location: 16,
    Score: 1,
  })
  const [searchQuery, setSearchQuery] = useState("")

  const [selectedLocations, setSelectedLocations] = useState<string[]>(["United States of America"])

  const locationOptions = [
    "India",
    "United Kingdom",
    "United States of America",
    "Saudi Arabia",
    "Singapore",
    "Taiwan",
    "France",
    "Germany",
    "China",
  ]

  const filteredLocations = locationOptions.filter((location) =>
    location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleLocationToggle = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((loc) => loc !== location))
    } else {
      setSelectedLocations([...selectedLocations, location])
    }
  }

  const handleClearFilters = () => {
    setAppliedFilters({
      total: 0,
      Location: 0,
      Score: 0,
    })
    setSelectedLocations([])
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 text-[#757575] shadow rounded-md">
              <SlidersHorizontal />
              </div>
              <div className=" flex gap-2">
                <h2 className="text-lg font-semibold text-[#181D27]">Filters</h2>
                <div className="flex items-center bg-[#2859DF1A] px-2 rounded-2xl">
                  <span className="text-sm text-blue-600">{appliedFilters.total} applied</span>
                  <button onClick={handleClearFilters} className="ml-1 text-blue-600">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">See results in your view based on the filters you select here.</p>
        </div>

        <div className="flex flex-col md:flex-row h-[400px]">
          <div className="w-full md:w-48 p-4 border-r border-b md:border-b-0">
            <div className="space-y-2">
              <button
                onClick={() => setActiveCategory("Location")}
                className={`flex items-center justify-between w-full px-4 py-2 text-left rounded-md border border-[#D0D5DD] text-[#414651] ${
                  activeCategory === "Location" ? " border border-blue-600 text-blue-600" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>Location</span>
                </div>
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">2</span>
              </button>

              <button
                onClick={() => setActiveCategory("Score")}
                className={`flex items-center justify-between w-full px-4 py-2 text-left rounded-md border border-[#D0D5DD] text-[#414651] ${
                  activeCategory === "Score" ? "border border-blue-600 text-blue-600" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.5 14L12 7L15.5 14M9.5 11.5H14.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    
                  </div>
                  <span>Score</span>
                </div>
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">1</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="p-4 border-b">
              <div className="flex flex-col justify-between">
                <div className=" flex gap-2">
                    
                  <h3 className="font-semibold text-[#181D27]">Location</h3>
                  <div className="flex items-center bg-[#2859DF1A] px-2 rounded-2xl">
                    <span className="text-sm text-blue-600">{appliedFilters.Location} applied</span>
                    <button className="ml-1 text-blue-600">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <span className="text-sm text-gray-500">Select options to filter results</span>
              </div>
            </div>

            <div className="p-4 border-b">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-2">
              <div className="grid grid-cols-2 gap-2 text-[#555560]">
                {filteredLocations.map((location) => (
                  <div key={location} className="p-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedLocations.includes(location)}
                        onChange={() => handleLocationToggle(location)}
                      />
                      <span className="text-sm">{location}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t flex justify-between space-x-2">
          <button
            onClick={()=>onClose(false)}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button onClick={()=>onClose(false)} className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter;