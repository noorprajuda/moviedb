"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Breadcrumb = ({ title  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-zinc-800",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center max-w-7xl m-auto p-4 text-white text-lg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "hover:opacity-80 cursor-pointer duration-300",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "block px-2",
                    children: "|"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-bold truncate",
                    children: title
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 7267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MovieInfo_MovieInfo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./helpers.ts
// Convert time to hours and minutes
const calcTime = (time)=>{
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
const convertMoney = (money)=>{
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    });
    return formatter.format(money);
};

// EXTERNAL MODULE: ./components/Thumb/Thumb.tsx
var Thumb = __webpack_require__(1610);
;// CONCATENATED MODULE: ./components/Pill/Pill.tsx

const Pill = ({ className , text  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `bg-yellow-500 text-white text-sm font-bold px-2 py-1 m-2 rounded-full inline-block ${className}`,
        children: text
    });
/* harmony default export */ const Pill_Pill = (Pill);

;// CONCATENATED MODULE: ./components/MovieInfo/MovieInfo.tsx


// Helpers

// Components


const MovieInfo = ({ thumbUrl , backgroundImgUrl , title , year , summary , rating , directors , time , budget , revenue  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative w-full h-auto p-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative w-full h-96 md:h-auto md:w-1/3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Thumb/* default */.Z, {
                            imgUrl: thumbUrl
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-white px-0 py-4 md:py-0 text-left md:px-8 w-full md:w-2/3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                className: "text-2xl md:text-4xl font-bold pb-4",
                                children: [
                                    title,
                                    " (",
                                    year,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row mb-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-yellow-500",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "w-6 h-6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "ml-2",
                                        children: [
                                            rating.toFixed(1),
                                            " / 10"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-lg font-bold",
                                children: "Summary"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-8 text-sm text-justify md:text-left md:text-lg",
                                children: summary
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                className: "text-lg font-bold",
                                                children: [
                                                    "Director",
                                                    directors.length > 1 ? "s" : ""
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: directors.map((director)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: director.name
                                                    }, director.credit_id))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-lg font-bold",
                                                children: "Movie data"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pill_Pill, {
                                                className: "md:ml-0",
                                                text: `Running time: ${calcTime(time)}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pill_Pill, {
                                                text: `Budget: ${convertMoney(budget)}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Pill_Pill, {
                                                text: `Revenue: ${convertMoney(revenue)}`
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                priority: true,
                placeholder: "blur",
                blurDataURL: "/placeholder.jpg",
                objectFit: "cover",
                objectPosition: "center",
                layout: "fill",
                src: backgroundImgUrl,
                alt: "thumb"
            })
        ]
    });
/* harmony default export */ const MovieInfo_MovieInfo = (MovieInfo);


/***/ }),

/***/ 6668:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8288);
/* harmony import */ var _api_fetchFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6124);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2923);
/* harmony import */ var _components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(700);
/* harmony import */ var _components_MovieInfo_MovieInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var _components_Grid_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(253);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__]);
_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Basic fetch

// Components





const Movie = ({ movie , cast , directors  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: movie.original_title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MovieInfo_MovieInfo__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                thumbUrl: movie.poster_path ? _config__WEBPACK_IMPORTED_MODULE_1__/* .IMAGE_BASE_URL */ .f_ + _config__WEBPACK_IMPORTED_MODULE_1__/* .POSTER_SIZE */ .sc + movie.poster_path : "/no_image.jpg",
                rating: movie.vote_average,
                year: movie.release_date.split("-")[0],
                backgroundImgUrl: movie.backdrop_path ? _config__WEBPACK_IMPORTED_MODULE_1__/* .IMAGE_BASE_URL */ .f_ + _config__WEBPACK_IMPORTED_MODULE_1__/* .BACKDROP_SIZE */ .Ak + movie.backdrop_path : "/no_image.jpg",
                title: movie.original_title,
                summary: movie.overview,
                directors: directors,
                time: movie.runtime,
                budget: movie.budget,
                revenue: movie.revenue
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Grid_Grid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "p-4 max-w-7xl m-auto",
                title: "Actors",
                children: cast.map((actor)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        imgUrl: actor.profile_path ? _config__WEBPACK_IMPORTED_MODULE_1__/* .IMAGE_BASE_URL */ .f_ + _config__WEBPACK_IMPORTED_MODULE_1__/* .POSTER_SIZE */ .sc + actor.profile_path : "/no_image.jpg",
                        title: actor.name,
                        subtitle: actor.character,
                        vote_average: movie.vote_average
                    }, actor.credit_id))
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movie);
const getStaticProps = async (context)=>{
    const id = context.params?.id;
    const movieEndpoint = (0,_config__WEBPACK_IMPORTED_MODULE_1__/* .movieUrl */ .sQ)(id);
    const creditsEndpoint = (0,_config__WEBPACK_IMPORTED_MODULE_1__/* .creditsUrl */ .N2)(id);
    const movie = await (0,_api_fetchFunctions__WEBPACK_IMPORTED_MODULE_7__/* .basicFetch */ .S)(movieEndpoint);
    const credits = await (0,_api_fetchFunctions__WEBPACK_IMPORTED_MODULE_7__/* .basicFetch */ .S)(creditsEndpoint);
    // Get the directors only
    const directors = credits.crew.filter((member)=>member.job === "Director");
    return {
        props: {
            movie,
            directors,
            cast: credits.cast
        },
        revalidate: 60 * 60 * 24 // Re-build page every 24 hours
    };
};
const getStaticPaths = async ()=>{
    return {
        paths: [],
        fallback: "blocking"
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 291:
/***/ ((module) => {

module.exports = import("@heroicons/react/24/solid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,652], () => (__webpack_exec__(6668)));
module.exports = __webpack_exports__;

})();