import { Routes, Route } from 'react-router';
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorPage';
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import QueryStringExamplePage from './pages/QueryStringExamplePage';
import Navbar from './components/Navbar';
import projectsData from "./projects-data.json"; 
import './App.css';
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePageWithNavigate />} />
        <Route path='example' element={<QueryStringExamplePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='projects' element={<ProjectsPage projects={projectsData} />} />
        <Route 
          path="/projects/:projectId" 
          element={ <ProjectDetailsPage /> } 
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;