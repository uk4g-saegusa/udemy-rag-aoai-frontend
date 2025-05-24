'use cilent';

import { defaultMaxListeners } from "events";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

interface NaviItmeProps {
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavItem: React.FC<NaviItmeProps> = ({label, link, icon}) => {
    const pathname = usePathname();
    return (
        <Link href={link} className={`flex p-4 items-cnter w-full hover:bg-gray-600 font-medium ${pathname === link ? 'bg-gray-600 border-l-4 border-r-gray-100' : ''}`}>
            <div className="mr-3">{icon}</div>
            <div>{label}</div>
        </Link>
    )
}

export default NavItem;