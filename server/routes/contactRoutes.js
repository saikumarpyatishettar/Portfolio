const express = require("express")
const Contact = require("../models/Contact")

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailPattern.test(email)) {
            return res.status(400).json({
                message: "Please enter a valid email address"
            })
        }

        if (name.trim().length < 2) {
            return res.status(400).json({
                message: "Name must contain at least 2 characters"
            })
        }

        if (message.trim().length < 10) {
            return res.status(400).json({
                message: "Message must contain at least 10 characters"
            })
        }

        if (message.trim().length > 2000) {
            return res.status(400).json({
                message: "Message is too long"
            })
        }

        const contact = await Contact.create({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim()
        })

        res.status(201).json({
            message: "Message sent successfully",
            contact
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to save message"
        })
    }
})

module.exports = router