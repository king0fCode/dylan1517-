

// Classes
// Creates an inheritance class for the "names"
class favThings {
constructor(name) {
    this.name = name;
    }
    getname() {
    return this.name;
    }
}
// Creates a class to hold movie and actor names.
class favMovies extends favThings{
constructor(name,actor){
    super (name);
    this.actor = actor;
}
getActor(){
    return this.actor;
}
};
// a class to hold song and artist names.

class favSongs extends favThings{
constructor(name,artist){
super (name);
this.artist = artist;
}
getArtist() {
     return this.artist;
}
};

// a class to hold places to travel and why.

class favPlaces extends favThings{
constructor(name,why){
super (name);
this.why = why;
}
getWhy(){
return this.why;
}
};




// Variables

// Movies & Actors
let favMovies1 = new favMovies("V for Vendetta","Hugo Weaving");
let favMovies2 = new favMovies("Harry potter","Daniel Ratcliffe");
let favMovies3 = new favMovies("Fear And Loathing Las Vegas","Johnny depp");
// Songs & Artists
let favSongs1 = new favSongs("Lucy In The Sky With Diamonds", "The Beatles");
let favSongs2 = new favSongs("Piano Man", "Billy Joel");
let favSongs3 = new favSongs("Sunglasses At Night", "Corey Hart");
// Places to travel & why
let favPlaces1 = new favPlaces("California","To see Los Angeles");
let favPlaces2 = new favPlaces("Egypt", "To see the Pyramids");
let favPlaces3 = new favPlaces("Italy", "To boat in the canals");
// Link to search engines
let youtubeLink = "<a target=\"_blank\" href=\"https://www.youtube.com/results?search_query=";
let soundCloudLink = "<a target=\"_blank\" href=\"https://soundcloud.com/search?q=";
let googleMapsLink = "<a target=\"_blank\" href=\"https://www.google.com/maps/search/";
// Arrays
let moviesList = [favMovies1, favMovies2, favMovies3];
let songsList = [favSongs1, favSongs2, favSongs3];
let placesList = [favPlaces1, favPlaces2, favPlaces3];


// Methods
// grabs each value from our moviesList array and displays it, also creates hyperlinks to search for the items when clicked
document.getElementById("movies").innerHTML += "<br/><hr><br/>";
moviesList.forEach(movie => {
document.getElementById("movies").innerHTML += "Movie name: "+youtubeLink+""+movie.name+"\">"+movie.name+"</a> | Actor name: " +movie.actor+"<br/>";
});
// grabs each value from our songsList array and displays it, also creates hyperlinks to search for the items when clicked
document.getElementById("songs").innerHTML += "<br/><hr><br/>";
songsList.forEach(song => {
document.getElementById("songs").innerHTML += "Song name: "+soundCloudLink+""+song.name+"\">"+song.name+"</a> | Artist name: " +song.artist+"<br/>";
});
// grabs each value from our placesList array and displays it, also creates hyperlinks to search for the items when clicked
document.getElementById("places").innerHTML += "<br/><hr><br/>";
placesList.forEach(place => {
document.getElementById("places").innerHTML += "Place name: "+googleMapsLink+""+place.name+"\">"+place.name+"</a> | Why?: " +place.why+"<br/>";
});
