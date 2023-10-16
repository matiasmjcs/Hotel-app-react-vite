import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../../src/components/Footer"

describe('Footer', () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    })

    test("testing h2 and p elements", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const h2 = document.querySelector("h2")
        const p = document.querySelector("p")
        expect(h2).toBeInTheDocument()
        expect(p).toBeInTheDocument()
        expect(h2).toHaveTextContent("Personal Project")
        expect(p).toHaveTextContent(
            "This is a personal project to showcase my skills. The backend is hosted on Render on a shared server and goes to sleep when inactive, so it may take up to 30 seconds to wake up."
        )
    })

    test("testing contact elements", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const h2 = screen.getByText("Contact")
        const email = screen.getByTestId("email")
        const linkedin = screen.getByTestId("linkedin")
        expect(h2).toBeInTheDocument()
        expect(email).toBeInTheDocument()
        expect(linkedin).toBeInTheDocument()
        expect(email).toHaveTextContent("Email: matiasmejiascisternas@gmail.com")
        expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/matias-mejias-cisternas")
        expect(linkedin).toHaveAttribute("target", "_blank")
        expect(linkedin).toHaveTextContent("Your Profile")
        expect(linkedin).toHaveClass("text-blue-300 hover:underline")
    })
})