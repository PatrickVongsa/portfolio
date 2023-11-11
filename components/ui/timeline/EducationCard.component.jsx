import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import Title from "../Title.component";

import EducationImg from "@/public/education.webp";

export default function EducationCard({ content }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date={content.timePeriod}
      contentStyle={{ background: "#2176FF33", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #FDCA40" }}
      iconStyle={{ background: "#2176FF", color: "#fff", border: "none" }}
      icon={<img src={EducationImg.src} className="p-2" alt="icon travail" />}
    >
      <Title variant="h3" className="text-myorange">
        {content.occupation}
      </Title>
      <h4 className="text-primary">{content.companyLocation}</h4>
      {content.description.map((el, i) => (
        <p key={i}>{el}</p>
      ))}
    </VerticalTimelineElement>
  );
}
