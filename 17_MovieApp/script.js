const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8756af8fcfb38035523f4b7f85252af3&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8756af8fcfb38035523f4b7f85252af3&query="';
const form = document.getElementById('form');
const main = document.getElementById('main');
//Get initial movies
getMovies(API_URL);

/**
 * Get movies
 * @param {string} url 
 */
async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results)
    //Delete all children of main element
    main.innerHTML = '';
    data.results.forEach(element => {
        console.log(element);
        const innerHTML = `
        <img src="${IMG_PATH + element.backdrop_path}" alt="${element.title + ' poster'}" />
        <div class="movie-info">
          <h3>${element.title}</h3>
          <span class="${element.vote_average<5? 'red': element.vote_average<8? 'orange' :'green'}">${element.vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${element.overview}
        </div>
        `
        const resElement = document.createElement('div');
        resElement.className = 'movie';
        resElement.innerHTML = innerHTML;
        main.appendChild(resElement);
    });


    // showMovies(data.results);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
})

