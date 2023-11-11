import React from "react";

import Section from "./ui/Section.component";
import Title from "./ui/Title.component";
import ImageDisplay from "./ui/ImageDisplay.component";
import ButtonLink from "./ui/buttons/ButtonLink.component";

import ProjectImg from "@/public/projectimg.webp";

export default function Projects({ content }) {
  return (
    <Section id="projets" className="w-full flex">
      <div className="max-w-[1600px] w-full mx-auto flex flex-col items-center gap-16 relative">
        <Title variant="h2" className="text-primary text-center">
          {content.title}
        </Title>
        {content.projects.map((project, i) => (
          <div
            className={`flex ${
              i % 3 == 0 ? "" : "flex-row-reverse "
            } gap-8  items-start w-full`}
            key={i}
          >
            <div className="flex-1 w-full h-full flex justify-center items-center">
              <ImageDisplay
                className="w-full aspect-[600/438]"
                img={ProjectImg}
                altText="Illustration du projet sur différents écrans"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <Title variant="h3" className="text-secondary mb-4">
                {project.title}
              </Title>
              <p className="text-primary mb-4">{project.context}</p>
              {project.description.map((el, i) => (
                <p key={i}>{el}</p>
              ))}
              <ul className="list-disc pl-4">
                {project.technologies.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
              <ButtonLink
                href={project.gitHubLink}
                color="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur GitHub
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
