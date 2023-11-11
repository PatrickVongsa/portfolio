import React from "react";

import Section from "./ui/Section.component";
import Title from "./ui/Title.component";
import ImageDisplay from "./ui/ImageDisplay.component";

import AboutImg from "@/public/aboutimg.webp";

export default function AboutMe({ content }) {
  return (
    <Section id="a-propos" className="w-full flex gap-8">
      <div className="max-w-[1600px] mx-auto h-full flex items-center gap-8 relative">
        <div className="flex-1 h-full flex justify-center items-center">
          <ImageDisplay
            className="lg:min-w-[600px] w-full max-w-[800px] aspect-[600/438]"
            img={AboutImg}
            altText="Illustration d'un avion"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <Title variant="h2" className="text-primary mb-4">
            {content.title}
          </Title>
          {content.content.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
