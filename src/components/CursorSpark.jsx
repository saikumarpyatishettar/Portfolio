import { useEffect, useRef } from "react"

function CursorSpark() {
    const containerRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!containerRef.current) return

            const spark = document.createElement("span")

            spark.className = "cursor-spark"

            const size = Math.random() * 5 + 3
            const angle = Math.random() * Math.PI * 2
            const distance = Math.random() * 35 + 10

            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance

            spark.style.width = `${size}px`
            spark.style.height = `${size}px`
            spark.style.left = `${event.clientX}px`
            spark.style.top = `${event.clientY}px`
            spark.style.setProperty("--x", `${x}px`)
            spark.style.setProperty("--y", `${y}px`)

            containerRef.current.appendChild(spark)

            setTimeout(() => {
                spark.remove()
            }, 700)
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return <div ref={containerRef} className="cursor-spark-container"></div>
}

export default CursorSpark