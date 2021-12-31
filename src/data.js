import firebasecard from "./assets/images/firebasecard.svg";
import fluttercard from "./assets/images/fluttercard.svg";
import reactcard from "./assets/images/reactcard.svg";
import vuecard from "./assets/images/vuecard.svg";
import materialcard from "./assets/images/materialcard.svg";
import bootstrapcard from "./assets/images/bootstrapcard.svg";
import laravelcard from "./assets/images/laravelcard.svg";
import nodecard from "./assets/images/nodecard.svg";
import flutter from "./assets/images/flutter.svg";
import firebase from "./assets/images/firebase.svg";
import figma from "./assets/images/figma.svg";
import culturecapture from "./assets/images/culturecapture.png";
import hisa from "./assets/images/hisa.png";
import vue from "./assets/images/vue.svg";
import laravel from "./assets/images/laravel.svg";
import bootstrap from "./assets/images/bootstrap.svg";
import bijuiceflix from "./assets/images/bijuiceflix.png";
import react from "./assets/images/react.svg";
import material from "./assets/images/material.svg";
import gokenya from "./assets/images/gokenya.png";

export const skills = [
  {
    id: 1,
    title: "React",
    quantity: 1,
    imageURL: reactcard,
  },
  {
    id: 2,
    title: "Vue",
    quantity: 1,
    imageURL: vuecard,
  },
  {
    id: 3,
    title: "Flutter",
    quantity: 1,
    imageURL: fluttercard,
  },
  {
    id: 4,
    title: "Material UI",
    quantity: 1,
    imageURL: materialcard,
  },
  {
    id: 5,
    title: "Bootstrap",
    quantity: 1,
    imageURL: bootstrapcard,
  },
  {
    id: 6,
    title: "Firebase",
    quantity: 1,
    imageURL: firebasecard,
  },
  {
    id: 7,
    title: "Laravel",
    quantity: 1,
    imageURL: laravelcard,
  },
  {
    id: 8,
    title: "Node/Express",
    quantity: 1,
    imageURL: nodecard,
  },
];

export const experience = [
  {
    id: 1,
    title: "Hisa",
    imageURL: hisa,
    year: "2021",
    duration: "7 months",
    link: "https://hisa.co/",
    role: "Fullstack Developer",
    tools: [
      { title: "Vue JS", icon: vue },
      { title: "Bootstrap", icon: bootstrap },
      { title: "Laravel", icon: laravel },
    ],
  },
  {
    id: 2,
    title: "Culture Capture",
    imageURL: culturecapture,
    year: "2020",
    duration: "1 year",
    link: "https://hisa.co/",
    role: "Co-Founder",

    tools: [
      { title: "Flutter", icon: flutter },
      { title: "Firebase", icon: firebase },
      { title: "Figma", icon: figma },
    ],
  },
  {
    id: 3,
    title: "KamiLimu",
    imageURL: "https://bit.ly/32i63Kz",
    year: "2021",
    duration: "5 months",
    link: "https://hisa.co/",
    role: "Mentor",
  },
  {
    id: 4,
    title: "USIU Africa",
    imageURL: "https://www.usiu.ac.ke/assets/image/usiu-logo.png",
    year: "2017",
    duration: "4 Years",
    link: "https://hisa.co/",
    role: "Student",
  },
];

export const projects = [
  {
    id: 1,
    title: "Culture Capture App",
    quantity: 1,
    imageURL: culturecapture,
    genres: "Android/ iOS App",
    year: "2020",
    tools: [
      { title: "Flutter", icon: flutter },
      { title: "Firebase", icon: firebase },
      { title: "Figma", icon: figma },
    ],
  },
  {
    id: 2,
    title: "Bijuiceflix",
    quantity: 1,
    imageURL: bijuiceflix,
    genres: "Web App",
    year: "2021",
    tools: [
      { title: "React", icon: react },
      { title: "Material UI", icon: material },
      { title: "Figma", icon: figma },
    ],
  },
  {
    id: 3,
    title: "Hisa Web App",
    quantity: 1,
    imageURL: hisa,
    genres: "Web App",
    year: "2021",
    tools: [
      { title: "Vue JS", icon: vue },
      { title: "Bootstrap", icon: bootstrap },
      { title: "Laravel", icon: laravel },
    ],
  },
  {
    id: 4,
    title: "GoKenya App",
    quantity: 1,
    imageURL: gokenya,
    genres: "Android/ iOS App",
    year: "2021",
    tools: [
      { title: "Flutter", icon: flutter },
      { title: "Firebase", icon: firebase },
    ],
  },
];
