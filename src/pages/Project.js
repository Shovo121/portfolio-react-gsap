import { useRef, useState } from "react"
import { useProjectDate, useProjectLine, useProjectNumber, useProjectText, useProjectTools, useTitlesDownfall } from "../hooks/gsap";

const data = [
  {
    id: 1,
    number: "01",
    title: "React Todo App",
    date: "Nov/22",
    tools: "React - Tailwind CSS",
  },
  {
    id: 2,
    number: "02",
    title: "Immemorial",
    date: "Dec/22",
    tools: "React - React Router - GSAP - CSS",
  },
  {
    id: 3,
    number: "03",
    title: "Tech Alpha",
    date: "Jan/23",
    tools: "React - React Router - Redux - Tailwind CSS",
  },
  // {
  //   id: 4,
  //   number: "04",
  //   title: "React Todo App",
  //   date: "Nov/22",
  //   tools: "React - Tailwind CSS",
  // },
];
const colors = ["#db4c44", "#32b8cb", "#00ad6f"];
const Project = () => {
  const [currentProject, setCurrentProject] = useState(null)
  const projectTitle = useRef(null);
  const titles1 = useRef(null);
  const titles2 = useRef(null);
  const projectLine = useRef([]);
  const projectText = useRef([]);
  const projectNumber = useRef([]);
  const projectDate = useRef([]);
  const projectTools = useRef([]);

  const titlesArr = [titles1, titles2];

  useTitlesDownfall(titlesArr, projectTitle);
  useProjectLine(projectLine.current, projectTitle);
  useProjectText(projectText.current, projectTitle);
  useProjectNumber(projectNumber.current, projectTitle);
  useProjectDate(projectDate.current, projectTitle);
  useProjectTools(projectTools.current, projectTitle);
 
  const projectStyle ={
    backgroundColor: colors[currentProject],
  };
  const handleProjectColor = (i)=>{
    setCurrentProject(i)
  }
  return (
    <div className="project-section" ref={projectTitle}>
      <div className="titles">
        <span ref={titles1}>Selected Works (2022 - 2023)</span>
        <span ref={titles2}>Projects</span>
      </div>
      <div className="projects-list-wrapper" style={projectStyle}>
        {
          data.map((Project, i) => (
            <div className="project-wrapper" key={Project.id}>
              <div className="project-item"
                onMouseOver={()=> handleProjectColor(i)}
              >
                <div className="project-titles">
                  <span ref={(el)=> projectNumber.current[i] = el}>{Project.number}</span>
                  <h2 className="single-h" ref={(el)=> projectText.current[i] = el}>{Project.title}</h2>
                  
                  <h2 className="multiple-h">{Project.title} - {Project.title} - {Project.title}</h2>
                </div>
                <div className="project-details">
                  <span ref={(el)=> projectDate.current[i] = el}>{Project.date}</span>
                  <span ref={(el)=> projectTools.current[i] = el}>{Project.tools}</span>
                </div>
              </div>

              <hr ref={(el)=> projectLine.current[i] = el}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Project