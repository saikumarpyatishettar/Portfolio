function Achievements() {
    const achievements = [
        {
            number: "01",
            title: "NDA Written Examination",
            description:
                "Successfully cleared the NDA written examination."
        },
        {
            number: "02",
            title: "DSA Practice",
            description:
                "Consistently practicing Data Structures and Algorithms to strengthen problem-solving skills."
        },
        {
            number: "03",
            title: "Technical Projects",
            description:
                "Built academic and personal projects to gain practical software development experience."
        },
        {
            number: "04",
            title: "Technical Activities",
            description:
                "Participated in college and technical activities to develop teamwork and problem-solving skills."
        }
    ]

    return (
        <section id="achievements" className="achievements">

            <div className="section-title">
                <p>MY HIGHLIGHTS</p>
                <h2>Achievements</h2>
            </div>

            <div className="achievements-grid">

                {achievements.map((achievement) => (
                    <div
                        className="achievement-card"
                        key={achievement.number}
                    >

                        <span className="achievement-number">
                            {achievement.number}
                        </span>

                        <h3>
                            {achievement.title}
                        </h3>

                        <p>
                            {achievement.description}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Achievements