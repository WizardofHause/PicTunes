# PicTunes
## Overview 
WELCOME TO PICTUNES! The most innovative and cutting-edge music experience in this entire repository! 

This project was a two-person, single-page app using only HTML, CSS, and JavaScript to access data from a local db.json file using json-server. Our intention was to explore asynchronous javascript and event listeners, and how they interact with DOM elements.

As music lovers ourselves, we thought that it would be a cool idea to base our project around the topic itself. We added in features that we personally would expect from a website centered on music.
## Features
Users of PicTunes have unlimited exclusive access to over 29 RIAA-certified diamond-selling albums' cover art and the corresponding tracklists. Each album is pre-set with a PicTunes Popularity score from 0 to 100 that users can update and reset at the click of a button. 

Users can build their own personal PicTunes Library of PicTunes albums, to keep track of their favorites, with additional widgets to search for concerts and events nearby, and YouTube.
## Running Locally
1. Using VS Code, install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Clone this repo
3. Run `json-server --watch db.json` from the terminal
4. Open Live Server 
### Event Listeners
+ DOMContentLoaded (fires when DOM content is loaded and doesn’t wait for images and stylesheets to load
+ ‘Click’ (displays data for the albums)
+ ‘Submit’ (allows user to change the popularity score of the album)
## Challenges
Our first two APIs that we tried to use did not work and required constant authorization (Spotify and MusicBrainz). Because of this issue, we had to develop our own database with information about the albums. This took a some pretty intense attention to detail and we learned how particular a JSON file is...and how important a comma can be. 
## Favorites
Iterating through the album tracks and the function `makeListItem` that adds the track names to a `ul`. It took some time to figure out how to retrieve the full track list from our db.json file. The easy route would've been to just modify how the data was nested in the file, but we wanted our database to look as much like the music APIs we'd seen in our research. We didn't cut any corners, and it ended up being a pretty fun puzzle to solve. 