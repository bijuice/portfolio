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
import react from "./assets/images/react.svg";
import material from "./assets/images/material.svg";
import culturecapturelogo from "./assets/images/culturecapturelogo.png";
import hisalogo from "./assets/images/hisalogo.png";
import usiulogo from "./assets/images/usiulogo.png";
import kamilimulogo from "./assets/images/kamilimulogo.png";
import bijuicelogo from "./assets/images/bijuicelogo.png";
import markdownlogo from "./assets/images/markdownlogo.png";

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
    logo: hisalogo,
    card: hisa,
    year: "2021",
    duration: "7 months",
    role: "Fullstack Developer",
    tools: [
      { title: "Vue JS", icon: vue },
      { title: "Bootstrap", icon: bootstrap },
      { title: "Laravel", icon: laravel },
    ],
    links: [
      {
        title: "Website",
        url: "https://www.hisa.co",
      },
    ],
    description:
      "<p>Hisa is Africa's first wealth management platform that makes investing social. The app allows users access to different investment options like stocks and ETFs. The app also provides educational content like news, podcasts and user generated discussions aimed at improving users' financial literacy.</p> <p>In this role I utilized Vue JS with the Composition API and Bootstrap 4 to create a single page web app used to manage users of the Hisa financial platform</p>",
  },
  {
    id: 2,
    title: "Culture Capture",
    card: culturecapture,
    logo: culturecapturelogo,
    year: "2020",
    duration: "1 year",
    role: "Co-Founder",
    tools: [
      { title: "Flutter", icon: flutter },
      { title: "Firebase", icon: firebase },
      { title: "Figma", icon: figma },
    ],
    links: [
      {
        title: "Instagram",
        url: "https://www.instagram.com/culture_capture_/",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/CultureCapture_",
      },
    ],
    description:
      "<p> Culture Capture is a social digital museum with gamification aspects. The platform aims to preserve native cultures by encouraging users to upload pictures, audio and video of their culture's food, dances, and rituals. </p>  <p> This platform was designed using Figma. The mobile apps are currently being created using Dart and Flutter for iOS and Android, while using Firebase as a 'backend as a service' </p>",
  },
  {
    id: 3,
    title: "KamiLimu",
    logo: kamilimulogo,
    card: "https://bit.ly/32i63Kz",
    year: "2021",
    duration: "5 months",
    role: "Mentor",
    links: [
      {
        title: "Website",
        url: "https://www.kamilimu.org/",
      },
    ],
    description:
      "<p>KamiLimu is a free 8-month structured mentorship program that seeks to augment classroom learning for Computer Science students at Kenyan universities.</p> <p>In this role I participated in top level decision making for the programme, including advising on the creation of a 5 year strategic plan. I also trained a group of 4 mentees on core skills such as CV writing, confidence building,public speaking, and scholarship writing",
  },
  {
    id: 4,
    title: "USIU Africa",
    logo: usiulogo,
    card: "https://www.usiu.ac.ke/assets/image/usiu-logo.png",
    year: "2017",
    duration: "4 Years",
    links: [
      {
        title: "Website",
        url: "https://www.usiu.ac.ke/",
      },
    ],
    role: "Student",
    description:
      "I achieved a Bachelor of Science in Applied Computer Technology with a concentration in Forensic Information Technology and Cybercrime",
  },
];

export const projects = [
  {
    id: 1,
    title: "Culture Capture App",
    logo: culturecapturelogo,
    imageURL:
      "https://cdn.pixabay.com/photo/2019/08/15/21/30/marrakech-4409009_960_720.jpg",

    genres: "Android/ iOS App",
    year: "2020",
    tools: [
      { title: "Flutter", icon: flutter },
      { title: "Firebase", icon: firebase },
      { title: "Figma", icon: figma },
    ],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/bijuice/CultureCapture_Prototype",
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/culture_capture_/",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/CultureCapture_",
      },
    ],
    description:
      "<p> Culture Capture is a social digital museum with gamification aspects. The platform aims to preserve native cultures by encouraging users to upload pictures, audio and video of their culture's food, dances, and rituals. </p>  <p> This platform was designed using Figma. The mobile apps are currently being created using Dart and Flutter for iOS and Android, while using Firebase as a 'backend as a service' </p>",
  },
  {
    id: 2,
    title: "Bijuiceflix",
    logo: bijuicelogo,

    imageURL:
      "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    genres: "Web App",
    year: "2021",
    tools: [
      { title: "React", icon: react },
      { title: "Material UI", icon: material },
      { title: "Figma", icon: figma },
      { title: "Flutter", icon: flutter },
      { title: "Firebase", icon: firebase },
    ],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/bijuice/portfolio",
      },
      {
        title: "Web App",
        url: "http://www.arehmtulla.com",
      },
    ],
    description:
      "Bijuiceflix is a Netflix inspired portfolio web app created using React JS, Express,Figma, and Firebase. The app uses Material UI for styled components and a combination of CSS and Framer Motion for the animations. The video player was created from scratch for this app.",
  },
  {
    id: 3,
    title: "Hisa Web App",
    logo: hisalogo,
    imageURL:
      "https://cdn.pixabay.com/photo/2018/01/17/04/14/stock-exchange-3087396_960_720.jpg",
    genres: "Web App",
    year: "2021",
    tools: [
      { title: "Vue JS", icon: vue },
      { title: "Bootstrap", icon: bootstrap },
      { title: "Laravel", icon: laravel },
    ],
    links: [
      {
        title: "Website",
        url: "https://www.hisa.co",
      },
    ],
    description:
      "<p>Hisa is Africa's first wealth management platform that makes investing social. The app allows users access to different investment options like stocks and ETFs. The app also provides educational content like news, podcasts and user generated discussions aimed at improving users' financial literacy.</p> <p>For this project I utilized Vue JS with the Composition API and Bootstrap 4 to create a single page web app used to manage users of the Hisa financial platform</p>",
  },
  {
    id: 4,
    title: "Markdown Engine",
    imageURL:
      "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    logo: markdownlogo,
    genres: "Web App",
    year: "2021",
    tools: [{ title: "React JS", icon: react }],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/bijuice/markdown-engine",
      },
      {
        title: "WebApp",
        url: "https://markdown-engine-arehmtulla.herokuapp.com/",
      },
    ],
    description:
      "A markdown parser built using React JS that converts markdown into other formats such as HTML and LaTeX",
  },
];
