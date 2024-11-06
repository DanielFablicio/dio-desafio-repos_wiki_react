import Image from "next/image";
import styles from "./RepoItem.module.css";

export default function RepoItem({ repo, buttonOnClick }) {
  return (
    <div className={styles.repoItemContainer}>
      <button
        className={styles.deleteButton}
        onClick={() => buttonOnClick(repo.id)}
      >
        <Image src="/images/cross.png" width={24} height={24} alt="cross" />
      </button>
      <h3 className={styles.repoTitle}>{repo.name}</h3>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className={styles.repoLink}
      >
        {repo.full_name}
      </a>
    </div>
  );
}
