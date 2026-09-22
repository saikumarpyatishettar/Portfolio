function About() {
    return (
        <section id="about" className="about">

            <div className="section-title">
                <p>ABOUT ME</p>
                <h2>Who I Am</h2>
                <span className="section-description">
                    A little about my journey, interests, and what I'm
                    currently working toward.
                </span>
            </div>

            <div className="about-container">

                <div className="about-main">

                    <div className="about-number">
                        01
                    </div>

                    <h3>
                        Building my foundation in
                        <span> Computer Science</span>
                    </h3>

                    <p>
                        I'm a Computer Science Engineering student
                        interested in software development, problem solving,
                        and building practical projects.
                    </p>

                    <p>
                        I'm currently strengthening my programming
                        fundamentals, practicing Data Structures and
                        Algorithms, and developing full-stack web
                        applications to gain hands-on experience.
                    </p>

                    <p>
                        My approach is simple — learn consistently,
                        build real things, understand how they work,
                        and keep improving.
                    </p>

                    <div className="about-tags">
                        <span>Problem Solving</span>
                        <span>Continuous Learning</span>
                        <span>Building Projects</span>
                    </div>

                </div>

                <div className="about-side">

                    <div className="about-card">
                        <div className="about-card-icon">
                            &lt;/&gt;
                        </div>

                        <div>
                            <span>Currently Learning</span>
                            <h4>Full Stack Development</h4>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-icon">
                            #01
                        </div>

                        <div>
                            <span>Problem Solving</span>
                            <h4>Data Structures & Algorithms</h4>
                        </div>
                    </div>

                    <div className="about-card">
                        <div className="about-card-icon">
                            ⚡
                        </div>

                        <div>
                            <span>Approach</span>
                            <h4>Learn • Build • Improve</h4>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default About