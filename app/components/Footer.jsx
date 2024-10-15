import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 mt-8">
      <div className="container mx-auto">
        <p className="text-center text-sm text-black/30 dark:text-[#EEEEEE]/60">
          Copyright ©2024 | All rights reserved by{" "}
          <span>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`https://abunasirlimon.vercel.app/`}
            >
              Abu Nasir Leemon
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
