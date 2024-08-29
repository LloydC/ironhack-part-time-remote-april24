import { useState, useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import { LanguageContext } from "../context/language.context";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projects-data.json";
import Content from '../translations.json' 

function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);
  const { theme } = useContext(ThemeContext);
  const { currentLanguage } = useContext(LanguageContext)
  return (
    <div className={`ProjectsPage ${theme}`}>
      <h1>{Content[0][currentLanguage].projectsPage.pageTitle}</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
 
export default ProjectsPage;