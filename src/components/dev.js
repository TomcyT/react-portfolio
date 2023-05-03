import React from "react";

import styles from "@/styles/Dev.module.scss";
import { DevelopmentProjects } from "@/Shared/Data";
import Image from "next/image";

const DevProjectCard = ({ development }) => {
  const { title, desc, link, stack, image } = development;
  return (
    <div className={styles.devProjectCard}>
      <div className={styles.devProjectCardContainer}>
        <div className={styles.devProjectDetails}>
          <div className={styles.devProjectCardImage}>
            <Image src={image} alt={title} />
          </div>
          <div className={styles.devProjectCardTitle}>
            <h3>{title}</h3>
          </div>
          <div className={styles.devProjectCardDescription}>
            <p>{desc}</p>
          </div>
          <div className={styles.devProjectCardStack}>{stack}</div>
        </div>
        <div className={styles.devProjectCardButton}>
          <a href={link} target="_blank" rel="noreferrer">
            <button>check out !</button>
          </a>
        </div>
      </div>
    </div>
  );
};

const DevProjects = () => {
  return (
    <div className={styles.devProjectContainer} id="dev-project">
      <h1>Development Projects</h1>
      <div className={styles.devProjectGrid}>
        {DevelopmentProjects.map((development) => {
          return (
            <DevProjectCard key={development.id} development={development} />
          );
        })}
      </div>
    </div>
  );
};

export default DevProjects;