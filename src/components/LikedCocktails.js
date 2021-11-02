import style from './LikedCocktails.module.css';

export default function LikedCocktails(props) {
    const btns = props.likedList.map((cocktail) => (
        <button className={style.cocktail} key={cocktail.name}>
            <div className={style.thumbnail}>
                <img
                    className={style.thumbnail_image}
                    src={cocktail.thumbnail}
                    alt={cocktail.name}
                />
            </div>
            <div className={style.info_container}>
                <div className={style.name}>{cocktail.name}</div>
                <div className={style.category}>{cocktail.category}</div>
            </div>
        </button>
    ));

    return <div className={style.list}>{btns}</div>;
}
