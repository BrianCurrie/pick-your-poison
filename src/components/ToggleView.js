import bookmark_gray from '../images/bookmark_icon_gray.png';
import bookmark_red from '../images/bookmark_icon_red.png';
import drink_gray from '../images/drink_icon_gray.png';
import drink_red from '../images/drink_icon_red.png';
import style from './ToggleView.module.css';

export default function ToggleView(props) {
    const on = {
        glass: style.btn_on,
        glass_img: drink_red,
        bookmark: style.btn_off,
        bookmark_img: bookmark_gray,
    };

    const off = {
        glass: style.btn_off,
        glass_img: drink_gray,
        bookmark: style.btn_on,
        bookmark_img: bookmark_red,
    };

    let display = props.display === 'cocktails' ? on : off;

    return (
        <div className={style.toggle}>
            <button className={style.btn} onClick={props.onToggleViewClick}>
                <div className={display.glass}>
                    <img src={display.glass_img} alt="toggle drink" />
                </div>
                <div className={display.bookmark}>
                    <img src={display.bookmark_img} alt="toggle bookmark" />
                </div>
            </button>
        </div>
    );
}
