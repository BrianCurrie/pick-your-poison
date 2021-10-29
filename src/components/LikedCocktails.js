import './LikedCocktails.css';

export default function LikedCocktails(props) {
    const btns = props.likedList.map((cocktail) => (
        <button className="cocktail" key={cocktail.name}>
            <div className="cocktail__thumbnail">
                <img
                    className="cocktail__thumbnail__img"
                    src={cocktail.thumbnail}
                    alt={cocktail.name}
                />
            </div>
            <div className="cocktail__info">
                <div className="cocktail__info__name">{cocktail.name}</div>
                <div className="cocktail__info__category">
                    {cocktail.category}
                </div>
            </div>
        </button>
    ));

    return <div className="likedList">{btns}</div>;
}
