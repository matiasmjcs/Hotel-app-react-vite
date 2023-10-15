import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Loginsignup } from '../LoginSignup';

describe('LoginSignup', () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <Loginsignup />
            </BrowserRouter>
        )
    })
})