$(document).ready(function () {

    $("#search").click(function () {
        $.ajax({
            url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
            method: "GET"
        }).then(function (response) {
            // var randomDrinkImage = response.drinks[0].strDrinkThumb
            // var randomDrinkName = response.drinks[0].strDrink
            
            var drink = response
            //prepend the images to the divs created in the html
            $("#drinkImage").prepend(`<img src=${response.drinks[0].strDrinkThumb} </p>`);
            $("#drinkName").prepend(`<p> ${response.drinks[0].strDrink} </p>`)
            $("#drinkName").prepend(`<p> ${response.drinks[0].strInstructions} </p>`)
            $("#drinkName").prepend(`<p> ${response.drinks[0].strAlcoholic} </p>`)
            $("#drinkName").prepend(`<p> ${response.drinks[0].strIngredient8} </p>`)
            $("#drinkName").prepend(`<p> ${response.drinks[0].strIngredient7} </p>`)



        });
    })

var videoURL = "Beyonce"

    $(document).on('click','img',function(){
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBSf7uC2AVIqzcoIr1Tg1v7WdMxBBbCITM&type=video&q=" + videoURL,
            method: "GET"
        }).then(function (response) {

            var videoID = response.items[0].id.videoId;
            var url = "https://www.youtube.com/embed/" + videoID;
            $('#myIframe').attr('src', url)
        });
    })



    // var drinkImage = $("<img>");

    // drinkImage.attr("src", randomDrinkImage);

    // $("#drinkImage").prepend(randomDrinkImage);


})


// var music = "how+to+create" + ingredient + "cocktail"

// $.ajax({
//     url: "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBSf7uC2AVIqzcoIr1Tg1v7WdMxBBbCITM&type=video&q=" + music,
//     method: "GET"
// }).then(function (response) {
//     console.log(response.items[0].id.videoId);
// });


