import bookmark_gray from '../images/bookmark_icon_gray.png';
import bookmark_red from '../images/bookmark_icon_red.png';
import drink_gray from '../images/drink_icon_gray.png';
import drink_red from '../images/drink_icon_red.png';
import './ToggleView.css';

export default function ToggleView(props) {
    if (props.display === 'cocktails') {
        return (
            <div className="toggle">
                <button
                    className="toggle__btn"
                    onClick={props.onToggleViewClick}
                >
                    <div className="toggle__btn__on">
                        <img src={drink_red} alt="toggle" />
                    </div>
                    <div className="toggle__btn__off">
                        <img src={bookmark_gray} alt="toggle" />
                    </div>
                </button>
            </div>
        );
    } else if (props.display === 'cocktailList') {
        return (
            <div className="toggle">
                <button
                    className="toggle__btn"
                    onClick={props.onToggleViewClick}
                >
                    <div className="toggle__btn__off">
                        <img src={drink_gray} alt="toggle" />
                    </div>
                    <div className="toggle__btn__on">
                        <img src={bookmark_red} alt="toggle" />
                    </div>
                </button>
            </div>
        );
    }
}
