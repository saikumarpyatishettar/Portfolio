import {
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiPython
} from "react-icons/si"

function Projects() {
    const projects = [
        {
            number: "01",
            title: "Energy Consumption Tracker",
            description:
                "A web application designed to help households monitor and understand their energy consumption.",
            image: "/projects/energy-tracker.png",
            technologies: [
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: "CSS" },
                { name: "JavaScript", icon: <SiJavascript /> }
            ],
            github: "https://github.com/",
            demo: "#"
        },
        {
            number: "02",
            title: "Smart Campus Information System",
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
            description:
                "A browser-based snake game built with Python and Pygame, featuring a futuristic interface and interactive gameplay.",
            image: "/projects/world-of-snakes.png",
            technologies: [
                { name: "Python", icon: <SiPython /> },
                { name: "Pygame", icon: "🎮" },
                { name: "JavaScript", icon: <SiJavascript /> }
            ],
            github:
                "https://github.com/saikumarpyatishettyar/world-of-snakes",
            demo: null
        }
    ]

    return (
        <section id="projects" className="projects">

            <div className="section-title">
                <p>MY WORK</p>

                <h2>Projects</h2>

                <span className="section-description">
                    Projects I have built while learning and exploring
                    software development.
                </span>
            </div>

            <div className="projects-grid">

                {projects.map((project) => (
                    <div
                        className="project-card"
                        key={project.number}
                    >

                        <div className="project-preview">

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                            <div className="project-overlay">
                                <span>View Project</span>
                            </div>

                        </div>

                        <div className="project-number">
                            {project.number}
                        </div>

                        <h3>
                            {project.title}
                        </h3>

                        <p>
                            {project.description}
                        </p>

                        <div className="project-tech">

                            {project.technologies.map((technology) => (
                                <span key={technology.name}>

                                    <span className="project-tech-icon">
                                        {technology.icon}
                                    </span>

                                    {technology.name}

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

    {project.demo !== "#" && (
        <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
        >
            Live Demo
        </a>
    )}
</div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Projects