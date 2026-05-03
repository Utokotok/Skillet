import styles from './CategoryFilter.module.css';

const CATEGORIES = ['all', 'backend', 'frontend', 'devops', 'qa', 'shared'];

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className={styles.wrapper}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`${styles.pill} ${active === cat ? styles.pillActive : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat === 'all' ? 'All Skills' : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
