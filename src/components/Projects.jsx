import { useState } from "react"
import {
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiPython
} from "react-icons/si"

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            number: "01",
            title: "Energy Consumption Tracker",
            category: "Web Development",
            description:
                "A web application designed to help households monitor and understand their energy consumption.",
            image: "/projects/energy-tracker.png",
            technologies: [
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: "CSS" },
                { name: "JavaScript", icon: <SiJavascript /> }
            ],
            github: "https://github.com/",
            demo: null
        },
        {
            number: "02",
            title: "Smart Campus Information System",
            category: "Full Stack",
            description:
                "A system designed to provide useful campus information and services for students.",
            image: "/projects/smart-campus.png",
            technologies: [
                { name: "React", icon: <SiReact /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ],
            github: "https://github.com/",
            demo: null
        },
        {
            number: "03",
            title: "World of Snakes",
            category: "Game Development",
            description:
                "A browser-based snake game built with Python and Pygame, featuring a futuristic interface and interactive gameplay.",
            image: "/projects/world-of-snakes.png",
            technologies: [
                { name: "Python", icon: <SiPython /> },
                { name: "Pygame", icon: "🎮" },
                { name: "JavaScript", icon: <SiJavascript /> }
            ],
            github:
                "https://github.com/saikumarpyatishettar/world-of-snakes",
            demo: null
        }
    ]

    return (
        <section id="projects" className="projects">

            <div className="section-title">
                <p>MY WORK</p>
                <h2>Featured Projects</h2>
                <span className="section-description">
                    A selection of projects I've built while learning
                    and exploring software development.
                </span>
            </div>

            <div className="projects-list">

                {projects.map((project, index) => (
                    <article
                        className={`project-showcase ${
                            index % 2 !== 0
                                ? "project-reverse"
                                : ""
                        }`}
                        key={project.number}
                    >

                        <button
                            className="project-click-area"
                            onClick={() => setSelectedProject(project)}
                            aria-label={`View ${project.title} details`}
                        >
                            <div className="project-image">

                                <div className="project-image-number">
                                    {project.number}
                                </div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                />

                                <div className="project-image-overlay">
                                    <span>VIEW PROJECT</span>
                                </div>

                            </div>
                        </button>

                        <div className="project-info">

                            <span className="project-category">
                                {project.category}
                            </span>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="project-tech">

                                {project.technologies.map(
                                    (technology) => (
                                        <span key={technology.name}>
                                            <span className="project-tech-icon">
                                                {technology.icon}
                                            </span>
                                            {technology.name}
                                        </span>
                                    )
                                )}

                            </div>

                            <div className="project-actions">

                                <button
                                    className="project-details-button"
                                    onClick={() =>
                                        setSelectedProject(project)
                                    }
                                >
                                    View Details
                                    <span>↗</span>
                                </button>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-github"
                                >
                                    GitHub
                                    <span>↗</span>
                                </a>

                            </div>

                        </div>

                    </article>
                ))}

            </div>

            {selectedProject && (
                <div
                    className="project-modal"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="project-modal-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className="project-modal-close"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close project details"
                        >
                            ×
                        </button>

                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                        />

                        <div className="project-modal-body">

                            <span>
                                {selectedProject.category}
                            </span>

                            <h3>{selectedProject.title}</h3>

                            <p>{selectedProject.description}</p>

                            <div className="project-modal-tech">
                                {selectedProject.technologies.map(
                                    (technology) => (
                                        <span key={technology.name}>
                                            {technology.icon}
                                            {technology.name}
                                        </span>
                                    )
                                )}
                            </div>

                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-modal-github"
                            >
                                View on GitHub ↗
                            </a>

                        </div>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Projects