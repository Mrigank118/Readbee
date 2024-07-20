"use client";
import React, { useState } from "react";
import Image from 'next/image';

// Import images
import houseImage from '@/images/home2.png';
import bookImage from  '@/images/page.png';
import tagImage from  '@/images/tag.png';
import chatImage from  '@/images/chat.png';
import settingImage from  '@/images/setting.png';
import beeImage from '@/images/bee2.png';
import logoutImage from '@/images/logout.png';

// Define the possible tab names
type TabName = 'home' | 'tag' | 'settings' | 'book' | 'chat' | 'logout';

export const Navbar = () => {
    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState<TabName>('home');

    // Function to handle tab click
    const handleTabClick = (tabName: TabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="fixed left-0 top-0 h-[calc(100vh-40px)] w-sm flex flex-col items-center justify-between bg-background border-r-color pb-6 pt-0 mt-3">
            <div className="p-4">
                <Image src={beeImage} alt="Home" width={34} height={2} />
            </div>
            <div className="p-4">
                <ul className="flex items-center flex-col space-y-3">
                    <li 
                        className={`custom-hover-effect p-2 ${activeTab === 'home' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('home')}
                    >
                        <Image src={houseImage} alt="Home" width={24} height={21} />
                    </li>
                    <li 
                        className={`custom-hover-effect p-2 ${activeTab === 'tag' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('tag')}
                    >
                        <Image src={tagImage} alt="Tag" width={20} height={22} />
                    </li>
                    <li 
                        className={`custom-hover-effect p-2 ${activeTab === 'settings' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('settings')}
                    >
                        <Image src={settingImage} alt="Settings" width={22} height={22} />
                    </li>
                    <li 
                        className={`custom-hover-effect p-2 ${activeTab === 'book' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('book')}
                    >
                        <Image src={bookImage} alt="Book" width={24} height={25} />
                    </li>
                    <li 
                        className={`custom-hover-effect p-2 ${activeTab === 'chat' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('chat')}
                    >
                        <Image src={chatImage} alt="Chat" width={23} height={22} />
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li 
                        className={`custom-hover-effect p-2 ${activeTab === 'logout' ? 'active-tab' : ''}`}
                        onClick={() => handleTabClick('logout')}
                    >
                        <Image src={logoutImage} alt="Logout" width={21} height={22} />
                    </li>
                </ul>
            </div>
        </div>
    );
};
