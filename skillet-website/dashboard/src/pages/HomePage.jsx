import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BookOpen, GitBranch } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import { fetchStats } from '../services/api';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats()
      .then(setStats)
      .catch((err) => console.error('Failed to load stats:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={`container page-enter ${styles.page}`}>
      {/* Hero */}
      <div className={styles.hero}>
        <span className={styles.heroEmoji}>🍳</span>
        <h1 className={styles.heroTitle}>Skillet</h1>
        <p className={styles.heroSub}>
          A reusable skills library that codifies your team&apos;s best practices.
          Create, validate, and execute development skills with IBM Bob IDE.
        </p>
        <Link to="/skills" className={styles.heroCta}>
          Browse Skills <ArrowRight size={16} />
        </Link>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <StatsCard
          label="Total Skills"
          value={loading ? '—' : stats?.totalSkills ?? 0}
          sub="In the library"
        />
        <StatsCard
          label="Categories"
          value={loading ? '—' : stats?.categoryCount ?? 0}
          sub="Skill categories"
        />
        <StatsCard
          label="Validation Checks"
          value="4"
          sub="Per skill"
        />
        <StatsCard
          label="Repos"
          value="2"
          sub="Policies + Skills"
        />
      </div>

      {/* Architecture */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>
              <Shield size={16} color="var(--accent)" /> Immutable Policies
            </h3>
            <p className={styles.infoCardDesc}>
              Coding standards, security guidelines, and skill format rules live in a
              read-only policies repository. Only leadership can change them.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>
              <BookOpen size={16} color="var(--accent)" /> Reusable Skills
            </h3>
            <p className={styles.infoCardDesc}>
              Developers create structured skills that Bob IDE reads and executes.
              Every skill is validated against company policies before being approved.
            </p>
          </div>
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>
              <GitBranch size={16} color="var(--accent)" /> Two-Repo Governance
            </h3>
            <p className={styles.infoCardDesc}>
              Policies and skills are separated into two repositories. CODEOWNERS and
              branch protection enforce who can change what.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
