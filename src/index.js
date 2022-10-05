let albumData;
let currentAlbum;

fetch("http://localhost:3000/albums")
.then(response => response.json())
.then(json => {
  albumData = json;
  albumData.forEach(album => {
    makeIcons(album)
  })
  displayData(albumData[0]);
});

function makeIcons(album) {
  let albumContainer = document.querySelector('#img-container')
  let albumImg = document.createElement('img')
  albumImg.classList.add("album-cover")

  albumImg.src = album.img_url
  albumContainer.appendChild(albumImg)

  albumImg.addEventListener('click', () => {
    displayData(album)
  })

};

function displayData(album){
  currentAlbum = album;

  let albumTitle = document.querySelector('#album-title');
  let albumImg = document.querySelector('#main-display');
  let artistName = document.querySelector('#artist-name');
  let releaseDate = document.querySelector('#release-date');
  let trackList = document.querySelector('#track-list');
  let popularityScore = document.querySelector('#popularity-score')

  albumTitle.textContent = `Album: ${album.title}`;
  albumImg.src = album.img_url;
  artistName.textContent = `Artist: ${album.artist}`;
  releaseDate.textContent = `Released: ${album.date.month} ${album.date.day}, ${album.date.year}`
  trackList.textContent = `Tracks: ${appendTracks(album)}`;
  popularityScore.textContent = `Popularity Score: ${album.popularity}/100`
}

// function to make tracks appear as list items
function appendTracks(album){
  currentAlbum = album;
  
  for(let track in album.tracks) {
    return track;
  }
  let trackList = document.querySelector('#track-list');
  let albumTrack = document.createElement('li')
  albumTrack.textContent = track
  trackList.appendChild(albumTrack);
}

//Blank format to add extra stuff to db.json
// {
//     "id": 20,
//     "artist": "",
//     "title": "",
//     "img_url": "",
//     "popularity": "",
//     "tracks": [
//     ],
//     "date": {
//         "month": "",
//         "day": ,
//         "year": 
//     }
// }