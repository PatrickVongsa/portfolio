import React from "react";
import Link from "next/link";

import { navLinks } from "@/datas/navLinks.data";

import ImageDisplay from "./ui/ImageDisplay.component";

import Logo from "@/public/logo.webp";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full py-4 lg:py-6 px-4 md:px-8 lg:px-16 flex justify-between items-center bg-header">
      <div className="w-fit">
        <Link
          href="/"
          aria-label="Patrick VONGSA Développeur web"
          className="block w-40"
        >
          <ImageDisplay
            className="w-full aspect-[323/72]"
            img={Logo}
            altText="Patrick VONGSA Développeur webo"
          />
          <span className="visually-hidden">
            (Ouvre dans une nouvelle fenêtre)
          </span>
        </Link>
      </div>
      <nav className="w-fit">
        <ul className="flex items-center gap-8">
          {navLinks.map((el, i) => (
            <li
              key={i}
              className="font-semibold hover:scale-105 hover:underline hover:underline-offset-4 transition"
            >
              <Link href={el.url}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
