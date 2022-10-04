fetch("http://localhost:3000/albums")
.then(response => response.json())
.then(json => {
  console.log(json)
})