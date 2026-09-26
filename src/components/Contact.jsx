import { useState } from "react"
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        setLoading(true)
        setStatus("")

        try {
            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message)
            }

            setStatus("Message sent successfully!")
            setFormData({
                name: "",
                email: "",
                message: ""
            })
        } catch (error) {
            setStatus(
                error.message || "Something went wrong. Please try again."
            )
        } finally {
            setLoading(false)
        }
    }

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

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >
                    <div className="contact-form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                        {!loading && <span>↗</span>}
                    </button>

                    {status && (
                        <p className="contact-status">
                            {status}
                        </p>
                    )}
                </form>

                <div className="contact-buttons">
                    <a href="mailto:saikumarpyatishettar@gmail.com">
                        <FaEnvelope />
                        Email
                    </a>

                    <a
                        href="https://github.com/saikumarpyatishettar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sai-kumar-m-p-b31073433/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact