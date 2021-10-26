import './CocktailCard.css';

export default function CocktailCard(props) {
    const data = props.cardInfo;
    return (
        <div className="card">
            <div className="cardImg fixed-ratio">
                <img
                    className="cardImg__image"
                    src={data.image}
                    alt={data.name}
                />
            </div>
            <div className="cardInfo">
                <h2 className="cardInfo__name">{data.name}</h2>
                <div className="cardTags">
                    <div className="cardTags__tag">{data.category}</div>
                    <div className="cardTags__tag">
                        {data.alcoholic ? 'Alcoholic' : 'Non-Alcoholic'}
                    </div>
                    <div className="cardTags__tag">{data.glass}</div>
                </div>
                <table className="ingredients">
                    <tbody className="ingredients__body">
                        {data.ingredients.map((ingredient) => (
                            <tr key={`${ingredient[0] + ingredient[1]}`}>
                                <td>{ingredient[0]}</td>
                                <td>{ingredient[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="instructions">
                    <h3 className="instructions__title">Instructions</h3>
                    <p className="instructions__body">{data.instructions}</p>
                </div>
            </div>
        </div>
    );
}
