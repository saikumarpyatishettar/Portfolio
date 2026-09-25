function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-glow glow-one"></div>
                <div className="hero-glow glow-two"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="hero-container">

                <div className="hero-content">

                    <div className="hero-status">
                        <span className="status-dot"></span>
                        Open to learning & building
                    </div>

                    <p className="hero-small">
                        HELLO, I'M
                    </p>

                    <h1>
                        Sai <span>Kumar</span>
                    </h1>

                    <h2>
                        Computer Science Engineering Student
                    </h2>

                    <p className="hero-description">
                        I build modern web applications, solve problems
                        with Data Structures and Algorithms, and explore
                        software development through real-world projects.
                    </p>

                    <div className="hero-focus">
                        <span>Web Development</span>
                        <span>DSA</span>
                        <span>Software Development</span>
                    </div>

                    <div className="hero-buttons">
                        <a href="#projects" className="primary-button">
                            View Projects
                            <span>↗</span>
                        </a>

                        <a href="#contact" className="secondary-button">
                            Contact Me
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button"
                        >
                            View Resume
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div>
                            <strong>01+</strong>
                            <span>Years Learning</span>
                        </div>

                        <div>
                            <strong>03+</strong>
                            <span>Projects Built</span>
                        </div>

                        <div>
                            <strong>DSA</strong>
                            <span>Currently Practicing</span>
                        </div>
                    </div>

                </div>

                <div className="hero-visual">

                    <div className="hero-image-wrapper">

                        <div className="image-ring ring-one"></div>
                        <div className="image-ring ring-two"></div>

                        <div className="hero-photo-card">
                            <div className="hero-photo">
                            <img
                                src="/profile.png"
                                alt="Sai Kumar"
                            />
                            </div>
                        </div>

                        <div className="floating-card card-top">
                            <span>⚡</span>
                            <div>
                                <strong>Building</strong>
                                <small>Every day</small>
                            </div>
                        </div>

                        <div className="floating-card card-bottom">
                            <span>⌘</span>
                            <div>
                                <strong>Developer</strong>
                                <small>In progress</small>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="hero-scroll">
                <span>SCROLL TO EXPLORE</span>
                <div></div>
            </div>

        </section>
    )
}

export default Hero