import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LoginComponent } from '../../src/components/authentication/Login';

describe("Login", () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <LoginComponent />
            </BrowserRouter>)
    })
})