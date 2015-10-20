// Initialize Parse app
Parse.initialize('3gfKtFQG92RF83ytdCvt7TDHfudzUUKgpZzVekWk', 'xfur8lJm0Lt8O0DKMM5XILYzkNVLRLFgneebOed3');

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');

// // Create a new instance of your Music class 
// var newMusic = new Music();

// // Set a property 'band' equal to a band name
// newMusic.set('band', 'Twenty-one Pilots');

// // Set a property 'website' equal to the band's website
// newMusic.set('website', 'Twentyonepilots.com');
    
// // Set a property 'song' equal to a song
// newMusic.set('song', 'Kitchen Sink');

// // Save your instance of your song -- and go see it on parse.com!
// newMusic.save();

// // Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
var SecMusic = new Music();

	// For each input element, set a property of your new instance equal to the input's value
SecMusic.set('rock', $("#band").val());
SecMusic.set('stone', $("#website").val());
SecMusic.set('wall', $("#song").val());

	// After setting each property, save your new instance back to your database
SecMusic.save();
	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


