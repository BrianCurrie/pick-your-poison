import bookmark_gray from '../images/bookmark_icon_gray.png';

import drink_red from '../images/drink_icon_red.png';
import './ToggleView.css';

export default function ToggleView() {
    return (
        <div className="toggle">
            <button className="toggle__btn">
                <div className="toggle__btn__on">
                    <img src={drink_red} alt="toggle" />
                </div>
                <div className="toggle__btn__off">
                    <img src={bookmark_gray} alt="toggle" />
                </div>
            </button>
        </div>
    );
}
