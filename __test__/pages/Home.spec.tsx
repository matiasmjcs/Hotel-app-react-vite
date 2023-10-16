import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Home } from "../../src/pages/Home"

describe("Home", () => {
    test("renders the component", () => {
        render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )
    })
})