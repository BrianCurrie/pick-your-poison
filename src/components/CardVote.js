import dislikeImg from '../images/dislike.png';
import likeImg from '../images/like.png';
import './CardVote.css';

export default function CardVote() {
    return (
        <div className="vote">
            <div className="vote__btns">
                <button className="vote__btns__btn">
                    <img src={dislikeImg} alt="dislike" />
                </button>
                <button className="vote__btns__btn">
                    <img src={likeImg} alt="like" />
                </button>
            </div>
        </div>
    );
}
