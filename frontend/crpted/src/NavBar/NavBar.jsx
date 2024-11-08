import React from 'react';
import LogoImg from "../assets/Icons/Logo.png";
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';

export const NavBar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-black min-w-96">
                {/*  Logo and App Title */}
                <div className="flex items-center space-x-4">
                    <div id="AppTitle" className="text-white text-lg font-bold">
                        CRPTED
                    </div>
                    <div id="Logo">
                        <img src={LogoImg} alt="Logo" className="h-8 w-auto" />
                    </div>
                </div>

                {/* Desktop React router links */}
                <div className="flex space-x-6">
                    <a href="/" className="text-gray-300 hover:text-white">Home</a>
                    <a href="/about" className="text-gray-300 hover:text-white">About</a>
                    <a href="/BuyCrypto" className="text-gray-300 hover:text-white">BuyCrypto</a>
                    <a href="/SellCrypto" className="text-gray-300 hover:text-white">SellCrypto</a>
                    <a href="/service" className="text-gray-300 hover:text-white">Services</a>
                    <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                </div>

                {/* User Avatar with Dropdown Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                            <Avatar className="w-8 h-8">
                                <AvatarImage src="https://example.com/avatar.jpg" alt="User Avatar" />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem asChild>
                            <a href="/profile" className="text-gray-700">Profile</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <a href="/settings" className="text-gray-700">Settings</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <a href="/logout" className="text-gray-700">Logout</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </div>
    );
};
