import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaSpotify, FaShoppingBasket } from "react-icons/fa";

// Importa las imágenes
import calendar from "../img/calendar.jpg";
import HomeCalendar from "../img/HomeCalendar.jpg";
import routine from "../img/routine.jpg";
import logincalendar from "../img/logincalendar.jpg";

import spotifySave from "../img/spotifySave.jpg";
import spotifyAlbum from "../img/spotifyAlbum.jpg";
import spotifyBusqueda from "../img/spotifyBusqueda.jpg";
import spotifyHome from "../img/spotifyHome.jpg";

import listashopHome from "../img/listashopHome.jpg";
import listashopIteamList from "../img/listashopIteamList.jpg";
import listashopIteams from "../img/listashopIteams.jpg";
import listshopiteam from "../img/listshopiteam.jpg";

const Projectos = () => {
  const projects = [
    {
      title: "CalendarRoutine",
      img: { HomeCalendar, calendar, routine, logincalendar },
      texto:
        "Este proyecto es para la creación y administración de tu tiempo de la rutina y un calendario.",
      icon: FaCalendarAlt,
      link: "https://stvnmc.github.io/calendar-routine/",
    },
    {
      title: "Spotify",
      img: { spotifyHome, spotifySave, spotifyAlbum, spotifyBusqueda },
      texto:
        "Este proyecto es para la creación y administración de tu tiempo de la rutina y un calendario.",
      icon: FaSpotify,
      link: "https://stvnmc.github.io/Spotify/",
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
    },
  ];
  const [trasform, setTrasform] = useState(0);

  useEffect(() => {
    let currentTransform = 0;
    let reversa = false;

    const intervalId = setInterval(() => {
      if (!reversa) {
        currentTransform += 100;
        if (currentTransform > 300) {
          currentTransform = 200;
          reversa = true;
        }
      } else {
        currentTransform -= 100; 
        if (currentTransform < 0) {
          currentTransform = 100;
          reversa = false;
        }
      }
      setTrasform(currentTransform);
    }, 6000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main>
      <div className="projects">
        {projects.map((project, i) => (
          <div key={i} className="project">
            <div
              className="project-img"
              style={{ transform: `translateX(-${trasform}%)` }}
            >
              {Object.keys(project.img).map((key, j) => (
                <img key={j} src={project.img[key]} alt={project.title} />
              ))}
            </div>
            <a href={project.link}>
              <div className="text">
                <h2>{project.title}</h2>
                <div>
                  <p>{project.texto}</p>
                  {<project.icon />}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projectos;
