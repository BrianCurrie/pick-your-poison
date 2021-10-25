import { render } from '@testing-library/react';
import App from '../App';

jest.mock('../components/MobileDisplay', () => () => (
    <div data-testid="mobile-display" />
));
jest.mock('../components/DesktopDisplay', () => () => (
    <div data-testid="desktop-display" />
));

describe('renders based on screen width', () => {
    test('Mobile display', () => {
        global.innerWidth = 500;
        const { getByTestId } = render(<App />);
        expect(getByTestId(/mobile-display/)).toBeInTheDocument();
    });
    test('Desktop display', () => {
        global.innerWidth = 1200;
        const { getByTestId } = render(<App />);
        expect(getByTestId(/desktop-display/)).toBeInTheDocument();
    });
});
