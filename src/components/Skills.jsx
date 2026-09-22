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
            number: "01",
            title: "Programming",
            description:
                "Languages I use for problem solving, DSA practice, and development.",
            skills: [
                { name: "C++", icon: <SiCplusplus /> },
                { name: "Python", icon: <SiPython /> },
                { name: "Java", icon: "☕" }
            ]
        },
        {
            number: "02",
            title: "Frontend",
            description:
                "Technologies I use to create responsive and interactive interfaces.",
            skills: [
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: "CSS" },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "React", icon: <SiReact /> }
            ]
        },
        {
            number: "03",
            title: "Backend & Database",
            description:
                "Technologies I use while building full-stack applications.",
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
                    Technologies I use while learning, experimenting,
                    and building projects.
                </span>
            </div>

            <div className="skills-grid">

                {skillCategories.map((category) => (
                    <div
                        className="skill-category"
                        key={category.number}
                    >

                        <div className="skill-category-top">
                            <span className="skill-number">
                                {category.number}
                            </span>

                            <span className="skill-line"></span>
                        </div>

                        <h3>{category.title}</h3>

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

                                    <span>{skill.name}</span>

                                    <span className="skill-arrow">
                                        ↗
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