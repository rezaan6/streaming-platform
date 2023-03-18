# Streaming Platform

## Table of Contents



- [Description](#description)
- [Tech Stack](#tech-stack)
- [Features](#features-wait-until-gifs-load)
- [Rapid API](#rapid-api)
    - [CoinRanking](#coinranking)
    - [Bing News Search](#bing-news-search)
- [Format Configuration](#format-configuration)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)

## Description

In summary, this project is a full-stack web application that combines the Vite framework, Tailwind CSS, Prettier, ExpressJS, Cloudinary, and MongoDB to deliver a dynamic and efficient user experience.The output of this project is a real-time, interactive application that allows users to generate unique images and art based on their descriptions in natural language. The generated content is then stored and managed using Cloudinary, making it accessible and shareable across the web.

Client
The "client" folder is a front-end application built using the Vite framework. It utilizes the Tailwind CSS framework for styling and the Prettier library for code formatting to deliver a visually appealing and well-structured user interface. It also support TypeScript, and its deployed using Vercel

Server
The "server" folder is a back-end component powered by ExpressJS. It uses Cloudinary to store and manage images, and is connected to a MongoDB database for persistent data storage. It also utilizes the OpenAI's DALL·E 2 AI system, which generates realistic images and art from a description in natural language and its deployed using Render

## Tech Stack

- [React](https://reactjs.org)
- [Create React App](https://create-react-app.dev/)
- [Material UI](https://mui.com/)
- [Mongoose](https://mongoosejs.com/)
- [ExpressJS](https://expressjs.com/)
- [Express Validator](https://express-validator.github.io/docs/)
- [React Router](https://reactrouter.com/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://axios-http.com/)
- [Swiper](https://swiperjs.com/)
- [ThemovieDB](https://www.themoviedb.org)
- [JWT](https://github.com/auth0/node-jsonwebtoken)

## Features (wait until GIFs load)

- View Dashboard.


- List of Crypto currency info.


- Searchable list by crypto currencies.


- List of Crypto News.


- Filter Crypto News by category.


- View Crypto News. 


- List of Exchanges rates Info


- Details of a Cryptocurrency.


- Links to list for a Cryptocurrency.


- Chart view and filter by duration


- Responsive Support


## TMDB API

- `tmdb.endpoints.js`

  - `mediaList`: This function generates a URL for retrieving a list of media (movies or TV shows) based on the specified mediaType, mediaCategory, and page number. The mediaType parameter specifies the type of media to retrieve, which can be either 'movie' or 'tv'. The mediaCategory parameter specifies the category of media to retrieve, which can be any of the following: 'popular', 'top_rated', 'upcoming', or 'now_playing'. The page parameter specifies the page number of the results to retrieve.

  - `mediaGenres`: This function generates a URL for retrieving a list of genres for a specific mediaType. The mediaType parameter specifies the type of media to retrieve genres for, which can be either 'movie' or 'tv'.

  - `mediaCredits`: This function generates a URL for retrieving the credits (cast and crew) for a specific media item based on the specified mediaType and mediaId. The mediaType parameter specifies the type of media to retrieve credits for, which can be either 'movie' or 'tv'. The mediaId parameter specifies the unique identifier of the media item to retrieve credits for.

  - `mediaVideos`: This function generates a URL for retrieving the videos (trailers, teasers, etc.) for a specific media item based on the specified mediaType and mediaId. The mediaType parameter specifies the type of media to retrieve videos for, which can be either 'movie' or 'tv'. The mediaId parameter specifies the unique identifier of the media item to retrieve videos for.

  - `mediaRecommend`: This function generates a URL for retrieving recommended media items based on a specific media item based on the specified mediaType and mediaId. The mediaType parameter specifies the type of media to retrieve recommendations for, which can be either 'movie' or 'tv'. The mediaId parameter specifies the unique identifier of the media item to retrieve recommendations for.

  - `mediaImages`: This function generates a URL for retrieving images (posters, backdrops, etc.) for a specific media item based on the specified mediaType and mediaId. The mediaType parameter specifies the type of media to retrieve images for, which can be either 'movie' or 'tv'. The mediaId parameter specifies the unique identifier of the media item to retrieve images for.

  - `mediaSearch`: This function generates a URL for searching for media items based on the specified mediaType, query, and page number. The mediaType parameter specifies the type of media to search for, which can be either 'movie' or 'tv'. The query parameter specifies the search query to use. The page parameter specifies the page number of the results to retrieve.

  - `personDetail`: This function generates a URL for retrieving details of a specific person based on their personId.

  - `personMedias`: This function generates a URL for retrieving a list of media items that a specific person has been involved in based on their `personId

```
import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig.getUrl(
    `${mediaType}/${mediaCategory}`, { page }
  ),
  mediaDetail: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
    `${mediaType}/${mediaId}`
  ),
  mediaGenres: ({ mediaType }) => tmdbConfig.getUrl(
    `genre/${mediaType}/list`
  ),
  mediaCredits: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
    `${mediaType}/${mediaId}/credits`
  ),
  mediaVideos: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
    `${mediaType}/${mediaId}/videos`
  ),
  mediaRecommend: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
    `${mediaType}/${mediaId}/recommendations`
  ),
  mediaImages: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
    `${mediaType}/${mediaId}/images`
  ),
  mediaSearch: ({ mediaType, query, page }) => tmdbConfig.getUrl(
    `search/${mediaType}`, { query, page }
  ),
  personDetail: ({ personId }) => tmdbConfig.getUrl(
    `person/${personId}`
  ),
  personMedias: ({ personId }) => tmdbConfig.getUrl(
    `person/${personId}/combined_credits`
  ),
};

```

## Format Configuration
```

{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true
}

```

## Folder Structure
```
.
|-- client
|   |-- README.md      
|   |-- package.json   
|   |-- public
|   |   |-- favicon.ico
|   |   |-- index.html
|   |   |-- logo192.png
|   |   |-- logo512.png
|   |   |-- manifest.json
|   |   `-- robots.txt
|   |-- src
|   |   |-- App.jsx
|   |   |-- api
|   |   |   |-- client
|   |   |   |   |-- private.client.js
|   |   |   |   `-- public.client.js
|   |   |   |-- configs
|   |   |   |   `-- tmdb.configs.js
|   |   |   `-- modules
|   |   |       |-- favorite.api.js
|   |   |       |-- genre.api.js
|   |   |       |-- media.api.js
|   |   |       |-- person.api.js
|   |   |       |-- review.api.js
|   |   |       `-- user.api.js
|   |   |-- components
|   |   |   |-- common
|   |   |   |   |-- AuthModal.jsx
|   |   |   |   |-- AutoSwiper.jsx
|   |   |   |   |-- BackdropSlide.jsx
|   |   |   |   |-- CastSlide.jsx
|   |   |   |   |-- CircularRate.jsx
|   |   |   |   |-- Container.jsx
|   |   |   |   |-- Footer.jsx
|   |   |   |   |-- GlobalLoading.jsx
|   |   |   |   |-- HeroSlide.jsx
|   |   |   |   |-- ImageHeader.jsx
|   |   |   |   |-- Logo.jsx
|   |   |   |   |-- MediaGrid.jsx
|   |   |   |   |-- MediaItem.jsx
|   |   |   |   |-- MediaReview.jsx
|   |   |   |   |-- MediaSlide.jsx
|   |   |   |   |-- MediaVideosSlide.jsx
|   |   |   |   |-- NavigationSwiper.jsx
|   |   |   |   |-- PageWrapper.jsx
|   |   |   |   |-- PersonMediaGrid.jsx
|   |   |   |   |-- PosterSlide.jsx
|   |   |   |   |-- ProtectedPage.jsx
|   |   |   |   |-- RecommendSlide.jsx
|   |   |   |   |-- Sidebar.jsx
|   |   |   |   |-- SigninForm.jsx
|   |   |   |   |-- SignupForm.jsx
|   |   |   |   |-- TextAvatar.jsx
|   |   |   |   |-- Topbar.jsx
|   |   |   |   `-- UserMenu.jsx
|   |   |   `-- layout
|   |   |       `-- MainLayout.jsx
|   |   |-- configs
|   |   |   |-- menu.configs.js
|   |   |   |-- theme.configs.js
|   |   |   `-- ui.configs.js
|   |   |-- hooks
|   |   |   `-- usePrevious.jsx
|   |   |-- index.jsx
|   |   |-- pages
|   |   |   |-- FavoriteList.jsx
|   |   |   |-- HomePage.jsx
|   |   |   |-- MediaDetail.jsx
|   |   |   |-- MediaList.jsx
|   |   |   |-- MediaSearch.jsx
|   |   |   |-- PasswordUpdate.jsx
|   |   |   |-- PersonDetail.jsx
|   |   |   `-- ReviewList.jsx
|   |   |-- redux
|   |   |   |-- features
|   |   |   |   |-- appStateSlice.js
|   |   |   |   |-- authModalSlice.js
|   |   |   |   |-- globalLoadingSlice.js
|   |   |   |   |-- themeModeSlice.js
|   |   |   |   `-- userSlice.js
|   |   |   `-- store.js
|   |   |-- routes
|   |   |   `-- routes.jsx
|   |   `-- utils
|   |       `-- favorite.utils.js
|   `-- yarn.lock
`-- server
    |-- index.js
    |-- package.json
    |-- src
    |   |-- axios
    |   |   `-- axios.client.js
    |   |-- controllers
    |   |   |-- favorite.controller.js
    |   |   |-- media.controller.js
    |   |   |-- person.controller.js
    |   |   |-- review.controller.js
    |   |   `-- user.controller.js
    |   |-- handlers
    |   |   |-- request.handler.js
    |   |   `-- response.handler.js
    |   |-- middlewares
    |   |   `-- token.middleware.js
    |   |-- models
    |   |   |-- favorite.model.js
    |   |   |-- model.options.js
    |   |   |-- review.model.js
    |   |   `-- user.model.js
    |   |-- routes
    |   |   |-- index.js
    |   |   |-- media.route.js
    |   |   |-- person.route.js
    |   |   |-- review.route.js
    |   |   `-- user.route.js
    |   `-- tmdb
    |       |-- tmdb.api.js
    |       |-- tmdb.config.js
    |       `-- tmdb.endpoints.js
    `-- yarn.lock

```

## Environment Variables

- Generated key availiable in [CoinRanking](https://rapidapi.com/Coinranking/api/coinranking1) under section "Endpoint".
```
REACT_APP_RAPIDAPI_KEY = 
REACT_APP_CRYPTO_RAPIDAPI_HOST =
REACT_APP_CRYPTO_API_URL = 
```

- Generated key availiable in [Bing News Search](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1) under section "Endpoint".
```
REACT_APP_NEWS_API_URL = '
REACT_APP_NEWS_RAPIDAPI_HOST = 
```
