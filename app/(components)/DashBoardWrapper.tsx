import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {};

const DashBoardWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="dark flex bg-gray-50 text-gray-900 w-full min-h-screen">
      <Sidebar />
      <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashBoardWrapper;
