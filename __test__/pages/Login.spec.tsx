import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Login } from "../../src/pages/Login"

describe("Login", () => {
    test("renders the component", () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
    })
})