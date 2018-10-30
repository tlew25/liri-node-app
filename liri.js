// liri.js 
// set the environment with key below
require("dotenv").config();

// Start of Liri
var moment = require('moment');
var time = moment().format('MMMM Do YYYY, h:mm:ss a')
	
console.log("Current: " + time);
console.log('#########################################');
// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for a tv show
if (!search) {
  search = "show";
}

// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
  term = "Andy Griffith";
}

// Print whether searching for movies, music, or bandintown
if (search === "movies") {
  console.log("Searching for movies");

  var queryUrl = "http://www.omdbapi.com/?t=" + term + "&y=&plot=long&apikey=trilogy";
  var request = require("request");
    
  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);
  
  request(queryUrl, function(error, response, body) {
  
    // If the request is successful
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
      console.log('#########################################');
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("Title: " + JSON.parse(body).Title);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      // console.log("Rotten Tomatoes: " + JSON.parse(body).tomatoRating);
      // console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Starring: " + JSON.parse(body).Actors);
     
      
    }

  });
} if(search === "music"){
  console.log("Searching for Spotify");
  /////////////// searches for spotify artists,songs, ranking
  var Spotify = require("node-spotify-api");
  ///////////////
  var spotify = new Spotify({
    id:"dea72ce47a8847209393cebda5047d18",
    secret:"ff4ba8c331ed4dab9b8cdcb69470d035"
  
  });
  spotify
    .search({ type: 'track', query: term})
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
      console.log('#########################################');
      //////////Spotify URL
      console.log("Album: " + albumOne);
      console.log("Song: " + songOne);
      console.log("Artist: " + artistOne);
      console.log('#########################################');
      ////////////
      console.log("Album: " + albumTwo);
      console.log("Song: " + songTwo);
      console.log("Artist: " + artistTwo);
      console.log('#########################################');
      ////////////////
      console.log("Album :" + albumThree);
      console.log("Song: " + songThree);
      console.log("Artist: " + artistThree);
      console.log('#########################################');
      //////////////
      console.log("Album: " + albumFour);
      console.log("Song: " + songFour);
      console.log("Artist: " + artistFour);
      console.log('#########################################');
      ///////////////
      console.log("Album: " + albumFive);
      console.log("Song: " + songFive);
      console.log("Artist: " + artistFive);
      console.log('#########################################');
  
  
    });
  
    
}
if(search === "band"){
    console.log("Searching for bands");
    var queryURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
    var request = require("request");
    request( queryURL, function(err, response, data){
      var concertData = JSON.parse(data);

      // console.log(concertData);
      ////////////// prints bandsintown data using moment.js as well to track time
      var firstConcert = concertData[0].venue.name;
      var firstCountry = concertData[0].venue.country;
      var firstCity = concertData[0].venue.city;
      ///////////////
      var secondConcert = concertData[1].venue.name;
      var secondCountry = concertData[1].venue.country;
      var secondCity = concertData[1].venue.city;
      ///////////////
      var thirdConcert = concertData[2].venue.name;
      var thirdCountry = concertData[2].venue.country;
      var thirdCity = concertData[2].venue.city;
      ////////////
      var fourConcert = concertData[3].venue.name;
      var fourCountry = concertData[3].venue.country;
      var fourCity = concertData[3].venue.city;
      /////////////////////////
      var fiveConcert = concertData[4].venue.name;
      var fiveCountry = concertData[4].venue.country;
      var fiveCity = concertData[4].venue.city;
    
      //////////////////
      console.log("Venue: " + firstConcert);
      console.log("Country: " + firstCountry);
      console.log("City: " + firstCity);
      console.log('#########################################');
      //////////
      console.log("Venue: " + secondConcert);
      console.log("Country: " + secondCountry);
      console.log("City: " + secondCity);
      console.log('#########################################');
      // ////////////////
      console.log("Venue: " + thirdConcert);
      console.log("Country: " + thirdCountry);
      console.log("City: " + thirdCity);
      console.log('#########################################');
      // //////////////
      console.log("Venue: " + fourConcert);
      console.log("Country: " + fourCountry);
      console.log("City: " + fourCity);
      console.log('#########################################');
      // ///////////////
      console.log("Venue: " + fiveConcert);
      console.log("Country: " + fiveCountry);
      console.log("City: " + fiveCity);
      console.log('#########################################');
    });
  }


// End of liri.js

