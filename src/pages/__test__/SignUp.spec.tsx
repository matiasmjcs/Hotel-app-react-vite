import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { SignUp } from "../SignUp"

describe("SignUp", () => {
    test("renders the component", () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
    })
})