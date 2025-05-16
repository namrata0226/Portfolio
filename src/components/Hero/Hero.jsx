import { IoCall } from "react-icons/io5";

import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaCloudDownloadAlt } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Namrata</h1>
        <p className={styles.description}>
          I&apos;m a FullStack Developer, specializing in building responsive
          web applications. Skilled in HTML, CSS, JavaScript, React, with a
          strong focus on performance optimization.
        </p>
        <div className={styles.contactBtn}>
          <a href="mailto:namratakurariya02@gmail.com" target="_blank">
            <IoMdMail />
          </a>
          <a href="tel:+918305786334" target="_blank">
            <IoCall />
          </a>

          <a href=" https://linkedin.com/in/namrata-kurariya" target="_blank">
            <FaLinkedin />
          </a>
          <a href="         https://github.com/namrata0226" target="_blank">
            <FaGithub />
          </a>
          <a
            href="  https://drive.google.com/file/d/1eTXRznx8dcbfK3X8XuelR-3t5jaqfoER/view?usp=sharing"
            target="_blank"
          >
            <FaCloudDownloadAlt />
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/Namrata-photo-dp.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
