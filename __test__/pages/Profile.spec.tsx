import { BrowserRouter } from "react-router-dom"
import { Profile } from "../../src/pages/Profile"
import { render } from "@testing-library/react"

describe("Profile", () => {
    test("renders the component", () => {
        render(
            <BrowserRouter>
                <Profile />
            </BrowserRouter>
        )
    })
})