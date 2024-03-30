'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';

import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  

const SimpleMenu: React.FC = () => {
    // State to manage active menu item
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
    const controls = useAnimation();

    // Function to handle scrolling to section
    const scrollToSection = (sectionId: string) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            controls.start({ y: sectionElement.offsetTop, transition: { duration: 0.8, ease: 'easeInOut' } });
        }
    };

    return (
        <div className='w-full flex font-bold justify-between items-center'>
            
            <div className=''><NavigationMenu>
            <Image src="/icon.svg" alt="Shariah Viz Icon" width={50} height={50}/>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="" legacyBehavior passHref>
                            <NavigationMenuLink className="text-black hover:bg-slate-200 p-2 rounded-md hover:text-black"
                            onClick={() => {
                                setActiveMenuItem('home');
                                scrollToSection('home-section');
                            }}>
                            Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="" legacyBehavior passHref>
                            <NavigationMenuLink className="hover:bg-slate-200 p-2 rounded-md hover:text-black"
                            onClick={() => {
                                setActiveMenuItem('pricing');
                                scrollToSection('pricing-section');
                            }}>
                            Pricing
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>
            <div className=''>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="" legacyBehavior passHref>
                            <NavigationMenuLink className="text-white p-2 rounded-md hover:bg-blue-600 bg-blue-800">
                            Sign In
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="" legacyBehavior passHref>
                            <NavigationMenuLink className="text-white p-2 rounded-md hover:bg-blue-600 bg-blue-800">
                            Log In
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>
        </div>
    );
};


export { SimpleMenu };
