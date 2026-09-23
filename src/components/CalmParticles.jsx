import { useEffect, useRef } from "react"

function CalmParticles() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current

        if (!container) return

        const particles = []

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement("span")

            particle.className = "calm-particle"

            particle.style.left = `${Math.random() * 100}%`
            particle.style.top = `${Math.random() * 100}%`
            particle.style.animationDelay = `${Math.random() * 8}s`
            particle.style.animationDuration = `${8 + Math.random() * 8}s`

            particles.push(particle)
            container.appendChild(particle)
        }

        return () => {
            particles.forEach((particle) => particle.remove())
        }
    }, [])

    return <div ref={containerRef} className="calm-particles"></div>
}

export default CalmParticles