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
                        $("#drinkBox").append(ingredient + " ");
                    }
                }
            }
        })
    })
        
//var c;
// var gapikey = 'AIzaSyBSf7uC2AVIqzcoIr1Tg1v7WdMxBBbCITM';
// //var gapikey ='AIzaSyB3zWY2vQ-3gaNbHiCzUTEUwafJWMi0PIE'
// var c;
// $(function() {    
//     // call fancybox pluggin
//     $(".fancyboxIframe").fancybox({
//         maxWidth    : 900,
//         maxHeight    : 600,
//         fitToView    : false,
//         width        : '90%',
//         height        : '90%',
//         autoSize    : false,
//         closeClick    : false,
//         openEffect    : 'none',
//         closeEffect    : 'none',
        
//         iframe: {
//             scrolling : 'auto',
//             preload   : true
//         }
//     });
//    // window.onload()
//     $('#search-form').submit( function(e) {
//         e.preventDefault();
//     });
// });
 
// function searchYoutubevideo() {
//     $('#results').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>');
//     $('#buttons').html('');
    
//     // get form input
//     q = $('#search').val(); 
//     cocktail(q);
//     // run get request on API
//     $.get(
//         "https://www.googleapis.com/youtube/v3/search", {
//             part: 'snippet, id',
//             q: q,
//             type: 'video',
//             key: gapikey
//         }, function(data) {
//             var nextPageToken = data.nextPageToken;
//             var prevPageToken = data.prevPageToken;
            
//             // Log data
//             console.log(data);
//             $('#results').html(''); // hide loading
//             $.each(data.items, function(i, item) {
                
//                 // Get Output
//                 var output = getOutput(item);
                
//                 // display results
//                 $('#results').append(output);
//             });
            
//             var buttons = getButtons(prevPageToken, nextPageToken);
            
//             // Display buttons
//             $('#buttons').append(buttons);
//         });
// }
 
// // Next page function
// function nextPage() {
//     var token = $('#next-button').data('token');
//     var q = $('#next-button').data('query');
    
    
//    // clear 
//     $('#results').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>');
//     $('#buttons').html('');
    
//     // get form input
//     q = $('#search').val();
    
//     // run get request on API
//     $.get(
//         "https://www.googleapis.com/youtube/v3/search", {
//             part: 'snippet, id',
//             q: q,
//             pageToken: token,
//             type: 'video',
//             key: gapikey
//         }, function(data) {
            
//             var nextPageToken = data.nextPageToken;
//             var prevPageToken = data.prevPageToken;
            
//             // Log data
//             console.log(data);
//             $('#results').html('');
//             $.each(data.items, function(i, item) {
                
//                 // Get Output
//                 var output = getOutput(item);
                
//                 // display results
//                 $('#results').append(output);
//             });
            
//             var buttons = getButtons(prevPageToken, nextPageToken);
            
//             // Display buttons
//             $('#buttons').append(buttons);
//         });    
// }


// // ////////////////////drinks///////////////////////////////////////////////
//  function cocktail(q)
//  {
//     $.ajax({
//         // url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+q,
//       url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
//         method: "GET"

//     }).then(function (response) {
//         // var randomDrinkImage = response.drinks[0].strDrinkThumb
//         // var randomDrinkName = response.drinks[0].strDrink
        
//         //prepend the images to the divs created in the html
//         $("#drinkImage").prepend(`<img src=${response.drinks[0].strDrinkThumb} id="randomDrinkImage" widith:200px; height: 200px; />`);
//          $("#drinkName").prepend(`<p> ${response.drinks[0].strdrink} id="randomDrinkName" </p>`)
//          var q =$(response.drinks[0].strDrink)
//        c=q;
//     //    $(response.drinks)
//         console.log(c);
        
//         //return c;
//         var ingredientKeys = Object.keys(response.drinks[0]);
//         for (var i = 0; i < ingredientKeys.length; i++) {
//             var ingredient = response.drinks[0][ingredientKeys[i]];
//             if (ingredient && ingredientKeys[i].startsWith("strIngredient")) {
//                 console.log(ingredient);
//             }
//         }

        
//     });
    
//  }
// // Previous page function
// function prevPage() {
//     var token = $('#prev-button').data('token');
//     var q = $('#prev-button').data('query');
    
    
//    // clear 
//     $('#results').html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><span class="sr-only">Loading...</span>');
//     $('#buttons').html('');
    
//     // get form input
//     q = $('#search').val();  // this probably shouldn't be created as a global
    
//     // run get request on API
//     $.get(
//         "https://www.googleapis.com/youtube/v3/search", {
//             part: 'snippet, id',
//             q: q,
//             pageToken: token,
//             type: 'video',
//             key: gapikey
//         }, function(data) {
            
//             var nextPageToken = data.nextPageToken;
//             var prevPageToken = data.prevPageToken;
            
//             // Log data
//             console.log(data);
//             $('#results').html('');
//             $.each(data.items, function(i, item) {
                
//                 // Get Output
//                 var output = getOutput(item);
                
//                 // display results
//                 $('#results').append(output);
//             });
            
//             var buttons = getButtons(prevPageToken, nextPageToken);
            
//             // Display buttons
//             $('#buttons').append(buttons);
//         });    
// }
 
// // Build output
// function getOutput(item) {
//     var videoID = item.id.videoId; 
//     var title = item.snippet.title;
//     var description = item.snippet.description;
//     var thumb = item.snippet.thumbnails.high.url;
//     var channelTitle = item.snippet.channelTitle;
//     var videoDate = item.snippet.publishedAt;
    
//     // Build output string
//     var output =        '<div class="col-md-3">' +
//                             '<img src="' + thumb + '" class="img-responsive thumbnail" >' +
//                         '</div>' +
//                         '<div class="input-group col-md-3">' +
//                             '<h3><a data-fancybox-type="iframe" class="fancyboxIframe" href="http://youtube.com/embed/' + videoID + '?rel=0">' + title + '</a></h3>' +
//                             '<small>By <span class="channel">' + channelTitle + '</span> on ' + videoDate + '</small>' +
//                             '<p>' + description + '</p>' +
//                         '</div>' +
//                     '<div class="clearfix"></div>';
//     return output;
// }
 
// function getButtons(prevPageToken, nextPageToken) {
//     if(!prevPageToken) {
//         var btnoutput =     '<ul class="pagination">' +
//                                 '<li><a href="javascript:;"  id="next-button" class="paging-button" data-token="' + nextPageToken + '" data-query="' + q + '"' +
//                                     'onclick = "nextPage();">Next &raquo;</a></li>' +
//                             '</ul>';
//     } else {
//         var btnoutput =     '<ul class="pagination">' +
//                                 '<li><a href="javascript:;" id="prev-button" class="paging-button" data-token="' + prevPageToken + '" data-query="' + q + '"' +
//                                     'onclick = "prevPage();">&laquo; Previous</a></li>' +            
//                                 '<li><a href="javascript:;" id="next-button" class="paging-button" data-token="' + nextPageToken + '" data-query="' + q + '"' +
//                                     'onclick = "nextPage();">Next &raquo;</a></li>' +
//                             '</ul>';        
//     }
    
//     return btnoutput;
// }


    });
