import { render } from '@testing-library/react';
import CocktailCard from '../components/CocktailCard';
import cocktailData from '../__mocks__/cocktailData';

test('cocktail card displays cardInfo', () => {
    const data = cocktailData();
    const container = render(<CocktailCard cardInfo={data} />);
    const img = container.getByRole('img', { name: 'CocktailName' });
    const headings = container.getAllByRole('heading');
    const table = container.getByRole('table');

    expect(img).toBeInTheDocument();
    expect(headings[0]).toHaveTextContent('CocktailName');
    expect(headings[1]).toHaveTextContent('Instructions');
    expect(table).toBeInTheDocument();

    const text = [
        'Catagory',
        'Glass',
        'Alcoholic',
        'Ingredient0',
        'Ingredient1',
        'Ingredient2',
        'Measure0',
        'Measure1',
        'Measure2',
    ];

    text.forEach((val) => {
        expect(container.getByText(val)).toBeInTheDocument();
    });
});

test('cocktail card throws error if incorrect props passed', () => {
    const consoleError = console.error;
    console.error = jest.fn(); // Mock console error to silence log
    expect(() => render(<CocktailCard />)).toThrow();
    console.error = consoleError; // Return console error to normal
});
