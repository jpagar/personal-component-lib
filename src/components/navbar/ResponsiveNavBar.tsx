import React, {useState} from "react";
import {Bars3Icon} from "@heroicons/react/20/solid";

/*
*  Example dataset for links
     const links = [
    {href: '#', name: 'Dashboard'},
    {href: '#', name: 'Team'},
    {href: '#', name: 'Projects'},
    {href: '#', name: 'Calendar'}
]
* */


export interface NavProps {
    links: ({ name: string; href: string })[]
}

/*
* @params links: Array of objects with name and href
* @returns A responsive navbar with a hamburger menu for mobile
* */
export const ResponsiveNavBar: React.FC<NavProps> = ({links}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    };

    const renderLinks = () => {
        return links.map((links, index) =>
            <li key={index} className="m-2 px-3 py-1.5 rounded-lg hover:bg-gray-700">
                <a href={links.href}>{links.name}</a>
            </li>
        )
    }

    return (
        <div className="">
            {/*Navbar*/}
            <ul className="hidden md:flex gap-3 bg-gray-800 text-white">
                {renderLinks()}
            </ul>

            {/*Mobile Navbar*/}
            <div className="md:hidden flex p-3 bg-gray-800 text-white justify-end">
                <div>
                    <Bars3Icon onClick={handleClick} className="m-3 w-5 h-5 my-auto cursor-pointer "/>
                </div>
            </div>
            <ul className={`md:hidden flex flex-col py-1 bg-gray-800 text-white transition-opacity duration-150 ${
                isOpen ? 'opacity-100' : 'opacity-0'
            }`}>
                {renderLinks()}
            </ul>
        </div>
    );
}