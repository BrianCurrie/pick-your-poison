import { Component } from 'react';
import meatballs from '../images/meatballsMenu.png';
import style from './Meatballs.module.css';

export default class Meatballs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: null,
        };

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    componentDidMount() {
        this.setState({ menuOpen: false });
    }

    componentDidUpdate() {
        // Using setTimeout to avoid race condition
        setTimeout(() => {
            if (this.state.menuOpen) {
                window.addEventListener('click', this.closeMenu);
            } else {
                window.removeEventListener('click', this.closeMenu);
            }
        }, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.closeMenu);
    }

    closeMenu() {
        this.setState({ menuOpen: false });
    }

    openMenu() {
        this.setState({ menuOpen: true });
    }

    render() {
        return (
            <div className={style.container}>
                <button
                    className={style.dropdown_btn}
                    onClick={() => {
                        this.openMenu();
                    }}
                >
                    <img src={meatballs} alt="delete card dropdown menu" />
                </button>
                {this.state.menuOpen === true ? (
                    <button
                        className={style.delete_btn}
                        onClick={() => {
                            this.props.deleteCocktail(this.props.cocktail.id);
                        }}
                    >
                        Delete
                    </button>
                ) : null}
            </div>
        );
    }
}
