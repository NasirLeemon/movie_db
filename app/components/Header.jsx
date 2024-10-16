import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/movies">
          <Image
            src="/brocolee7.png"
            width={200}
            height={200}
            alt="brocolee movies logo"
            className="bg-transparent"
          />
        </Link>

        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/ring.svg" width="24" height="24" alt="" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/icons/sun.svg" width="24" height="24" alt="" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/shopping-cart.svg" width="24" height="24" alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
