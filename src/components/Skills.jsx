function Skills() {
    const skillCategories = [
        {
            title: "Programming",
            skills: ["C++", "Java", "Python"]
        },
        {
            title: "Web Development",
            skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
        },
        {
            title: "Database",
            skills: ["MongoDB"]
        }
    ]

    return (
        <section id="skills" className="skills">

            <div className="section-title">
                <p>MY TECHNOLOGIES</p>
                <h2>Skills</h2>
            </div>

            <div className="skills-categories">

                {skillCategories.map((category) => (
                    <div className="skill-category" key={category.title}>

                        <h3>{category.title}</h3>

                        <div className="skills-list">
                            {category.skills.map((skill) => (
                                <span className="skill-tag" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Skills