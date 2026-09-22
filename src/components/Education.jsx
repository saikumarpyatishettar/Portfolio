function Education() {
    return (
        <section id="education" className="education">
            <div className="section-title">
                <p>MY JOURNEY</p>
                <h2>Education</h2>
                <span className="section-description">
                    My academic journey and current area of study.
                </span>
            </div>

            <div className="education-container">
                <div className="education-line"></div>

                <div className="education-item">
                    <div className="education-marker">
                        <span></span>
                    </div>

                    <div className="education-card">
                        <div className="education-card-header">
                            <span className="education-number">
                                01
                            </span>

                            <span className="education-status">
                                Currently Pursuing
                            </span>
                        </div>

                        <div className="education-year">
                            2025 — Present
                        </div>

                        <h3>
                            B.E. Computer Science Engineering
                        </h3>

                        <h4>
                            Dayananda Sagar College of Engineering
                        </h4>

                        <p>
                            Currently pursuing my Bachelor's degree in
                            Computer Science Engineering while developing
                            strong foundations in programming, Data
                            Structures and Algorithms, web development,
                            and software engineering.
                        </p>

                        <div className="education-focus">
                            <span>Programming</span>
                            <span>DSA</span>
                            <span>Web Development</span>
                            <span>Software Engineering</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education