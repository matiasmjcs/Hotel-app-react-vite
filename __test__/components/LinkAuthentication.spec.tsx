import { render } from '@testing-library/react'
import { LinkAuthentication } from '../../src/components/authentication/LinkAuthentication'
import { BrowserRouter } from 'react-router-dom'

describe('LinkAuthentication', () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <LinkAuthentication href="/login" text="title for testing" />
            </BrowserRouter>
        )
    })
})