import { render } from '@testing-library/react'
import NavBarComponent from '../NavBar'
import { BrowserRouter } from 'react-router-dom'

describe('NavBarComponent', () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <NavBarComponent />
            </BrowserRouter>
        )
    })
})