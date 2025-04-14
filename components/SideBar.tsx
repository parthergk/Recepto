import React from 'react'
import  Link from "next/link"
import { ChartPie, Home, Settings } from 'lucide-react'
import Image from 'next/image'

const SideBar = () => {
  return (
    <div className="w-[240px] bg-white border-r border-[#edeff2] flex flex-col"><div className="p-4 border-b border-[#edeff2]">
    <div className="flex items-center justify-center">
      <Image alt='logo' height={100} width={100} src="/logo.png"/>
    </div>
  </div>
  <div className="py-4 px-6 pt-6">
    <nav className="space-y-1">
    <h1 className=' text-[#5C5E64] text-sm my-2'>MAIN</h1>
      <Link href="#" className="flex items-center gap-3 text-[#181d27] px-3 py-2 rounded-md bg-[#f0f5ff]">
        <Home size={18} className="text-[#2859df]" />
        <span>Leads</span>
      </Link>
      <Link href="#" className="flex items-center gap-3 text-[#5c5e64] px-3 py-2 rounded-md hover:bg-[#f7f8fa]">
        <ChartPie size={18} className="text-[#5c5e64]" />
        <span>Analytics</span>
      </Link>
    </nav>
  </div>
  <div className="py-4 px-6 pt-6">
  <h1 className=' text-[#5C5E64] text-sm my-2'>MAIN</h1>
    <button
      className="flex items-center gap-3 text-[#5c5e64] w-full px-3 py-2 rounded-md hover:bg-[#f7f8fa]"
    >
      <Settings size={18} className="text-[#5c5e64]" />
      <span>Logout</span>
    </button>
  </div></div>
  )
}

export default SideBar