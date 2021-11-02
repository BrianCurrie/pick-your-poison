import dislikeImg from '../images/dislike.png';
import likeImg from '../images/like.png';
import style from './CardVote.module.css';

export default function CardVote(props) {
    return (
        <div className={style.container}>
            <div className={style.btn_container}>
                <button className={style.btn} onClick={props.dislike}>
                    <img src={dislikeImg} alt="dislike" />
                </button>
                <button className={style.btn} onClick={props.like}>
                    <img src={likeImg} alt="like" />
                </button>
            </div>
        </div>
    );
}
