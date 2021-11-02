import { render, screen } from '@testing-library/react';
import MobileSwipe from '../components/MobileSwipe';
import CocktailCard from '../components/CocktailCard';
import cocktailData from '../__mocks__/cocktailData';
import userEvent from '@testing-library/user-event';

function createCocktailCard() {
    let data = [cocktailData()];
    return [...data].map((drink) => (
        <CocktailCard key={drink.id} cardInfo={drink} onCardLoad={() => {}} />
    ));
}

describe('Loading and displaying correct data', () => {
    const cocktailCards = createCocktailCard();

    test('display loading', () => {
        const { container } = render(
            <MobileSwipe
                isLoading={true}
                display="cocktails"
                onToggleViewClick={() => {}}
                dislike={() => {}}
                like={() => {}}
                cocktailCards={cocktailCards}
            />
        );
        expect(container.getElementsByClassName('loading').length).toBe(1);
    });

    test('display card', () => {
        const { container } = render(
            <MobileSwipe
                isLoading={false}
                display="cocktails"
                onToggleViewClick={() => {}}
                dislike={() => {}}
                like={() => {}}
                cocktailCards={cocktailCards}
            />
        );

        expect(screen.queryByText('CocktailName')).toBeInTheDocument();
        expect(container.getElementsByClassName('loading').length).toBe(0);
    });
});

describe('Buttons firing correctly', () => {
    const cocktailCards = createCocktailCard();

    test('like button', () => {
        let counter = 0;
        render(
            <MobileSwipe
                isLoading={false}
                display="cocktails"
                onToggleViewClick={() => {}}
                dislike={() => {}}
                like={() => {
                    counter++;
                }}
                cocktailCards={cocktailCards}
            />
        );
        const likeBtn = screen.getByAltText('like').parentElement;
        userEvent.click(likeBtn);
        expect(counter).toBe(1);
    });

    test('dislike button', () => {
        let counter = 0;
        render(
            <MobileSwipe
                isLoading={false}
                display="cocktails"
                onToggleViewClick={() => {}}
                dislike={() => {
                    counter++;
                }}
                like={() => {}}
                cocktailCards={cocktailCards}
            />
        );
        const dislikeBtn = screen.getByAltText('dislike').parentElement;
        userEvent.click(dislikeBtn);
        expect(counter).toBe(1);
    });

    test('toggle display button', () => {
        let counter = 0;
        render(
            <MobileSwipe
                isLoading={false}
                display="cocktails"
                onToggleViewClick={() => {
                    counter++;
                }}
                dislike={() => {}}
                like={() => {}}
                cocktailCards={cocktailCards}
            />
        );
        const toggleDisplay = screen.getByAltText('toggle drink').parentElement;
        userEvent.click(toggleDisplay);
        expect(counter).toBe(1);
    });
});
