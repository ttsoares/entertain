# Frontend Mentor - Entertainment web app solution

This is a solution to the [Entertainment web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X). Frontend Mentor challenges help you improve your coding skills by building realistic project.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate between Home, Movies, TV Series, and Bookmarked Shows pages
- Add/Remove bookmarks from all movies and TV series
- Search for relevant shows on all pages
- **Bonus**: Build this project as a full-stack application
- **Bonus**: If you're building a full-stack app, we provide authentication screen (sign-up/login) designs if you'd like to create an auth flow

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/ttsoares/entertain)
- Live Site URL: [Add live site URL here](https://entertain-liard.vercel.app/home)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- TailwindCSS
- Ionic
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS utility classes
- [Ionic](https://ionicframework.com/) - Render JS code to native APPs to Web, IOS and Android

### What I learned

How to configure the module Swiper.

```js
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={5}
    freeMode={true}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
```

### Continued development

Still strugling with routing/navigating processes outside NextJS...

### Useful resources

- [Swiper demos](https://swiperjs.com/demos) - TPremium Swiper templates & plugins from UI Initiative.
- [Bcrypt](https://www.digitalocean.com/community/tutorials/how-to-handle-passwords-safely-with-bcryptsjs-in-javascript) - Protecting website passwords is an essential skill any developer should have.

## Author

- Website - [Thomas TS](https://buildesign.vercel.app/)
- Frontend Mentor - [@ttsoares](https://www.frontendmentor.io/profile/ttsoares)
- Linkedin - [thomas-soares-6791781b/](https://www.linkedin.com/in/thomas-soares-6791781b/)

## Acknowledgments

The AI Codeium associated with ChatGPT has been very helpfull while I'm migrating to Typescript.
