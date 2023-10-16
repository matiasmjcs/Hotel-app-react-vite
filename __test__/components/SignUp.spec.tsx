import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {SignUpComponent} from '../../src/components/authentication/SignUp';

describe('SignUp', () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <SignUpComponent />
            </BrowserRouter>
        )
    })
})