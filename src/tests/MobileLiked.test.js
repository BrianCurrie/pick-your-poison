import { render, screen } from '@testing-library/react';
import MobileLiked from '../components/MobileLiked';
import cocktailData from '../__mocks__/cocktailData';
import userEvent from '@testing-library/user-event';

const data = [cocktailData()];

describe('Loading and displaying correct data', () => {
    test('display loading', () => {
        const { container } = render(
            <MobileLiked
                isLoading={true}
                display={'cocktailList'}
                onToggleViewClick={() => {}}
                likedList={data}
            />
        );

        expect(container.getElementsByClassName('loading').length).toBe(1);
    });

    test('display liked list after loading', () => {
        const { container } = render(
            <MobileLiked
                isLoading={false}
                display={'cocktailList'}
                onToggleViewClick={() => {}}
                likedList={data}
            />
        );

        expect(screen.getByText('CocktailName')).toBeInTheDocument();
        expect(container.getElementsByClassName('loading').length).toBe(0);
    });
});

test('toggle display button', () => {
    let counter = 0;
    render(
        <MobileLiked
            isLoading={false}
            display={'cocktailList'}
            onToggleViewClick={() => {
                counter++;
            }}
            likedList={data}
        />
    );
    const toggleDisplay = screen.getByAltText('toggle drink').parentElement;
    userEvent.click(toggleDisplay);
    expect(counter).toBe(1);
});
