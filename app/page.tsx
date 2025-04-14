import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#F7F8FA]">
      <SideBar/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {/* <main className="flex-1 overflow-auto p-6">
          <MetricsCards />
          <DataTable />
        </main> */}
      </div>
    </div>
  );
}
