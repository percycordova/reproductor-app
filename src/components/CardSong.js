import React, { useState } from "react";
import iconPlay from "../assets/icono-play.svg";

const CardSong = ({ el, setSongToPlay, setIdArtist }) => {
  const [isVisible, setIsVisible] = useState(false);

  const delemitText = (text = "") => {
    if (text.length > 20) {
      return text.substring(0, 20) + "...";
    }
    return text;
  };
// comentario
  return (
    <div className="card" key={el.id}>
      <div className="card-content-img">
        <img src={el.img} alt={el.title} />
        <button
          type="button"
          className="card-play"
          onClick={() => {
            setSongToPlay(el);
            setIdArtist(el.id_artista);
          }}
        >
          <img src={iconPlay} alt="" />
        </button>
        <button className="card-three">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div style={{ position: "relative" }}>
        <h3
          className="card-title"
          onMouseOver={() => setIsVisible(true)}
          onMouseOut={() => setIsVisible(false)}
        >
          {delemitText(el.title)}
        </h3>
        <div className={`${isVisible ? "text-visible" : "text-no-visible"}`}>
          {isVisible && el.title}
        </div>
      </div>

      <h3 className="card-artist">{el.artist}</h3>
    </div>
  );
};

export default CardSong;
