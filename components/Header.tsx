import {
  Building2,
  ChevronDown,
  Search,
} from "lucide-react";
import Image from "next/image";
import React from "react";

interface UserInt{
    id: number;
    username: string;
    password: string;
    name: string;
    role: string;
    organization: string;
}

interface HeaderProps {
    currentUser : UserInt | null
}

const Header:React.FC<HeaderProps> = ({currentUser}) => {
  return (
    <header className="h-16 border-b border-[#edeff2] bg-white flex items-center justify-between px-4">
      <div className="flex items-center gap-4 flex-1 hover:cursor-pointer">
        <Building2 className=" text-[#8C93A6]"></Building2>
        <div className=" text-[#0E1E30] text-sm font-semibold">CompnayName</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5c5e64]"
            size={16}
          />
          <input
            type="text"
            placeholder="What are you looking for in Verycle?"
            className="w-full pl-10 pr-4 py-2 text-sm border border-[#edeff2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2859df] focus:border-transparent"
          />
        </div>
        <button className="bg-[#2859df] hover:bg-[#175cd3] text-white rounded-md px-4 py-2 text-sm hover:cursor-pointer">
          0 credits
        </button>
        <div className=" flex justify-center items-center gap-5 text-[#0E1E30] hover:cursor-pointer">
          <Image height={40} width={40} alt="logo" src="/user.png" className=" rounded-full bg-gray-400" />
          <div className=" flex flex-col ">
            <h1>{currentUser?.name}</h1>
            <p className=" text-[#8C93A6]">Admin</p>
          </div>
          <ChevronDown></ChevronDown>
        </div>
      </div>
    </header>
  );
};

export default Header;
