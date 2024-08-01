import React from "react";

// icons
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

import perfil from "../img/perfil.png";
import Projectos from "./Projectos";
import {
  AstroIcon,
  CustomIcon,
  CustomIconAgunlar,
  ReactIcon,
} from "../icons/icons";

const HomePage = () => {
  return (
    <div className="home">
      <div className="info-about-me">
        <p>Hola, mi nombre es Steven</p>
        <p>
          I am a software developer who loves creating useful, scalable, and
          accessible software. Currently, I work as a full stack developer at
          Terrain Technologies, where I develop new features for a project aimed
          at automating the ambulances of Asturias.
        </p>
      </div>

      <div className="cont-projects">
        <h1>{`</>`} Projects </h1>
        <Projectos />
        <h3>more proycets...</h3>
      </div>

      <div className="cont-technology">
        <h1>Tecnologias</h1>
        <div className="icons-technology">
          <ReactIcon />
          <CustomIcon />
          <CustomIconAgunlar />
          <AstroIcon />
        </div>
      </div>
      <p>
        I've always liked meeting new people with whom I can share knowledge,
        experiences, or just anecdotes. Social networks have allowed me to meet
        some truly incredible people in the industry.
      </p>

      <div className="social-networks">
        <div>
          <img src={perfil} />
          <p>Mira mi actividad</p>
          <FaGithub />
        </div>
        <div>
          <img src={perfil} />
          <p>Instagram personal</p>
          <FaInstagram />
        </div>
        <div>
          <img src={perfil} />
          <p>Mira como programo</p>
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
