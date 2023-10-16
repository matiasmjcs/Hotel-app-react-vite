import { render } from "@testing-library/react"
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
})