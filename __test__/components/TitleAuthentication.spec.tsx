import { render } from '@testing-library/react'
import { TitleAuthentication } from '../../src/components/authentication/TitleAuthentication'
import { BrowserRouter } from 'react-router-dom'

describe('TitleAuthentication', () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <TitleAuthentication title="title for testing" />
            </BrowserRouter>
        )
    })
})