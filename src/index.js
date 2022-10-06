let albumData;
let currentAlbum;

//FETCHES DATA AFTER FONTS LOAD
//document.addEventListener('DOMContentLoaded', (event) => {
fetch("http://localhost:3000/albums")
  .then(response => response.json())
  .then(json => {
    albumData = json;
    albumData.forEach(album => {
      makeIcons(album)
    })
    displayData(albumData[0])
    engageWishButton()
    engagePopularityForm()
    engageResetButton()
  });
//});
//CREATES ICONS FOR ALBUMS IN THE IMG-CONTAINER DIV
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

//BRINGS CLICKED ALBUM TO THE MAIN DISPLAY DIV
function displayData(album) {
  currentAlbum = album;

  let albumTitle = document.querySelector('#album-title');
  let albumImg = document.querySelector('#main-display');
  let artistName = document.querySelector('#artist-name');
  let releaseDate = document.querySelector('#release-date');
  let trackList = document.querySelector('#track-list');
  let popularityScore = document.querySelector('#score');
  let wishButton = document.querySelector('#wish-button');
  let docBody = document.querySelector('#body');

  albumTitle.textContent = `${album.title}`;
  albumImg.src = album.img_url;
  artistName.textContent = `Artist: ${album.artist}`;
  releaseDate.textContent = `Released: ${album.date.month} ${album.date.day}, ${album.date.year}`;
  trackList = getTrackData(album.tracks);
  popularityScore.textContent = Math.min(Math.max(parseInt(`${album.popularity}`), 0), 100);
  wishButton.textContent = album.wish_list ? 'ADDED!' : 'ADD TO WISHLIST';
  docBody.style.backgroundColor = `${album.color}`;
}

//ITERATES THROUGH ALBUM TRACKS, RETURNS THE TRACK NAME
function getTrackData(tracks) {
  for (const track of tracks) {
    makeListItem(track)
  };
}

// MAKES LIST ELEMENTS AND ADDS THEM TO THE TRACK LIST UL, WITH CLASS .TRACK
function makeListItem(track) {
  const listItem = document.createElement('li')
  listItem.textContent = track
  listItem.classList.add("track")

  const trackList = document.querySelector('#track-list')
  trackList.appendChild(listItem);
}

//EVENT LISTENER FOR THE WISHLIST BUTTON; INVOKES ONE OF TWO CALLBACK FUNCTIONS
function engageWishButton() {
  let wishButton = document.querySelector('#wish-button');
  wishButton.addEventListener('click', (event) => {
    currentAlbum.wish_list = !currentAlbum.wish_list;
    event.target.textContent === 'ADD TO WISHLIST' ? createWishedItem() : alertAlreadyWished();
    event.target.textContent = 'ADDED!'
  })
}

//MAKES A <li> ELEMENT, GIVES IT CLASS .WISHED, ALBUMTITLE CONTENT, AND ADDS IT TO THE WISHLIST DIV
function createWishedItem() {
  let wishList = document.querySelector('#wish-list')
  let albumTitle = document.querySelector('#album-title')
  let wishedAlbum = document.createElement('li')

  wishedAlbum.classList.add('wished')
  wishedAlbum.textContent = (albumTitle.textContent + " ")
  wishList.appendChild(wishedAlbum)
}


//ALERTS THAT THE ALBUM IS ALREADY ADDED
function alertAlreadyWished() {
  let albumTitle = document.querySelector('#album-title')
  alert(`(☞ﾟヮﾟ)☞ ${albumTitle.textContent} is already on your wishlist! ☜(ﾟヮﾟ☜)`);
  currentAlbum.wish_list = true;
}

//ALLOWS FOR INTEGER INCREASES IN POPULARITY SCORE
function engagePopularityForm() {
  let popularityForm = document.querySelector('#popularity-form');
  popularityForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const scoreAdd = event.target['pop-score'].value;
    currentAlbum.popularity += parseInt(scoreAdd);
    document.querySelector('#score').textContent = Math.min(Math.max(parseInt(currentAlbum.popularity), 0), 100);
    popularityForm.reset();
  })
}

//RESETS TOTAL SCORE BACK TO 0
function engageResetButton(){
  const resetButton = document.querySelector('#reset-button');
  resetButton.addEventListener('click', () => {
    currentAlbum.popularity = 0
    document.querySelector('#score').textContent = 0
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
//     },
//     "wish_list": false
// }