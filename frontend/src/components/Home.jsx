import React from "react";
import {
  pageBackground,
  pageWrapper,
  heroSection,
  heroTitle,
  heroSubtitle,
} from "../styles/common";

function Home() {
  return (
    <div className= {pageBackground}>
      <div className={pageWrapper}>
        <section className={heroSection}>
          <h1 className={heroTitle}>Welcome to MyBlog</h1>
          <p className={heroSubtitle}>
            Publish thoughtful stories, explore articles across categories, and
            manage your writing journey in one clean space.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;