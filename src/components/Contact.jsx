import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa"


function Contact() {
    return (
        <section id="contact" className="contact">

            <div className="section-title">
                <p>GET IN TOUCH</p>
                <h2>Let's Connect</h2>

                <span className="section-description">
                    Interested in working together, discussing a project,
                    or simply connecting? Feel free to reach out.
                </span>
            </div>

            <div className="contact-content">

                <p>
                    I'm always interested in learning, building projects,
                    and connecting with other developers and students.
                </p>

                <div className="contact-buttons">

                    <a href="mailto:saikumarpyatishettar@gmail.com">
                        <FaEnvelope/>
                        Email
                    </a>

                    <a
                        href="https://github.com/saikumarpyatishettar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub/>
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sai-kumar-m-p-b31073433/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin/>
                        LinkedIn
                    </a>

                </div>

            </div>

        </section>
    )
}

export default Contact