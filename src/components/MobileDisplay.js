import CocktailCard from './CocktailCard';

export default function MobileDisplay(props) {
    const nameEles = props.cocktailStack.map((drink) => (
        <CocktailCard key={drink.id} cardInfo={drink} />
    ));
    return <div>{nameEles}</div>;
}
