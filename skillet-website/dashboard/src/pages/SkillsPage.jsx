import { useState, useEffect } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import SkillCard from '../components/SkillCard';
import { fetchSkills } from '../services/api';
import styles from './SkillsPage.module.css';

export default function SkillsPage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetchSkills()
      .then(setSkills)
      .catch((err) => console.error('Failed to load skills:', err))
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    category === 'all'
      ? skills
      : skills.filter((s) => s.category === category);

  return (
    <div className={`container page-enter ${styles.page}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Skills Library</h1>
        <p className={styles.sub}>
          Browse and discover reusable development skills
        </p>
      </div>

      <CategoryFilter active={category} onChange={setCategory} />

      <div className={styles.grid}>
        {loading && (
          <div className={styles.loading}>Loading skills...</div>
        )}

        {!loading && filtered.length === 0 && (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>📭</span>
            <h2 className={styles.emptyTitle}>No Skills Yet</h2>
            <p className={styles.emptyDesc}>
              {category === 'all'
                ? 'The skills library is empty. Use Bob IDE to create your first skill!'
                : `No ${category} skills found. Try a different category or create one with Bob IDE.`}
            </p>
          </div>
        )}

        {filtered.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
