import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Video Transcoder"
          des=" A fully featured video Transcoder capable of encoding vides from h265 to h264, also capable of selecting a particular language for the video to be encoded"
          src={projectOne}
          gitUrl={"https://github.com/AnkitKumar8080/mern-note-taking-app.git"}
          webUrl={"https://notes.bytebreeze.xyz/"}
        />
        <ProjectsCard
          title="Expense Planner"
          des="A fully fledged Note taking app which allows you to take notes and allows you to upload multiple images for a single note also consists of a text editor that allows you to choose the text styling"
          src={projectTwo}
          gitUrl={"https://github.com/AnkitKumar8080/Expense-planner.git"}
          webUrl={"https://notes.bytebreeze.xyz/"}
        />
        <ProjectsCard
          title="Note Taking App"
          des=" A fully fledged Note taking app which allows you take your notes and also upload multiple images"
          src={projectThree}
          gitUrl={"https://github.com/AnkitKumar8080/mern-note-taking-app.git"}
          webUrl={"https://notes.bytebreeze.xyz/"}
        />
        <ProjectsCard
          title="Video Transcoder"
          des=" A fully featured video Transcoder capable of encoding vides from h265 to h264, also capable of selecting a particular language for the video to be encoded"
          src={projectOne}
          gitUrl={"https://github.com/AnkitKumar8080/mern-note-taking-app.git"}
          webUrl={"https://notes.bytebreeze.xyz/"}
        />
        <ProjectsCard
          title="Expense Planner"
          des="A fully fledged Note taking app which allows you to take notes and allows you to upload multiple images for a single note also consists of a text editor that allows you to choose the text styling"
          src={projectTwo}
          gitUrl={"https://github.com/AnkitKumar8080/Expense-planner.git"}
          webUrl={"https://notes.bytebreeze.xyz/"}
        />
        <ProjectsCard
          title="Note Taking App"
          des=" A fully fledged Note taking app which allows you take your notes and also upload multiple images"
          src={projectThree}
          gitUrl={"https://github.com/AnkitKumar8080/mern-note-taking-app.git"}
          webUrl={"https://notes.bytebreeze.xyz/"}
        />
      </div>
    </section>
  );
};

export default Projects;
