export default function cocktailData() {
    return {
        name: 'CocktailName',
        glass: 'Glass',
        image: '../__mocks__cocktailImage.jpg',
        thumbnail: '../__mocks__cocktailImagePreview.jpeg',
        ingredients: [
            ['Ingredient0', 'Measure0'],
            ['Ingredient1', 'Measure1'],
            ['Ingredient2', 'Measure2'],
        ],
        instructions: 'Instructions',
        category: 'Catagory',
        tags: 'tag',
        alcoholic: true,
        id: '12345',
    };
}
