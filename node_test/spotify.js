

var Spotify = require("node-spotify-api");
var songName = "";
var nodeArgs = process.argv;

//////////////////
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    songName = songName + "+" + nodeArgs[i];

  }

  else {

    songName += nodeArgs[i];

  }
}
var spotify = new Spotify({
  id:"dea72ce47a8847209393cebda5047d18",
  secret:"ff4ba8c331ed4dab9b8cdcb69470d035"

});
spotify
  .search({ type: 'track', query: songName})
  .then(function(response) {
    var spotifyTracks = response.tracks.href;
    /////////////////////////
    var albumOne = response.tracks.items[0].album.name;
    var songOne = response.tracks.items[0].name;
    var artistOne = response.tracks.items[0].artists[0].name;
    ////////////////////////
    var albumTwo = response.tracks.items[1].album.name;
    var songTwo= response.tracks.items[1].name;
    var artistTwo = response.tracks.items[1].artists[0].name;
    ///////////////////////
    var albumThree = response.tracks.items[2].album.name;
    var songThree = response.tracks.items[2].name;
    var artistThree = response.tracks.items[2].artists[0].name;
    /////////////////////
    var albumFour = response.tracks.items[3].album.name;
    var songFour = response.tracks.items[3].name;
    var artistFour = response.tracks.items[3].artists[0].name;
    ///////////////////
    var albumFive = response.tracks.items[4].album.name;
    var songFive = response.tracks.items[4].name;
    var artistFive = response.tracks.items[4].artists[0].name;
    

    console.log("artists: " + spotifyTracks);
    //////////Spotify URL
    console.log("Album: " + albumOne);
    console.log("Song: " + songOne);
    console.log("Artist: " + artistOne);
    ////////////
    console.log("Album: " + albumTwo);
    console.log("Song: " + songTwo);
    console.log("Artist: " + artistTwo);
    ////////////////
    console.log("Album :" + albumThree);
    console.log("Song: " + songThree);
    console.log("Artist: " + artistThree);
    //////////////
    console.log("Album: " + albumFour);
    console.log("Song: " + songFour);
    console.log("Artist: " + artistFour);
    ///////////////
    console.log("Album: " + albumFive);
    console.log("Song: " + songFive);
    console.log("Artist: " + artistFive);


  });

  