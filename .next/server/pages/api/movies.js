"use strict";
(() => {
var exports = {};
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 4679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./config.ts
// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/
const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.API_KEY;
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
// For single movie
const movieUrl = (id)=>`${API_URL}movie/${id}?api_key=${API_KEY}`;
const creditsUrl = (id)=>`${API_URL}movie/${id}/credits?api_key=${API_KEY}`;
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";


;// CONCATENATED MODULE: ./api/fetchFunctions.ts
const basicFetch = async (endpoint)=>{
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Error!");
    const data = await response.json();
    return data;
};
// Fetch functions
const fetchMovies = async (search = "", page = 1)=>{
    return await basicFetch(`/api/movies?search=${search}&page=${page}`);
};

;// CONCATENATED MODULE: ./pages/api/movies.ts
// API Urls

// Basic fetch function

async function handler(req, res) {
    const { page , search  } = req.query; // Grab search params
    const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${POPULAR_BASE_URL}&page=${page}`;
    const data = await basicFetch(endpoint);
    res.status(200).json(data);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4679));
module.exports = __webpack_exports__;

})();