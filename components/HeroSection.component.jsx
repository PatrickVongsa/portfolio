import React from "react";
import Link from "next/link";

import { socialLinks } from "@/datas/socialLinks.data";

import Section from "./ui/Section.component";
import Title from "./ui/Title.component";
import ButtonLink from "./ui/buttons/ButtonLink.component";
import ImageDisplay from "./ui/ImageDisplay.component";

import HeroImg from "@/public/heroimg.webp";
import GithubImg from "@/public/logo/github.webp";
import LinkedinImg from "@/public/logo/linkedin.webp";

export default function HeroSection({ content }) {
  return (
    <Section className="hero-height relative">
      <div className="max-w-[1600px] w-full h-full mx-auto flex items-center gap-8 relative">
        <div className="flex-1 w-full flex flex-col gap-4">
          <p className="uppercase font-bold">{content.topTitle}</p>
          <Title variant="h1">
            {content.title}{" "}
            <span className="text-secondary">{content.titleHighlight}</span>
          </Title>
          {content.description.map((el, i) => (
            <p key={i} className="text-2xl">
              {el}
            </p>
          ))}
          <div className="flex gap-4  mt-4">
            <ButtonLink href="#a-propos">En savoir plus</ButtonLink>
            <ButtonLink href="#projets" color="secondary">
              Voir mes projets
            </ButtonLink>
          </div>

      <div className="flex gap-4 mt-32">
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
        <div className="flex-1 h-full flex justify-center items-center">
          <ImageDisplay
            className="w-full aspect-[600/438]"
            img={HeroImg}
            altText="Illustration d'une personne de dos travaillant devant ordinateur"
          />
        </div>
      </div>
    </Section>
  );
}
