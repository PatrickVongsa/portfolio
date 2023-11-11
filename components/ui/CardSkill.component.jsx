import React from "react";
import ImageDisplay from "./ImageDisplay.component";

export default function CardSkill({ imgSkill, skillName }) {
  return (
    <div className="relative group/item transition">
      <ImageDisplay
        img={imgSkill}
        altText={skillName}
        className=" bg-secondary/20 aspect-square rounded-xl border-[3px] border-secondary group-hover/item:scale-90 transition"
        imgClassName="p-4"
      />
      <p className="absolute hidden top-4 -translate-y-1/2 left-1/2 -translate-x-1/2  group-hover/item:block transition z-10 py-2 px-4 bg-white/90 text-black font-semibold rounded-xl">
        {skillName}
      </p>
    </div>
  );
}
