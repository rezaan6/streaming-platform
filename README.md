# Streaming Platform

## Table of Contents

- [Description](#description)
  - [Client](#client)
  - [Server](#server)
- [Tech Stack](#tech-stack)
- [Features](#features-wait-until-gifs-load)
- [TMDB API](#tmdb-api)
- [Format Configuration](#format-configuration)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)

## Description

MoonStream is a full-stack MERN movie website, that offers a dynamic, responsive, and interactive user experience for movie enthusiasts. Users can explore a vast library of movies and TV series, search for their favorite titles, and enjoy personalized recommendations. The project comprises two main components: the "client" folder for the frontend and the "server" folder for the backend.

### Client

The "client" folder contains a feature-rich frontend built with [Create React App](https://create-react-app.dev/), [Material UI](https://mui.com/) for styling and responsive design, [Swiper](https://swiperjs.com/) for carousel functionality, [React Router](https://reactrouter.com/) for seamless navigation, [Formik](https://formik.org/) and [Yup](https://github.com/jquense/yup) for form handling, and [Axios](https://axios-http.com/) for API calls. This visually appealing and well-structured user interface offers a smooth and intuitive browsing experience, and is deployed using [Vercel](https://vercel.com/docs).

### Server

The "server" folder houses a robust backend powered by [ExpressJS](https://expressjs.com/), [JWT](https://github.com/auth0/node-jsonwebtoken) for secure user authentication, [Mongoose](https://mongoosejs.com/) for persistent data storage in a MongoDB database, and Axios for interacting with the TMDB API. The [Express Validator](https://express-validator.github.io/docs/) library is also utilized for validating user inputs. This backend component manages user accounts, favorites, and reviews, ensuring a seamless experience across all aspects of the application. The server is deployed using a platform [Render](https://render.com/).

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
- [Vercel](https://vercel.com/docs)
- [Render](https://render.com/)

## Features (wait until GIFs load)

- User authentication (Sign up/Sign in).

![User authentication](https://user-images.githubusercontent.com/72515147/226116863-d57904f2-91a5-4174-acee-92f4d0522f18.gif)

- Suggestion by Category .

![Suggestions](https://user-images.githubusercontent.com/72515147/226116927-ad76100e-8364-4fec-814b-a7ab8b08c089.gif)

- View list of movies and TV shows.

![Movie and TV shows](https://user-images.githubusercontent.com/72515147/226122172-c00fc605-cd9d-4785-8da1-0348e4ccf8d7.gif)

- Sort out by Popular and Top Rated

![Sort by Popular and Rated](https://user-images.githubusercontent.com/72515147/226122421-cae6b4c0-be7a-482e-970e-da0d43c31acc.gif)

- Theme support from Dark/Light

![Theme Switch](https://user-images.githubusercontent.com/72515147/226175263-46834f43-32cd-4f40-b1c6-5cd91987dec5.gif)

- Details of Movie

- Details of TV Show

- Details of Person



![Person](https://user-images.githubusercontent.com/72515147/226176096-a93143d4-ef4d-4fe4-b91d-9c320e7fbdd9.mp4)




- Write and delete movie reviews

Add and remove movies to/from Favorite list




<a href="[https://drive.google.com/uc?export=view&id=XXX](https://drive.google.com/uc?export=view&id=1VJswCFOOKnSj8S-3YZ3e-iOMNHnTI0BX)"><img src="[https://drive.google.com/uc?export=view&id=XXX](https://drive.google.com/uc?export=view&id=1VJswCFOOKnSj8S-3YZ3e-iOMNHnTI0BX)" style="width: 500px; max-width: 100%; height: auto" title="Click for the larger version." /></a>
- Light and Dark theme support




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

- Generated key available in your DB cluster connect option.
```
MONGODB_URL = 
```

- PORT is Default
```
PORT=5000
```

- Generate using `openssl rand -base64 32`
```
TOKEN_SECRET=
```

- Generated key avaiable in [TMDB API](https://www.themoviedb.org/settings/api)
```
TMDB_BASE_URL= `e.g. https://api.themoviedb.org/3/` 
TMDB_KEY=
```
