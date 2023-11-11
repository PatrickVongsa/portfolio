import React from "react";

import { socialLinks } from "@/datas/socialLinks.data";

import Section from "./ui/Section.component";
import Title from "./ui/Title.component";
import ButtonLink from "./ui/buttons/ButtonLink.component";
import ContactForm from "./ui/ContactForm.component";

export default function Contact({ content }) {
  return (
    <Section id="contact">
      <div className="max-w-[1600px] w-full mx-auto">
        <Title variant="h2" className="text-primary mb-8">
          {content.title}
        </Title>
        <div className="flex justify-between">
          {content.content.map((el, i) => (
            <p key={i} className="w-[60%]">
              {el}
            </p>
          ))}
          <ButtonLink
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Patrick VONGSA</p>
            <span className="visually-hidden">
              (Ouvre dans une nouvelle fenêtre)
            </span>
          </ButtonLink>
        </div>
        <div className="flex justify-center items-center gap-8 my-8">
          <hr className="w-[40%]" />
          <p>ou</p>
          <hr className="w-[40%]" />
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
