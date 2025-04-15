import Image from "next/image";
import React from "react";

const Logout = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className=" bg-white rounded-md p-9 gap-5 flex flex-col">
        <Image alt="logo" height={80} width={80} src="/logo.png" />
        <div>
          <h1 className=" text-[#3C3C3C] text-3xl font-semibold">Log Out ?</h1>
          <span className=" text-gray-400 text-sm font-semibold">
            You’d have to login again to the platform.{" "}
          </span>
        </div>
        <div className=" flex flex-col gap-2">
          <button className=" text-white bg-blue-500 rounded-md py-2.5 px-4 hover:cursor-pointer">Logout</button>
          <button className=" text-blue-500 border border-blue-500 rounded-md py-2.5 px-4 hover:cursor-pointer" onClick={() => onClose(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
