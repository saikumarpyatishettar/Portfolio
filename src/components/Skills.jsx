import {
    SiCplusplus,
    SiPython,
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb
} from "react-icons/si"

function Skills() {
    const skillCategories = [
        {
           title: "Programming",
            description: "Languages I use for problem solving and development.",
            focus: "Core Fundamentals",
            skills: [
                { name: "C++", icon: <SiCplusplus /> },
                { name: "Python", icon: <SiPython /> },
                { name: "Java", icon: "☕" }
            ]
        },
        {
            title: "Frontend",
            description: "Technologies I use to build responsive web interfaces.",
            focus:"Web Development",
            skills: [
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: "CSS" },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "React", icon: <SiReact /> }
            ]
        },
        {
            title: "Backend & Database",
            description: "Technologies I use for full-stack development.",
            focus:"Full Stack",
            skills: [
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ]
        }
    ]

    return (
        <section id="skills" className="skills">

            <div className="section-title">
                <p>MY TECHNOLOGIES</p>
                <h2>Tech Stack</h2>

                <span className="section-description">
                    Technologies and tools I use while building projects
                    and improving my development skills.
                </span>
            </div>

            <div className="skills-categories">

                {skillCategories.map((category) => (
                    <div
                        className="skill-category"
                        key={category.title}
                    >

                        <h3>{category.title}</h3>
                        <span className="skill-focus">
                            {category.focus}
                        </span>
                        <p className="skill-description">
                            {category.description}
                        </p>

                        <div className="skills-list">

                            {category.skills.map((skill) => (
                                <div
                                    className="skill-item"
                                    key={skill.name}
                                >
                                    <div className="skill-icon">
                                        {skill.icon}
                                    </div>

                                    <span>
                                        {skill.name}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Skills