import { useState } from "react";
import Header from "../components/Header"
import React from 'react';
import styles from "./home.module.css"


function Home() {    
  const [query, setQuery] = useState('');

  const handleChange = (event) => setQuery(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('search for:', query)
  };

  return ( 
  <main>
    <Header></Header>
    <figure className={styles.coverImg}>
      <section>
        <div className={styles.titleContainer}>
          <p>HELPING MARKETERS BE</p>
          <h1>BRILLIANT</h1>
        </div>

        <div className={styles.searchBar}>
          <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Explore"
            value={query}
            onChange={handleChange}
            className={styles.searchInput} 
            />
            <button type="submit" className={styles.searchButton}>SEARCH</button>
          </form>
        </div>
      </section>
    </figure>

    <section className={styles.serviceLibrary}>
      <div className={styles.libraryGrid}>

        <div className={styles.serviceCard}>
          <figure className={styles.serviceImage}>

          </figure>
          <div className={styles.serviceDescription}>
            <h1>Breakthrough Marketing Plans</h1>
            <p>Based on the best seller Professor Tim Calkins
               of Kellogg School of Management, Colleen Ryan...</p>
          </div>
        </div>

        <div className={styles.serviceCard}> 
          <figure className={styles.serviceImage2}>

          </figure>
          <div className={styles.serviceDescription}>
            <h1>Stakeholder Management</h1>
            <p>Leading narketing strategist Tony Gardner will provide an interactive day looking at both internal...</p>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <figure className={styles.serviceImage3}>

          </figure>
          <div className={styles.serviceDescription}>
            <h1>B2B Marketing Conference 2025</h1>
            <p>This fast-paced half day event is designed for B2B marketers seeking to stay ahead of the curve in...</p>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <figure className={styles.serviceImage4}>

          </figure>
          <div className={styles.serviceDescription}>
            <h1>Behavioural Science for Customer Journeys</h1>
            <p>Make your customer the hero. Join us to look at the drivers of human behaviour, and how a greater...</p>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <figure className={styles.serviceImage5}>

          </figure>
          <div className={styles.serviceDescription}>
            <h1>Monthly Marketing Meetup | May </h1>
            <p>Monthly Marketing Meetup: Unlocking the Power of Podcasting</p>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <figure className={styles.serviceImage6}>

          </figure>
          <div className={styles.serviceDescription}>
            <h1>Influential Writing for Comms and Business</h1>
            <p>Wherever you work in your organisation, you're likely spending your days writing messages to...</p>
          </div>
        </div>
      </div>
    </section>
  </main>
)}

export default Home;