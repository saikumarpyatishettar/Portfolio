function Projects() {
    const projects = [
        {
            title: "WORLD-OF-SNAKES",
            description:
                "A futuristic Snake game built with Python & Pygame, featuring power-ups, levels, particles, and a live browser demo.",
            technologies: ["Python", "Pygame", "Pybag"],
            github: "https://github.com/saikumarpyatishettar/world-of-snakes",
            demo: "https://saikumarpyatishettar.github.io/world-of-snakes/"
        },
        {
            title: "Amazon-Clone",
            description:
                "My first web development project — an Amazon homepage clone built using HTML, CSS, and Font Awesome to practice frontend development fundamentals.",
            technologies: ["HTML", "CSS"],
            github: "https://github.com/saikumarpyatishettar/Amazon-clone-html-css",
            demo: "https://saikumarpyatishettar.github.io/Amazon-clone-html-css/"
        },
        {
            title: "Fire Fighting Robot",
            description:
                "A robotics project that uses sensors and a control system to detect and respond to fire.",
            technologies: ["Arduino", "Sensors", "C++"],
            // github: "https://github.com/",
            // demo: "#"
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

                        <div className="project-number">
                            0{projects.indexOf(project) + 1}
                        </div>

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className="project-tech">
                            {project.technologies.map((technology) => (
                                <span key={technology}>
                                    {technology}
                                </span>
                            ))}
                        </div>

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