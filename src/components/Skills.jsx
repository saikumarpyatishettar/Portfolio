function Skills() {
    const skills = [
        "C++",
        "Java",
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB"
    ]

    return (
        <section id="skills" className="skills">
            <div className="section-title">
                <p>MY TECHNOLOGIES</p>
                <h2>Skills</h2>
            </div>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills