import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Loginsignup } from '../Login-signup';

describe('LoginSignup', () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <Loginsignup />
            </BrowserRouter>
        )
    })
})