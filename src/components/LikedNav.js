import style from './LikedNav.module.css';
import heart from '../images/liked_heart.png';
import star from '../images/favorited_star.png';

export default function LikedNav(props) {
    const totalLiked = props.liked.length;
    const totalFavorited = props.liked.filter(
        (cocktail) => cocktail.favorite === true
    ).length;

    return (
        <div className={style.container}>
            <button className={`${style.liked} ${style.btn}`}>
                <img src={heart} alt="Liked" />
                <span className={style.number}>{totalLiked}</span>
            </button>
            <button className={`${style.favorited} ${style.btn}`}>
                <img src={star} alt="Favorited" />
                <span className={style.number}>{totalFavorited}</span>
            </button>
        </div>
    );
}
