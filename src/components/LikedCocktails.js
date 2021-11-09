import icon from '../images/empty_list_icon.png';
import style from './LikedCocktails.module.css';

export default function LikedCocktails(props) {
    const btns = props.likedList.map((cocktail) => (
        <button
            className={style.cocktail}
            key={cocktail.name}
            onClick={() => {
                props.onLikedBtnClick(cocktail);
            }}
        >
            <div
                className={
                    cocktail.favorite
                        ? style.thumbnail_favorte
                        : style.thumbnail
                }
            >
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

    const listEmpty = (
        <div className={style.empty_container}>
            <img src={icon} alt="Empty cocktail list icon" />
            <div className={style.empty_text}>
                <h2 className={style.empty_header}>Start Swiping</h2>
                <h3 className={style.empty_subtext}>
                    Your liked drinks will appear here
                </h3>
            </div>
        </div>
    );

    return (
        <div className={style.list}>{btns.length !== 0 ? btns : listEmpty}</div>
    );
}
