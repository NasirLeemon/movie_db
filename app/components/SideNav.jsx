"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav = ({ links }) => {
  const pathname = usePathname();
  const slicedPathName = pathname.slice(3);

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${
              slicedPathName === link.href ? "bg-primary text-black" : ""
            }`}
            href={link.href}
          >
            <Image src={link.icon} width="24" height="24" alt={link.label} />
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideNav;
