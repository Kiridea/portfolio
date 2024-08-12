import './ProjectCard.css'
import { Link } from 'react-router-dom'

function ProjectCard() {
    return(
        <Link to="/projects/:projectId">
            <li className="project-card">
                <img className="project-icon" src="" alt="project icon" />
            </li>
        </Link>
    )
}

export default ProjectCard