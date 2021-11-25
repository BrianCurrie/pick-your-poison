export default async function GetCocktail(id) {
    let data;
    let valid;

    if (id === undefined) {
        data = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/random.php',
            {
                mode: 'cors',
            }
        )
            .then((response) => response.json())
            .then((drinkData) => drinkData.drinks[0]);
        valid = true;
    } else {
        data = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
            {
                mode: 'cors',
            }
        )
            .then((response) => response.json())
            .then((drinkData) => {
                // Check to make sure API has returned valid drink data
                if (drinkData.drinks) {
                    valid = true;
                    return drinkData.drinks[0];
                } else {
                    valid = false;
                    return null;
                }
            });
    }

    if (valid) {
        let ingredients = [];

        // Ingredients and their corresponding measurements are saved as
        // 'strIngredientX' and 'strMeasureX' in the drink data. We discard
        // empty ingredients and do some string manipulation to get usable data
        // from the cocktail API
        for (let key of Object.keys(data)) {
            if (key.includes('strIngredient') && data[key]) {
                let measureStr =
                    'strMeasure' + key.replace('strIngredient', '');
                let measure = data[measureStr] ? data[measureStr] : '';
                ingredients.push([data[key], measure.trim()]);
            }
        }

        return {
            name: data.strDrink,
            glass: data.strGlass,
            image: data.strDrinkThumb,
            thumbnail: data.strDrinkThumb + '/preview',
            ingredients: ingredients,
            instructions: data.strInstructions,
            category: data.strCategory,
            tags: data.strTags,
            alcoholic: data.strAlcoholic === 'Alcoholic' ? true : false,
            id: data.idDrink,
            favorite: false,
        };
    } else {
        return null;
    }
}
