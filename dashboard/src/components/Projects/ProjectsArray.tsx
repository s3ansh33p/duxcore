import { Project } from "wrapper";
import React, { useEffect, useState } from "react";
import { useWrapper } from "../../context/WrapperProvider";
import { ProjectBox } from "./ProjectBox";

interface ProjectsArrayProps {}

export const ProjectsArray: React.FC<ProjectsArrayProps> = ({
  children,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const wrapper = useWrapper();

  useEffect(() => {
    wrapper.api.projects.list().then(setProjects);
  }, []);

  return (
    // Header
    <div>
      <div className="mb-2">
        <h4 className="font-semibold">Goldyplace</h4>
        <p style={{
          fontSize: "14px",
        }}>consectetur adipiscing elit, sed</p>
      </div>
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))" }}
        >
        {projects.map((project) => (
          <ProjectBox key={project.id} data={project} />
          ))}
      </div>
    </div>
  );
};
