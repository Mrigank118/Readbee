"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import searchImage from "@/images/search.png";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  user: string;
  isSignedIn: boolean;
  imageUrl?: string;
  onOpenRegister: () => void; // Add this prop
}


export const Header: React.FC<HeaderProps> = ({ user, isSignedIn, imageUrl, onOpenRegister }) => {
  return (
    <div className="flex items-center justify-between mt-2 mb-4 px-8 py-2 sticky top-0 z-10">
      {/* Input on the left with adjusted width */}
      <div className="flex items-center">
        <Image src={searchImage} alt="Search" width={15} height={20} />
        <Input
          className="w-80 border-none focus:ring-0"
          placeholder="Search book name, author, publisher"
        />
      </div>

      {/* Avatar, username, and possibly a button on the right */}
      <div className="flex items-center space-x-2">
        {!isSignedIn ? (
          <>
            <Avatar className="mr-2 w-8 h-8">
              {imageUrl ? (
                <AvatarImage src={imageUrl} alt="User Avatar" />
              ) : (
                <AvatarFallback>CN</AvatarFallback>
              )}
            </Avatar>
            <p className="font-bold text-sm">{user}</p>
          </>
        ) : (
          <Button 
            onClick={onOpenRegister} 
            className="flex items-center ml-4 bg-gray-800 text-white rounded-3xl" 
            variant="outline"
          >
            Join the Community
          </Button>
        )}
      </div>
    </div>
  );
};
