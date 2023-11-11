import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import Title from "../Title.component";

import WorkImg from "@/public/work.webp";

export default function WorkCard({ content }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#FDCA4033", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #FDCA40" }}
      date={content.timePeriod}
      iconStyle={{ background: "#FDCA40", color: "#fff" }}
      icon={<img src={WorkImg.src} className="p-2"  alt="icon école" />}
    >
      <Title variant="h3" className="text-myorange">
        {content.occupation}
      </Title>
      <h4 className="text-primary">{content.companyLocation}</h4>
      {content.description.map((el, i) => (
        <p key={i}>{el}</p>
      ))}
      <ul className="list-disc pl-4">
      {content.tasks.map((el, i) => (
        <li key={i}>{el}</li>
      ))}
      </ul>
    </VerticalTimelineElement>
  );
}
