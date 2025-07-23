"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import styles from "./NavBar.module.css";

export interface NavBarItem {
  title: string;
  link: string;
}

export interface INavBar {
  Items: NavBarItem[];
  className?: string;
}

export const NavBar: React.FC<INavBar> = ({ Items, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    console.log(isOpen);
  });

  return (
    <nav className={`${styles.navbar} ${className || ""}`}>
      <button className={styles.hamburger} onClick={toggleNavBar}>
        <IoMenu />
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        {Items.map((item) => (
          <li key={item.link} className={styles.navItem}>
            <Link
              href={item.link}
              className={`${styles.navLink} `}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
