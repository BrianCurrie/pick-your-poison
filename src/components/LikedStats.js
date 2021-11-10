import style from './LikedStats.module.css';
import heart from '../images/liked_heart.png';
import star from '../images/favorite.svg';

export default function LikedNav(props) {
    const totalLiked = props.liked.length;
    const totalFavorited = props.liked.filter(
        (cocktail) => cocktail.favorite === true
    ).length;

    return (
        <div className={style.container}>
            <div className={`${style.liked} ${style.info_container}`}>
                <img src={heart} alt="Liked" />
                <span className={style.number}>{totalLiked}</span>
            </div>
            <div className={`${style.favorited} ${style.info_container}`}>
                <img src={star} alt="Favorited" />
                <span className={style.number}>{totalFavorited}</span>
            </div>
        </div>
    );
}
