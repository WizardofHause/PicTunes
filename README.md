Phase-1 Project

As a user, I want to be able to see my favorite albums and other information about them. I would like to see the track list, album name, artist name, as well as the date it was released and how popular it is. I would also like to be able to to add my favorite ones into a list so that I can refer back to them at a later time and update the popularity score as I see fit. It would also be nice to see an image of the album as well. 

* ~ * WELCOME TO PICTUNES! * ~ *

- THE MOST INNOVATIVE AND CUTTING EDGE MUSIC EXPERIENCE IN THIS ENTIRE GITHUB REPOSITORY -

Users of PicTunes have unlimited exclusive access to over 29 RIAA-certified diamond-selling albums' cover art and the corresponding tracklists. Each album is pre-set with a PicTunes Popularity score from 0 to 100 that users can update and reset at the click of a button. 

Users can build their own personal PicTunes Library of PicTunes albums, to keep track of their favorites, with additional widgets to search for concerts and events nearby, and YouTube.



Project Presentation Outline:

The name of our project is PicTunes. PicTunes is a website that displays information of 30 RIAA Diamond certified albums. 

As music lovers ourselves, we thought that it would be a cool idea to base our project around the topic itself. We added in features that we personally would expect from a website centered on music.

Show functionality and Event Listeners
⁃DOMContentLoaded (fires when DOM content is loaded and doesn’t wait for images and stylesheets to load

⁃‘Click’ (displays data for the albums)

⁃‘Submit’ (allows user to change the popularity score of the album)

Code that was tricky:

Our first two APIs that we tried to use did not work and required constant authorization (Spotify and MusicBrainz). Because of this issue, we had to develop our own database with information about the albums. (Show db.json)

Code that we are really proud of:

Iterating through the album tracks and the function makeListItem that adds the track names to a ul. (Show code)