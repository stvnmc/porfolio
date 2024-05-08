// Importa las imágenes
import calendar from "../../img/calendar.jpg";
import HomeCalendar from "../../img/HomeCalendar.jpg";
import routine from "../../img/routine.jpg";
import logincalendar from "../../img/logincalendar.jpg";

import spotifySave from "../../img/spotifySave.jpg";
import spotifyAlbum from "../../img/spotifyAlbum.jpg";
import spotifyBusqueda from "../../img/spotifyBusqueda.jpg";
import spotifyHome from "../../img/spotifyHome.jpg";

import listashopHome from "../../img/listashopHome.jpg";
import listashopIteamList from "../../img/listashopIteamList.jpg";
import listashopIteams from "../../img/listashopIteams.jpg";
import listshopiteam from "../../img/listshopiteam.jpg";

import { FaCalendarAlt, FaSpotify, FaShoppingBasket } from "react-icons/fa";

export const projects = [
  {
    title: "CalendarRoutine",
    img: { HomeCalendar, calendar, routine, logincalendar },
    texto:
      "Este proyecto es para la creación y administración de tu tiempo de la rutina y un calendario.",
    icon: FaCalendarAlt,
    link: "https://stvnmc.github.io/calendar-routine/",
    background:
      "linear-gradient(180deg, rgb(255 240 240 / 0%) 0%, rgb(208 205 205) 32%)",
    color: "rgb(21 21 21)",
  },
  {
    title: "Spotify",
    img: { spotifyHome, spotifySave, spotifyAlbum, spotifyBusqueda },
    texto:
      "Este proyecto es para la creación y administración de tu tiempo de la rutina y un calendario.",
    icon: FaSpotify,
    link: "https://stvnmc.github.io/Spotify/",
    background:
      "linear-gradient(180deg, rgb(255 240 240 / 0%) 0%, rgb(3 3 3) 32%)",
    color: "rgb(201 191 191)",
  },
  {
    title: "Listashop",
    img: {
      listashopHome,
      listashopIteamList,
      listashopIteams,
      listshopiteam,
    },
    texto:
      "Este proyecto es para la creación y administración de tu tiempo de la rutina y un calendario.",
    icon: FaShoppingBasket,
    link: "https://stvnmc.github.io/ListaDeCompraReact/",
    background:
      "linear-gradient(180deg, rgb(255 240 240 / 0%) 0%, rgb(208 205 205) 32%)",
    color: "rgb(21 21 21)",
  },
];
