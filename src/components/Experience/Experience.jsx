import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import lang from "../../data/lang.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <>
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>

          {/* <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul> */}
        </div>
      </section>
      <section className={styles.container} id="Languages">
        <h2 className={styles.title}>Languages</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {lang.map((langs, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(langs.imageSrc)} alt={langs.title} />
                  </div>
                  <p>{langs.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
