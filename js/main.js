var elList = document.querySelector(".js-list");

function domgaChiqarator(array, node){
  for (movie of array) {
    var newItem = document.createElement('li');
    newItem.setAttribute('class', 'item');
    var newId = document.createElement('span');
    var newTitle = document.createElement('h2');
    newTitle.setAttribute('class', 'name');
    var newPoster = document.createElement('img');
    var newTime = document.createElement('p');
    var newWeaknesses = document.createElement('p');
    var newMultipliers = document.createElement('p');
    var newImg = document.createElement('img');
    

    newId.textContent = `id: ${movie.id}`;
    newTitle.textContent = ` ${movie.title}`;
    newWeaknesses.textContent = `overview: ${movie.overview}`;
    newTime.textContent = `release_date: ${movie.release_date}`;
    newPoster.src = `${movie.poster}`;
    newMultipliers.textContent = `genres: ${movie.genres}`;
    newPoster.setAttribute('alt', 'Template img');
    newPoster.setAttribute('width', '100%');
    newPoster.setAttribute('height', '200');
    
    
    newImg.style.display = 'block';
    newId.style.color = 'black';
    newId.style.display = 'block';
    newId.style.fontSize = '32px';
    newId.style.textAlign = 'center';
    newWeaknesses.style.fontWeight = '900';
    
    
    newItem.appendChild(newId);
    newItem.appendChild(newTitle);
    newItem.appendChild(newPoster);
    newItem.appendChild(newTime);
    newItem.appendChild(newMultipliers);
    newItem.appendChild(newWeaknesses);
    node.appendChild(newItem);
  }
}
domgaChiqarator(films, elList)

const elSelect = document.querySelector(".js-select");
let result = [];
elSelect.addEventListener("change", function () {
  elList.innerHTML = "";
  result = [];
  selVal = elSelect.value;
  films.forEach((film) => {
    if (film.genres.includes(selVal)) {
      result.push(film);
    }
  });
  
  domgaChiqarator(result, elList);
});

const optionsList = new Set();
const optionList = [];
films.forEach((element) => {
  element.genres.forEach((el) => optionsList.add(el));
})  

optionsList.forEach((genres) => {
  let newOption = document.createElement('option');
  newOption.textContent = genres;
  newOption.value = genres;
  elSelect.appendChild(newOption);
})
