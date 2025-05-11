import {Link} from 'react-router-dom'
import companyImg from '../assets/CompanyIcon.png';
import React, {useState} from 'react';
import styles from "./header.module.css"

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return ( 
  <header className={styles.header}>
    <section>
      <div>
        <section className={styles.iconName}>
          <img className={styles.companyLogo} src={companyImg} alt="pfp" />
        </section>
      </div>

      <span>Marketing Association NZ</span>
    </section>

    <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

    <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
      <Link to="/Membership">MEMBERSHIP</Link>
      <Link to="/Events">EVENTS</Link>
      <Link to="/Training">TRAINING</Link>
      <Link to="/Services">SERVICES</Link>
      <Link to="/Login">
        <button>Login</button>
      </Link>
    </nav>
  
  </header>
)}

export default Home;