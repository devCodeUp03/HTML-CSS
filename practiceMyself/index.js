// let book = "Think and Grow Rich";
// let author = "Napolean Hill";

// let selfHelp = {book, author};
// console.log(selfHelp);
let recipes = [];
function fetchApi() {
    axios.get('https://dummyjson.com/recipes')
    .then((response) => {
        console.log(response.data.recipes);
        recipes = response.data.recipes;
        let output = ``;
        recipes.forEach(recipe => {
            output += `<div class="recipe">
            <img src="${recipe.image}"/>
            <p>${recipe.name}</p>
            </div>`;
        });
        document.getElementById('recipes').innerHTML = output;
    });
}

fetchApi();