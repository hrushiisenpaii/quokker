

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eabaf5e84cmsh7e077c936e3ef93p1f020fjsnad03ba6fe338',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

function getResults () {
  fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=1', options)
	.then(response => {
    return response.json();
  })
  .then(displayResults)
}

function displayResults (response) {
  let quote = document.querySelector('.container .quote');
  quote.innerText = response[0].text;

  let auth = document.querySelector('.container .author');
  auth.innerText = "- " + response[0].author;
}



document.addEventListener("DOMContentLoaded",
  function (event){
    getResults();
    document.body.style.backgroundImage = "url('https://picsum.photos/1280/1024/')";
  })



