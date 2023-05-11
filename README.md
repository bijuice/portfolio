# Portfolio v1

You can try out this web app using this link : http://bijuiceflix.herokuapp.com/

## Description:

This is a Netflix inspired portfolio used to showcase my skills, experience, and personal projects. This app is primarily made using React.

#### Packages/Technologies:

- React
- Firebase
- Framer Motion
- Material UI

#### Folder Structure

- src/App.js : main file
- src/Views : all main views and routes
- src/utilites: reusable utilites e.g Video player and window dimensions function
- src/preferences: stores reusable preferences for themes and animations

### How it was made

1. Most UI components are from Material UI
2. Cards assets and logos designed and edited using Figma
3. Card animations made using CSS
4. All other animations made using Framer Motion
5. Video player created from scratch using custom hook.
6. Uses Firebase to store video content

## Issues

- Not responsive at all resolutions.
- Assets hosted on frontend, leads to performance issues.
- Currently unusable on mobile.

## Possible Improvements

- Improve responsiveness for all resolutions.
- Host all assets on Firebase.
- Create mobile version.

## Installation Instructions

```
git clone https://github.com/bijuice/portfolio.git
cd ./portfolio/
npm install
```

## Usage

```
cd ./portfolio/
npm run start
```
