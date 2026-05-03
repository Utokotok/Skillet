import { useNavigate } from 'react-router-dom';
import styles from './SkillCard.module.css';

export default function SkillCard({ skill }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/skills/${skill.name}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') navigate(`/skills/${skill.name}`);
      }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{skill.displayName}</h3>
      </div>

      <p className={styles.description}>
        A reusable {skill.category} skill for your development workflow.
      </p>

      <div className={styles.footer}>
        <span className={`badge badge-${skill.category}`}>
          {skill.category}
        </span>
      </div>
    </div>
  );
}
