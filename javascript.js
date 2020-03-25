
// $.ajax({
//   url: "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBSf7uC2AVIqzcoIr1Tg1v7WdMxBBbCITM&type=video",
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://twitterbukativ1.p.rapidapi.com/search",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "TwitterBukatiV1.p.rapidapi.com",
		"x-rapidapi-key": "1435ec552fmsh887895207fcdf18p1f989ejsnca7e9411c3c4",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {
		"consumerKey": "wKhPFFLDboVEDrtUc2RBgk1ZM",
		"query": "Beyonce",
		"accessTokenKey": "2251332438-ipXwgsAviU4TtSmknQXZh3XtK1wxBl7It5bZtrG",
		"consumerSecret": "75cMVnbQJqkwOipNgsHC1kZ0tzgyduohWiyEJXdO1AsBRE0VTr",
		"accessTokenSecret": "gArxge7dzVYDQwoUcdLp09w9aiMpJQP4B1fOADgQgqU92"
	}
}
$.ajax(settings).done(function (response) {
	console.log(response);
});


$.ajax(
	
)

// function youtubeApiCall() {
//   $.ajax({
//       cache: false,
//       data: $.extend({
//           key: 'AIzaSyBSf7uC2AVIqzcoIr1Tg1v7WdMxBBbCITM',
//           q: $('#hyv-search').val(),
//           part: 'snippet'
//       }, {
//           maxResults: 20,
//           pageToken: $("#pageToken").val()
//       }),
//       dataType: 'json',
//       type: 'GET',
//       timeout: 5000,
//       url: 'https://www.googleapis.com/youtube/v3/search'
//   }).done(function(data) {
//       $('.btn-group').show();
//       if (typeof data.prevPageToken === "undefined") {
//           $("#pageTokenPrev").hide();
//       } else {
//           $("#pageTokenPrev").show();
//       }
//       if (typeof data.nextPageToken === "undefined") {
//           $("#pageTokenNext").hide();
//       } else {
//           $("#pageTokenNext").show();
//       }
//       var items = data.items,
//           videoList = "";
//       $("#pageTokenNext").val(data.nextPageToken);
//       $("#pageTokenPrev").val(data.prevPageToken);
//       $.each(items, function(index, e) {
//           videoList = videoList + '<li class="hyv-video-list-item"><div class="hyv-content-wrapper"><a href="" class="hyv-content-link" title="' + e.snippet.title + '"><span class="title">' + e.snippet.title + '</span><span class="stat attribution">by <span>' + e.snippet.channelTitle + '</span></span></a></div><div class="hyv-thumb-wrapper"><a href="" class="hyv-thumb-link"><span class="hyv-simple-thumb-wrap"><img alt="' + e.snippet.title + '" src="' + e.snippet.thumbnails.default.url + '" width="120" height="90"></span></a></div></li>';
//       });
//       $("#hyv-watch-related").html(videoList);
//       // JSON Responce to display for user 	 
//       new PrettyJSON.view.Node({
//           el: $(".hyv-watch-sidebar-body"),
//           data: data
//       });
//   });
// }