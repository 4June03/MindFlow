import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";

export interface Banner {
  bannerImage?: string;
}

const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <Image
        src="https://i.pinimg.com/736x/44/c8/6d/44c86da04bb9570dc171071691312427.jpg"
        alt="Banner"
        fill
        className={styles.bannerImage}
        priority
      />
      <div className={styles.overlay}>
        <h2 className={styles.bannerText}>welcome to our blog</h2>
      </div>
    </div>
  );
};

export default Banner;
