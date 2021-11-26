import { React, Component } from 'react';
import MobileDisplay from './components/MobileDisplay';
import DesktopDisplay from './components/DesktopDisplay';
import GetCocktail from './api/GetCocktail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            mobileWidthBreakpoint: 1000,
            stackSize: 3,
            cocktailStack: [],
            likedCocktails: [],
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.likeCocktail = this.likeCocktail.bind(this);
        this.dislikeCocktail = this.dislikeCocktail.bind(this);
        this.favoriteCocktail = this.favoriteCocktail.bind(this);
        this.removeCurrentCocktail = this.removeCurrentCocktail.bind(this);
        this.deleteCocktail = this.deleteCocktail.bind(this);
    }

    componentDidMount() {
        this.getInitialCocktails();

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        this.loadLocalStorage();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });

        //Set vertical height property to handle mobile nav viewport variance
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    getInitialCocktails() {
        let stack = [];

        const urlStr = window.location.search;
        const searchParams = new URLSearchParams(urlStr);

        if (searchParams.has('c')) {
            const drinkId = searchParams.get('c');
            stack.push(GetCocktail(drinkId));
        }

        for (let i = 0; i < this.state.stackSize; i++) {
            stack.push(GetCocktail());
        }

        Promise.all(stack).then((data) => {
            const validData = data.filter((data) => data != null);
            this.setState({ cocktailStack: validData });
        });
    }

    loadLocalStorage() {
        try {
            this.setState({
                likedCocktails: localStorage.getItem('likedCocktails')
                    ? JSON.parse(localStorage.getItem('likedCocktails'))
                    : [],
            });
        } catch (err) {
            console.log(err);
            this.setState({
                likedCocktails: [],
            });
        }
    }

    updateLocalStorage() {
        localStorage.setItem(
            'likedCocktails',
            JSON.stringify(this.state.likedCocktails)
        );
    }

    likeCocktail() {
        const currentCocktail = this.state.cocktailStack[0];
        const currentCocktailID = currentCocktail.id;
        let isDuplicate = false;

        for (let cocktail of this.state.likedCocktails) {
            if (cocktail.id === currentCocktailID) {
                isDuplicate = true;
            }
        }

        if (!isDuplicate) {
            this.setState(
                {
                    likedCocktails: [
                        ...this.state.likedCocktails,
                        currentCocktail,
                    ],
                },
                () => {
                    this.updateLocalStorage();
                }
            );
        }

        this.removeCurrentCocktail();
    }

    dislikeCocktail() {
        this.removeCurrentCocktail();
    }

    favoriteCocktail() {
        let cocktailStack = this.state.cocktailStack;
        console.log('favoriting: ' + cocktailStack[0].name);
        cocktailStack[0].favorite = true;

        this.setState({ cocktailStack: cocktailStack }, () => {
            this.likeCocktail();
        });
    }

    deleteCocktail(id) {
        console.log('deleting: ID - ' + id);
        this.setState(
            {
                likedCocktails: this.state.likedCocktails.filter(
                    (cocktail) => cocktail.id !== id
                ),
            },
            () => {
                this.updateLocalStorage();
            }
        );
    }

    removeCurrentCocktail() {
        const stack = [...this.state.cocktailStack];
        stack.shift();
        GetCocktail()
            .then((cocktail) => stack.push(cocktail))
            .then(() => this.setState({ cocktailStack: stack }));
    }

    render() {
        return this.state.width > this.state.mobileWidthBreakpoint ? (
            <DesktopDisplay
                cocktailStack={this.state.cocktailStack}
                like={this.likeCocktail}
                dislike={this.dislikeCocktail}
                favorite={this.favoriteCocktail}
                stackSize={this.state.stackSize}
                likedList={this.state.likedCocktails}
                deleteCocktail={this.deleteCocktail}
            />
        ) : (
            <MobileDisplay
                cocktailStack={this.state.cocktailStack}
                like={this.likeCocktail}
                dislike={this.dislikeCocktail}
                favorite={this.favoriteCocktail}
                stackSize={this.state.stackSize}
                likedList={this.state.likedCocktails}
                deleteCocktail={this.deleteCocktail}
            />
        );
    }
}

export default App;
