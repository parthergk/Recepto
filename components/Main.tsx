import { ChevronDown, Filter, SlidersHorizontal } from "lucide-react";
import React from "react";
import FiltersBar from "./FiltersBar";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow">
        <FiltersBar/>
      </div>
    </div>
  );
};

export default Main;
