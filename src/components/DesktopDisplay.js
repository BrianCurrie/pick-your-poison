import MobileDisplay from './MobileDisplay';
import style from './DesktopDisplay.module.css';

export default function DesktopDisplay(props) {
    return (
        <div className={style.desktop_container}>
            <div className={style.mobile_view_container}>
                <MobileDisplay
                    cocktailStack={props.cocktailStack}
                    like={props.like}
                    dislike={props.dislike}
                    favorite={props.favorite}
                    stackSize={props.stackSize}
                    likedList={props.likedList}
                    deleteCocktail={props.deleteCocktail}
                />
            </div>
        </div>
    );
}
