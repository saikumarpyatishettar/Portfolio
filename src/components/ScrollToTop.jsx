import { useEffect, useState } from "react"

function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if (!visible) {
        return null
    }

    return (
        <button
            className="scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    )
}

export default ScrollToTop