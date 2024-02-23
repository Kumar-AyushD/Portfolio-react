import React from "react";
import styles from "./Profiles.module.css";
import { getImageUrl } from "../../utils";


export default function Profiles({ title, imageSrc, link }) {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <a href={link} target="_blank" className={styles.link}>
        Link
      </a>
    </div>
  );
}
