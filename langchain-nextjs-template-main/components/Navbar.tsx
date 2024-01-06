"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    
    <nav className="mb-1 top-0 bg-gradient-to-r from-[#E4E4E4] to-[#E9E9E5] fixed w-full z-50 left-0 pl-5 pt-3 pb-3 flex space-x-4">
        <a href="https://paidplanet.com">
        <img src="/images/logo-large.png" alt="test" className="h-8 w-auto pr-3" />
      </a> 
      <a className={`px-2 py-1 rounded border border-[#2CB3C5] ${pathname === "/" ? "text-[#001401] bg-[#EA8C00]" : ""}`} href="/">Chat with Wallace</a>
      <a className={`px-2 py-1 rounded border border-[#2CB3C5] ${pathname === "/retrieval_agents" ? "text-[#001401] bg-[#EA8C00]" : ""}`} href="/retrieval_agents">Methodologies Overview</a>
      <a className={`px-2 py-1 rounded border border-[#2CB3C5] ${pathname === "/retrieval" ? "text-[#001401] bg-[#EA8C00]" : ""}`} href="/retrieval">Profile</a>
    </nav>
  );
}