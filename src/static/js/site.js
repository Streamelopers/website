$(document).ready(function(){
    var googleApiKey = "AIzaSyBCFGCoYaP1nNVpKaMBP6GdjqJvZpmPe4g";
    
    var upcomingVideosSearchUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCznWXigAvBa1ZtrgRmJGZgg&eventType=upcoming&maxResults=25&q=fun&type=video&key=AIzaSyBCFGCoYaP1nNVpKaMBP6GdjqJvZpmPe4g"
    var youtubeVideosSearchUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCznWXigAvBa1ZtrgRmJGZgg&maxResults=25&q=fun&type=video&key=AIzaSyBCFGCoYaP1nNVpKaMBP6GdjqJvZpmPe4g"

    $.get(youtubeVideosSearchUrl, function(videos){
        console.log(videos);
    });
});