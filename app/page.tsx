"use client";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { useEffect, useState } from "react";
import Main from "@/components/Main";

interface UserInt{
    id: number;
    username: string;
    password: string;
    name: string;
    role: string;
    organization: string;
}

export default function Home() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<null | UserInt>(null);

  useEffect(() => {
      const storedUser = localStorage.getItem('receptoCurrentUser');
      
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setCurrentUser(user);
        setLoggedIn(true);
        // loadData(user.organization);
      } else {
        loginprompt();
      }
    }, []);
  
    const loginprompt = () => {
      const username = prompt("Enter username:");
      const password = prompt("Enter password:");
      const users = [
        { id: 1, username: "anand", password: "password", name: "Anand Kumar", role: "Admin", organization: "Recepto Inc." },
        { id: 2, username: "gaurav", password: "password", name: "Gaurav Kumar", role: "Member", organization: "Recepto Inc." }
      ];
      
      const user = users.find(u => u.username === username && u.password === password);
      
      if (user) {
        setCurrentUser(user);
        setLoggedIn(true);
        localStorage.setItem('receptoCurrentUser', JSON.stringify(user));
        // loadData(user.organization);
      } else {
        alert("Invalid login. Please try again.");
        loginprompt();
      }
    };

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center h-screen text-5xl font-semibold text-[#667085] bg-white">
        LOGIN
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#F7F8FA]">
      <SideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentUser={currentUser} />
        <main className="flex-1 overflow-auto">
          <Main/>
        </main>
      </div>
    </div>
  );
}
