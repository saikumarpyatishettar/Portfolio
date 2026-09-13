function Projects() {
    const projects = [
        {
            title: "Energy Consumption Tracker",
            description:
                "A web application designed to help households monitor and understand their energy consumption.",
            technologies: "HTML • CSS • JavaScript",
            github: "https://github.com/",
            demo: "#"
        },
        {
            title: "Smart Campus Information System",
            description:
                "A system designed to provide useful campus information and services for students.",
            technologies: "React • Node.js • MongoDB",
            github: "https://github.com/",
            demo: "#"
        },
        {
            title: "Fire Fighting Robot",
            description:
                "A robotics project that uses sensors and a control system to detect and respond to fire.",
            technologies: "Arduino • Sensors • C++",
            github: "https://github.com/",
            demo: "#"
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="section-title">
                <p>MY WORK</p>
                <h2>Projects</h2>
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <span>{project.technologies}</span>

                        <div className="project-buttons">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects