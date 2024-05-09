import React from "react";

// icons
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

import perfil from "../img/perfil.png";

const HomePage = () => {
  return (
    <div className="home">
      <p>Hola, mi nombre es steven</p>
      <p>
        I am a software developer who loves creating useful, scalable, and
        accessible software. Currently, I work as a full stack developer at
        Terrain Technologies, where I develop new features for a project aimed
        at automating the ambulances of Asturias.
      </p>
      <div>
        <div>
          <img />
          <img
            src={
              "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </div>
        <div>
          <img />
          <img />
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
