import React from "react";
import { projectInfo } from "@/data";
import CoolCard from "@/components/CoolCard";

interface ProjectInfo {
  [key: string]: { title: string; text: string }[];
}

const Project = ({ params }: { params: any }) => {
  return (
    <div className="flex w-full min-h-screen justify-evenly p-24">
      <div className="flex flex-row gap-5 ">
        {(projectInfo as ProjectInfo)[params.projectname].map((card, index) => (
          <CoolCard key={index} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default Project;
