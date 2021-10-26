import { render } from '@testing-library/react';
import App from '../App';

jest.mock('../components/MobileDisplay', () => () => (
    <div data-testid="mobile-display" />
));
jest.mock('../components/DesktopDisplay', () => () => (
    <div data-testid="desktop-display" />
));

describe('Renders based on screen width', () => {
    test('mobile display on initial load', () => {
        global.innerWidth = 500;
        const { getByTestId } = render(<App />);
        expect(getByTestId(/mobile-display/)).toBeInTheDocument();
    });
    test('desktop display', () => {
        global.innerWidth = 1200;
        const { getByTestId } = render(<App />);
        expect(getByTestId(/desktop-display/)).toBeInTheDocument();
    });
    test('resize display', () => {
        global.innerWidth = 100;
        const { getByTestId } = render(<App />);
        expect(getByTestId(/mobile-display/)).toBeInTheDocument();
        global.innerWidth = 1200;
        render(<App />);
        expect(getByTestId(/desktop-display/)).toBeInTheDocument();
    });
});
