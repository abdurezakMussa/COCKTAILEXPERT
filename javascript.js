$(document).ready(function () {

    $(document).keypress(function (e) {
        if (e.which == 13) {

            var ingredient = "gin"

            $.ajax({
                url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient,
                method: "GET"
            }).then(function (response) {
                console.log(response.drinks[0]);
            });
        }
    });

    // var music = "how+to+create" + ingredient + "cocktail"

    // $.ajax({
    //     url: "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBSf7uC2AVIqzcoIr1Tg1v7WdMxBBbCITM&type=video&q=" + music,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response.items[0].id.videoId);
    // });

})