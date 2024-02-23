import styles from "./Coding.module.css";
import Profiles from './Profiles';
import code from "../../data/code.json";

export default function Coding() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Coding Profiles</h2>
      <div className={styles.projects}>
        {code.map((profile, id) => {
          return <Profiles key={id} title={profile.title} imageSrc={profile.imageSrc} link={profile.link} />;
        })}
      </div>
    </section>
  )
}
