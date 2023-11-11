import React, { Fragment } from "react";

import Section from "./ui/Section.component";
import Title from "./ui/Title.component";

import CardSkill from "./ui/CardSkill.component";

export default function Skills({ content, skills }) {
  return (
    <Section id="competences" className="w-full flex justify-between gap-8">
      <div className="max-w-[1600px] w-full mx-auto h-full flex items-center gap-8 relative">
        <div className="flex-1 flex flex-col gap-4">
          <Title variant="h2" className="text-primary mb-4">
            {content.title}
          </Title>
          {content.content.map((el, i) => (
            <p key={Math.random()}>{el}</p>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-5 gap-4">
          {skills.map((el, i) => {
            return (
              <Fragment key={el.name + i}>
                <CardSkill imgSkill={el.image} skillName={el.name} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
