// start of movies.js


    var request = require("request");
  
    // Grab the movieName which will always be the third node argument.
    var argumentOne = process.argv;
    var movieName = "";

    // for loop here
    for (var i = 2; i < argumentOne.length; i++) {

        if (i > 2 && i < argumentOne.length) {
      
          movieName = movieName + "+" + argumentOne[i];
      
        }
      
        else {
      
          movieName += argumentOne[i];
      
        }
      }
      
    
    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=long&apikey=trilogy";
    
    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);
    
    request(queryUrl, function(error, response, body) {
    
      // If the request is successful
      if (!error && response.statusCode === 200) {
    
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("Title: " + JSON.parse(body).Title);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes: " + JSON.parse(body).tomatoRating);
        console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Starring: " + JSON.parse(body).Actors);
        
      }

    });
      
  
  
    