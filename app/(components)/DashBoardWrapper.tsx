"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAppSelector } from "@/store";

const DashBoardWrapper = ({ children }: PropsWithChildren) => {
  const { isSidebarCollapsed, isDarkMode } = useAppSelector(
    (state) => state.global
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <div className="flex bg-gray-50 text-gray-900 w-full min-h-screen">
      <Sidebar />
      <main
        className={twMerge(
          "flex flex-col w-full h-full py-7 px-9 bg-gray-50",
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        )}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashBoardWrapper;
