function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">

                <div className="hero-status">
                    <span className="status-dot"></span>
                    Open to learning & building
                </div>

                <p className="hero-small">HELLO, I'M</p>

                <h1>Sai Kumar</h1>

                <h2>
                    Computer Science Engineering Student
                </h2>

                <p className="hero-description">
                    I build web applications, practice Data Structures
                    and Algorithms, and explore modern software
                    development technologies.
                </p>

                <p className="hero-focus">
                    Web Development • DSA • Software Development
                </p>

                <div className="hero-buttons">
                    <a href="#projects">
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="secondary-button"
                    >
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

            </div>
        </section>
    )
}

export default Hero