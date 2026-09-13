function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="section-title">
                <p>GET IN TOUCH</p>
                <h2>Contact Me</h2>
            </div>

            <div className="contact-content">
                <p>
                    Have a project idea or want to connect?
                    Feel free to reach out to me.
                </p>

                <div className="contact-buttons">
                    <a href="mailto:saikumarpyatishettar@gmail.com">
                        Email Me
                    </a>

                    <a
                        href="https://github.com/saikumarpyatishettar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/feed/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact