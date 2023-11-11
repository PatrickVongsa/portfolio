import React from "react";
import Section from "./ui/Section.component";
import Title from "./ui/Title.component";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EducationCard from "./ui/timeline/EducationCard.component";
import TurnCard from "./ui/timeline/TurnCard.component";
import WorkCard from "./ui/timeline/WorkCard.component";

export default function Experiences({ content }) {
  return (
    <Section id="experiences">
      <Title variant="h2" className="text-primary text-center mb-8">
        {content.title}
      </Title>
      <p className="md:w-[40%] mx-auto text-center mb-8">
        {content.description}
      </p>
      <VerticalTimeline layout="2-columns" lineColor={"#FDCA40"}>
        {content.experiences.map((el, i) => {
          switch (el.type) {
            case "education":
              return <EducationCard content={el} key={i} />;
              break;

            case "turn":
              return <TurnCard content={el} key={i} />;
              break;

            case "work":
              return <WorkCard content={el} key={i} />;
              break;

            default:
              return null;
              break;
          }
        })}
      </VerticalTimeline>
    </Section>
  );
}
