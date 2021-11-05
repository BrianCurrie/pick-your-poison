import Meatballs from './Meatballs';
import style from './CocktailCard.module.css';

export default function CocktailCard(props) {
    const data = props.cardInfo;
    let increment = 0; // To make sure table row key is always unique
    return (
        <div className={style.card} style={{ zIndex: props.zIndex }}>
            {props.swiping !== true ? (
                <Meatballs
                    cocktail={data}
                    deleteCocktail={props.deleteCocktail}
                />
            ) : null}
            <div className={(style.image_container, style.fixed_ratio)}>
                <img
                    className={style.image}
                    src={data.image}
                    alt={data.name}
                    onLoad={props.onCardLoad}
                />
            </div>
            <div className={style.info}>
                <h2 className={style.name}>{data.name}</h2>
                <div className={style.tag_container}>
                    <div className={style.tag}>{data.category}</div>
                    <div className={style.tag}>
                        {data.alcoholic ? 'Alcoholic' : 'Non-Alcoholic'}
                    </div>
                    <div className={style.tag}>{data.glass}</div>
                </div>
                <table className={style.ingredients_table}>
                    <tbody className={style.ingredients_body}>
                        {data.ingredients.map((ingredient) => (
                            <tr
                                key={`${
                                    ingredient[0] + ingredient[1] + increment++
                                }`}
                            >
                                <td>{ingredient[0]}</td>
                                <td>{ingredient[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={style.instructions_container}>
                    <h3 className={style.instructions_header}>Instructions</h3>
                    <p className={style.instructions_body}>
                        {data.instructions}
                    </p>
                </div>
            </div>
        </div>
    );
}
