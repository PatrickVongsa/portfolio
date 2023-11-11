import React, { Fragment } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

import Title from "../Title.component";

import TurnImg from "@/public/turn.webp";

export default function TurnCard({ content }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education after:border-b-secondary"
      date={content.timePeriod}
      contentStyle={{ background: "#2176FF", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #FDCA40" }}
      iconStyle={{ background: "#2176FF", color: "#fff", border: "none" }}
      icon={<img src={TurnImg.src} className="p-2"  alt="icon fléché"/>}
    >
      <Title variant="h3" className="text-white">
        {content.description.map((el, i) => (
          <Fragment key={i}>{el}</Fragment>
        ))}
      </Title>
    </VerticalTimelineElement>
  );
}
