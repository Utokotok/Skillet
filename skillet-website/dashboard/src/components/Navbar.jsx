import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Zap } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <NavLink to="/" className={styles.brand}>
          <span className={styles.logo}>🍳</span>
          <span className={styles.brandName}>Skillet</span>
          <span className={styles.brandTag}>Dashboard</span>
        </NavLink>

        <div className={styles.navLinks}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            <Home size={16} />
            Home
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            <BookOpen size={16} />
            Skills
          </NavLink>
          <NavLink
            to="/factory"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            <Zap size={16} />
            Skills Factory
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
