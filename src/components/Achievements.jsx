function Achievements() {
    const achievements = [
        {
            title: "NDA Written Examination",
            description:
                "Successfully cleared the NDA written examination."
        },
        {
            title: "DSA Practice",
            description:
                "Regularly solving Data Structures and Algorithms problems."
        },
        {
            title: "Technical Projects",
            description:
                "Built academic and personal projects while developing practical programming skills."
        },
        {
            title: "Technical Activities",
            description:
                "Participated in technical and college activities to develop teamwork and problem-solving skills."
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
                        key={achievement.title}
                    >
                        <h3>{achievement.title}</h3>

                        <p>{achievement.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Achievements