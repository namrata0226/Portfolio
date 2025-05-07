

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />

          <a
            href="mailto:namratakurariya02@gmail.com"
            target="_blank"
            className="anchor"
          >
            namratakurariya02@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/namrata-kurariya/"
            target="_blank"
            className="anchor"
          >
            linkedin.com/namrata-kurariya
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://www.github.com/namrata0226"
            target="_blank"
            className="anchor"
          >
            github.com/namrata0226
          </a>
        </li>
      </ul>
    </footer>
  );
};
