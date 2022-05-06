import { Project } from "wrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface ProjectBoxProps {
  data: Project;
}

export const ProjectBox: React.FC<ProjectBoxProps> = ({
  children,
  data,
}) => {
  const { replace, push } = useRouter();

  return (
    <Link href={`/project/${data.id}`} passHref={true}>
    <a
      className="flex-none text-left truncate transition border border-gray-700 rounded-5 hover:border-white relative"
    >
      <div className="relative" style={{
        zIndex: 1
      }}>
        <div className="px-2 pt-1.5 flex flex-row items-center">
          <div className="rounded-full h-1 w-1 bg-success mr-0.25 shadow-c-10 shadow-success">
            {/* 0 0px 20px 1px var(--tw-shadow-color), 0 0px 0px 0px #00ff1c */}
          </div>
          <h4 className="font-semibold ml-0.25">{data.name}</h4>
        </div>
        <p
          className="text-gray-600 uppercase truncate px-2 mb-1.5"
          style={{
            fontSize: "10px",
          }}
        >
          {data.id}
        </p>
        {/* Spacin below text */}
        <div className="h-6" style={{
          backgroundColor: "rgba(12,13,14,0.5)",
        }}></div>
      </div>
      {/* Background Gradients */}
      <div className="absolute h-full w-full z-0 top-0" style={{
        background: `radial-gradient(circle, rgba(43,38,54,1) 0%, rgba(24,22,28,1) 60%, rgba(12,13,14,1) 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}></div>
    </a>
    </Link>
  );
};
