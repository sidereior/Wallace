"use client";

import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  return (
    
    <nav className="mb-1 top-0 bg-gradient-to-r from-[#382831] to-[#1D391C] fixed w-full z-50 left-0 pl-10 pt-3 pb-3 flex space-x-4">
      
      <a className={`px-2 py-1 rounded border border-[#33AA38] ${pathname === "/" ? "text-[#001401] bg-[#8CFEB2]" : ""}`} href="/">🌲Chat with RIPLEY</a>
      <a className={`px-2 py-1 rounded border border-[#33AA38] ${pathname === "/retrieval_agents" ? "text-[#001401] bg-[#8cfeb2]" : ""}`} href="/retrieval_agents">📝 Methodologies Overview</a>
    </nav>
  );
}