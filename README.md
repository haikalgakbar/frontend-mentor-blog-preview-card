# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Commands](#commands)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:5173`      |
| `npm run build`           | Build your production site at `./dist`         |
| `npm run preview`         | Preview your build locally, before deploying     |

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/frontend-mentor-blog-preview-card_thumbnail.png)

### Links

- Solution URL: [Github](https://github.com/haikalgakbar/frontend-mentor-blog-preview-card)
- Live Site URL: [Github pages](https://haikalgakbar.github.io/frontend-mentor-blog-preview-card/)

## My process

### Built with

- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React JS](https://react.dev/)

### What I learned

we can use the tailwind group to give a hover effect to the child of a component

```text
├── parent component /
│   └── child element /
│       └── another child element /
```
```jsx
<section className="group {some tailwindcss}">
/* ... */
  <h1 className="group-hover:text-[color:hsl(47,_88%,_63%)] {other tailwind code}">
    HTML & CSS foundations
  </h1>
/* ... */
</section>
```

[Styling based on parent state (group-{modifier})](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state) to learn more.

## Author

- Frontend Mentor - [@haikalgakbar](https://www.frontendmentor.io/profile/haikalgakbar)
- Twitter - [@haikalgakbar](https://www.twitter.com/haikalgakbar)
