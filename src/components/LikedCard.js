import CocktailCard from './CocktailCard';
import ToggleView from './ToggleView';
import back from '../images/back.png';
import style from './LikedCard.module.css';
import mobile from './MainMobile.module.css';

export default function LikedCard(props) {
    return (
        <div className={mobile.container}>
            <ToggleView
                display={props.display}
                onToggleViewClick={props.onToggleViewClick}
            />
            <CocktailCard cardInfo={props.cardInfo} zIndex="3" />
            <button className={style.backBtn} onClick={props.onBackBtnClick}>
                <img className={style.backBtn_img} src={back} alt="back" />
            </button>
        </div>
    );
}
