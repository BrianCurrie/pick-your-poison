import CocktailCard from './CocktailCard';
import CardVote from './CardVote';
import './MobileDisplay.css';
import ToggleView from './ToggleView';

export default function MobileDisplay(props) {
    const nameEles = props.cocktailStack.map((drink) => (
        <CocktailCard key={drink.id} cardInfo={drink} />
    ));
    return (
        <div className="mobileDisplay">
            <ToggleView />
            {nameEles}
            <CardVote />
        </div>
    );
}
