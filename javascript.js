$(document).ready(function () {
    $("#shaker").click(function () {
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            method: "GET"
        }).then(function (response) {
            $("#drinkBox").append(`<img src=${response.drinks[0].strDrinkThumb} width=200px height=200px >`);
            $("#drinkBox").append(`<p> ${response.drinks[0].strDrink} </p>`)
            $("#drinkBox").append(`<p> ${response.drinks[0].strInstructions} </p>`)
            var ingredientKeys = Object.keys(response.drinks[0]);
            for (var i = 0; i < ingredientKeys.length; i++) {
                var ingredient = response.drinks[0][ingredientKeys[i]];
                if (ingredient && ingredientKeys[i].startsWith("strIngredient")) {
                    $("#drinkBox").append(ingredient + " ");
                }
            }
            renderDrink(response.drinks[0]);
            function renderDrink(data) {
                $("#drinkBox").empty()
                $("#drinkBox").append(`<p>${data.strDrink}<p>`)
                $("#drinkBox").append(`<img src=${data.strDrinkThumb} width=200px height=200px >`)
                $("#drinkBox").append(`<p>${data.strInstructions}<p>`)
                for (var i = 0; i < ingredientKeys.length; i++) {
                    var ingredient = response.drinks[0][ingredientKeys[i]];
                    if (ingredient && ingredientKeys[i].startsWith("strIngredient")) {
                        $("#drinkBox").append(ingredient + " | ");
                    }
                }
            }
        })
    })
})
