import { sectionContents } from "@/datas/sections.data";

import AboutMe from "@/components/AboutMeSection.component";
import HeroSection from "@/components/HeroSection.component";
import Skills from "@/components/Skills.component";
import { skills } from "@/datas/skills.data";
import Projects from "@/components/Projects.component";
import Contact from "@/components/Contact.component";
import Experiences from "@/components/Experiences.component";

export const getStaticProps = (async () => {
  return { props: { data: sectionContents, skills } }
});
export default function Home({ data, skills }) {
  return (
    <>
      <HeroSection content={data.heroSection} />
      <AboutMe content={data.aboutMeSection} />
      <Skills content={data.skillsSection} skills={skills} />
      <Projects content={data.projectsSection} />
      <Experiences content={data.experiencesSection} />
      <Contact content={data.contactSection} />
    </>
  )
}


