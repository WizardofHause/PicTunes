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
    engageWishButton()
    engagePopularityForm()
    engageResetButton()
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

function displayData(album) {
  currentAlbum = album;

  let albumTitle = document.querySelector('#album-title');
  let albumImg = document.querySelector('#main-display');
  let artistName = document.querySelector('#artist-name');
  let releaseDate = document.querySelector('#release-date');
  let trackList = document.querySelector('#track-list');
  let popularityScore = document.querySelector('#score')
  let wishButton = document.querySelector('#wish-button')

  albumTitle.textContent = `${album.title}`;
  albumImg.src = album.img_url;
  artistName.textContent = `Artist: ${album.artist}`;
  releaseDate.textContent = `Released: ${album.date.month} ${album.date.day}, ${album.date.year}`;
  trackList = getTrackData(album.tracks);
  popularityScore.textContent = `${album.popularity}`;
  wishButton.textContent = album.wish_list ? 'ADDED!' : 'ADD TO WISHLIST';
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

//MAKES A <P> ELEMENT, GIVES IT CLASS .WISHED, ALBUMTITLE CONTENT, AND ADDS IT TO THE WISHLIST DIV
function createWishedItem() {
  let wishList = document.querySelector('#wish-list')
  let albumTitle = document.querySelector('#album-title')

  let wishedAlbum = document.createElement('li')
  wishedAlbum.classList.add('wished')
  wishedAlbum.textContent = (albumTitle.textContent)
  wishList.appendChild(wishedAlbum)
}

//ALERTS THAT THE ALBUM IS ALREADY ADDED
function alertAlreadyWished() {
  let albumTitle = document.querySelector('#album-title')
  alert(`(☞ﾟヮﾟ)☞ ${albumTitle.textContent} is already on your wishlist! ☜(ﾟヮﾟ☜)`);
  currentAlbum.wish_list = true;
}

function engagePopularityForm() {
  let popularityForm = document.querySelector('#popularity-form');
  popularityForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const scoreAdd = event.target['pop-score'].value;
    currentAlbum.popularity += parseInt(scoreAdd);
    document.querySelector('#score').textContent = currentAlbum.popularity;
    popularityForm.reset();
  })
}

function engageResetButton() {
  const resetButton = document.querySelector('#reset-button');
  resetButton.addEventListener('click', () => {
    currentAlbum.popularity = 0
    document.querySelector('#score').textContent = 0
  })
}

//CREATE A 'LISTED' BOOLEAN ATTRIBUTE IN THE ALBUMS OBJECTS TO CHECK FOR WISHLIST
//WRITE CSS TO COLLECT THE ALBUM ART INTO ONE CLEAN CONTAINER...PAGE BOOK?
//MAKE POPULARITY SCORE ADJUSTABLE
//

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