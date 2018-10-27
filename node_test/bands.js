var nodeArgs = process.argv;
var songName= "";

// start of js file
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    songName = songName + "+" + nodeArgs[i];

  }

  else {

    songName += nodeArgs[i];

  }
}
var queryURL = "https://rest.bandsintown.com/artists/" + songName + "/events?app_id=codingbootcamp";
var request = require("request");
request( queryURL, function(err, response, data){
  var concertData = JSON.parse(data);
  // console.log(concertData);
  //////////////
  var firstConcert = concertData[0].venue.name;
  var firstCountry = concertData[0].venue.country;
  var firstCity = concertData[0].venue.city;
  ///////////////
  // var secondConcert = concertData[1].venue.name;
  // var secondCountry = concertData[1].venue.country;
  // var secondCity = concertData[1].venue.city;
  // ///////////////
  // var thirdConcert = concertData[2].venue.name;
  // var thirdCountry = concertData[2].venue.country;
  // var thirdCity = concertData[2].venue.city;
  // ////////////
  // var fourConcert = concertData[3].venue.name;
  // var fourCountry = concertData[3].venue.country;
  // var fourCity = concertData[3].venue.city;
  // /////////////////////////
  // var fiveConcert = concertData[4].venue.name;
  // var fiveCountry = concertData[4].venue.country;
  // var fiveCity = concertData[4].venue.city;

  //////////////////
  console.log("Venue: " + firstConcert);
  console.log("Country: " + firstCountry);
  console.log("City: " + firstCity);
  //////////
  // console.log("Album: " + albumTwo);
  // console.log("Song: " + songTwo);
  // console.log("Artist: " + artistTwo);
  // ////////////////
  // console.log("Album :" + albumThree);
  // console.log("Song: " + songThree);
  // console.log("Artist: " + artistThree);
  // //////////////
  // console.log("Album: " + albumFour);
  // console.log("Song: " + songFour);
  // console.log("Artist: " + artistFour);
  // ///////////////
  // console.log("Album: " + albumFive);
  // console.log("Song: " + songFive);
  // console.log("Artist: " + artistFive);
});