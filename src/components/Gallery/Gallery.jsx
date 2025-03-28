import React, { useState } from "react";
import "./gallery.css";  // تأكد من أنك قمت بإضافة الأنماط الخاصة بك

const Gallery = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imgSrc) => {
    setPopupImage(imgSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <>
      <header className="callery">
        <h1>Gallery</h1>
      </header>

      <div className="gallery-container">
        <img
          src="./images/IMG_7221.jpeg"
          alt="snöblid"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7221.jpeg")}
        />
        <img
          src="./images/IMG_7244.jpeg"
          alt="Ronneby"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7244.jpeg")}
        />
        <img
          src="./images/IMG_7257.jpeg"
          alt="Träd"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7257.jpeg")}
        />
        <img
          src="./images/IMG_7219.jpeg"
          alt="skog Lammhult"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7219.jpeg")}
        />
        <img
          src="./images/IMG_7223.jpeg"
          alt="Bruns park"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7223.jpeg")}
        />
        <img
          src="./images/IMG_7239.jpeg"
          alt="Rollstol"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7239.jpeg")}
        />
        <img
          src="./images/IMG_7240.jpeg"
          alt="Boll"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7240.jpeg")}
        />
        <img
          src="./images/IMG_7242.jpeg"
          alt="Sjön"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7242.jpeg")}
        />
        <img
          src="./images/IMG_7243.jpeg"
          alt="Lusia"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7243.jpeg")}
        />
        <img
          src="./images/IMG_7255.jpeg"
          alt="Spela"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7255.jpeg")}
        />
        <img
          src="./images/IMG_7256.jpeg"
          alt="Festival"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7256.jpeg")}
        />
        <img
          src="./images/IMG_7258.jpeg"
          alt="Mick"
          className="gallery-img"
          onClick={() => openPopup("./images/IMG_7258.jpeg")}
        />
      </div>

      {popupImage && (
        <div className="popup" onClick={closePopup}>
          <span className="close-btn">&times;</span>
          <img src={popupImage} alt="popup" id="popup-img" />
        </div>
      )}
    </>
  );
};

export default Gallery;
