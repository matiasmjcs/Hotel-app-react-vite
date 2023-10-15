import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { render } from '@testing-library/react';

describe('App', () => {
    test('renders the component', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    })
})