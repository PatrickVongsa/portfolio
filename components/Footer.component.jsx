import React from "react";
import Link from "next/link";

import { navLinks } from "@/datas/navLinks.data";
import { socialLinks } from "@/datas/socialLinks.data";

import Title from "./ui/Title.component";
import ImageDisplay from "./ui/ImageDisplay.component";

import Logo from "@/public/logo.webp";
import GithubImg from "@/public/logo/github.webp";
import LinkedinImg from "@/public/logo/linkedin.webp";

export default function Footer() {
  return (
    <footer className="bg-footer py-4 md:py-8 lg:py-16 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-[1600px] w-full h-full mx-auto  flex justify-between gap-8 relative">
        <div className="w-fit flex flex-col gap-4">
          <Link
            href="/"
            aria-label="Patrick VONGSA Développeur web"
            className="block w-60"
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

          <div className="flex gap-4 mt-12">
            <Link
              href={socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn logo"
              className="block w-11 hover:scale-125 transition"
            >
              <ImageDisplay
                className="w-full aspect-square"
                img={LinkedinImg}
                altText="LinkedIn logo"
              />
              <span className="visually-hidden">
                (Ouvre dans une nouvelle fenêtre)
              </span>
            </Link>
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub logo"
              className="block w-11 hover:scale-125 transition"
            >
              <ImageDisplay
                className="w-11 aspect-square"
                img={GithubImg}
                altText="GitHub logo"
              />
              <span className="visually-hidden">
                (Ouvre dans une nouvelle fenêtre)
              </span>
            </Link>
          </div>
        </div>
        <div className="w-fit">
          <Title variant="h2" className="mb-4">
            Site Map
          </Title>
          <ul className="flex flex-col gap-4">
            {navLinks.map((el, i) => (
              <li
                key={i}
                className="hover:scale-105 hover:underline hover:underline-offset-4 transition"
              >
                <Link href={el.url}>{el.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
