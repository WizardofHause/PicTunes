let albumData;
let currentAlbum;

fetch("http://localhost:3000/albums")
.then(response => response.json())
.then(json => {
  albumData = json;
  albumData.forEach(album => {
    makeIcons(album)
  })
  displayData(albumData[0])
  engageWantButton();
});

function makeIcons(album) {
  let albumContainer = document.querySelector('#img-container')
  let albumImg = document.createElement('img')
  albumImg.classList.add("album-cover")

  albumImg.src = album.img_url
  albumContainer.appendChild(albumImg)

  albumImg.addEventListener('click', () => {
    let trackList = document.querySelector('#track-list');
    trackList.innerHTML = ''
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
  let pageBody = document.getElementsByTagName('body')

  albumTitle.textContent = `${album.title} `;
  albumImg.src = album.img_url;
  artistName.textContent = `Artist: ${album.artist}`;
  releaseDate.textContent = `Released: ${album.date.month} ${album.date.day}, ${album.date.year}`;
  trackList = getTrackData(album.tracks);
  popularityScore.textContent = `Popularity Score: ${album.popularity}/100`;
  pageBody.style[background-image] = "linear-gradient(`${album.color}`"
}

//ITERATES THROUGH ALBUM TRACKS, RETURNS THE TRACK NAME
function getTrackData(tracks){
  for(const track of tracks){
    makeListItem(track)
  };
}
// MAKES LIST ELEMENTS AND ADDS THEM TO THE TRACK LIST UL, WITH CLASS .TRACK
function makeListItem(track){
  const listItem = document.createElement('li')
  listItem.textContent = track
  listItem.classList.add("track")

  const trackList = document.querySelector('#track-list')
  trackList.appendChild(listItem);
}
//MAKE AN EVENT LISTENER ON THE MAIN DISPLAY IMAGE THAT ADDS IMAGES TO A FAVORITES LIST
function engageWantButton() {
  let wantButton = document.querySelector('#want-that');
  let favoriteBar = document.querySelector('#favorites-bar');
  let albumTitle = document.querySelector('#album-title');

  wantButton.addEventListener('click', () => {
    let wanted = document.createElement('p')
    wanted.classList.add('wanted')
    wanted.textContent = (albumTitle.textContent);
    favoriteBar.appendChild(wanted)
  })
}

//Blank format to add extra stuff to db.json
// {
//     "id": 25,
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