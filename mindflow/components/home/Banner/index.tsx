import React, { FC } from "react";
import Image from "next/image";
import styles from "./Banner.module.css";

export interface IBanner {
  bannerImage?: string;
}

const Banner: FC<IBanner> = ({ bannerImage }) => {
  return (
    <div className={styles.bannerWrapper}>
      <Image
        src={bannerImage || "/default-banner.jpg"}
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
