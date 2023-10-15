import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../Footer"

describe('Footer', () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    })
})