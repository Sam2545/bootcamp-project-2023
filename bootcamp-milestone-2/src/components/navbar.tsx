import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
        <nav className={style.navbar}>
            <h1 className={style.logo}>
              <Link href="/">Simply Sameer</Link>
            </h1>
            <ul className={style.navlist}>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/portfolio  ">Portfolio</Link>
                <Link href="/resume">Resume</Link>
                <Link href="/contact">Contact</Link>
            </ul>
        </nav>
    </header>
  );
}