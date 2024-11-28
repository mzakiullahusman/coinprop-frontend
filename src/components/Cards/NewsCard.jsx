import React from "react";

import styles from "./cards.module.css";

const NewsCard = ({ imageSrc, title }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: "-59.536px 0px",
    backgroundSize: "138.164% 100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={styles.newsCard} style={backgroundImageStyle}>
      <div className={styles.overlay}></div>
      <img
        src={imageSrc}
        alt={title}
        className={`${styles.newsCardImage} rounded-lg`}
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default NewsCard;
