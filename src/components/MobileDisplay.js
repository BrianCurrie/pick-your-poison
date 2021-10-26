export default function MobileDisplay(props) {
    const nameEles = props.cocktailStack.map((drink) => (
        <div key={drink.id}>{drink.name}</div>
    ));
    console.log(props.cocktailStack);
    return <div>{nameEles}</div>;
}
