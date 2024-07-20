"use client";
import React, { useState } from "react";
import { Navbar } from "./_components/navbar";
import { Header } from "./_components/header";
import { LeftPanel } from "@/app/_components/left-Panel";
import { Register } from "@/app/_components/register";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string>("Ritika Jain");
  const [isSignedIn, setIsSignedIn] = useState<boolean>(true);
  const [imageUrl, setImageUrl] = useState<string>("https://github.com/jainritikaa.png");

  const openRegister = () => setIsRegisterOpen(true); 
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <div className="flex h-screen flex-col lg:flex-row relative">
      {/* Sidebar (Left Panel) */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex-1 ml-20">
        {/* Header */}
        <Header user={user} isSignedIn={isSignedIn} imageUrl={imageUrl} onOpenRegister={openRegister} />

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row lg:h-screen space-y-2 lg:space-y-0 lg:space-x-2 mr-2">
          {/* Left Panel */}
          <div className="p-4 rounded-lg w-full lg:w-auto lg:flex-1 border-r-color">
            <LeftPanel />
          </div>

          {/* Second Column */}
          <div className="bg-white bg-opacity-30 p-4 rounded-lg xl:w-1/3 lg:w-1/3 md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Second Column</h2>
            <p className="text-gray-700">Content for the second column.</p>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Register />
          <button
            onClick={closeRegister}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
