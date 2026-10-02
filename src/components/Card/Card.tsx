import type { GithubRepo } from "../../api/getGithubRepos";
import ButtonLink from "../ButtonLink";
import TechnologyIcons from "../TechnologyIcons";
import styles from "./Card.module.scss";

type CardProps = {
  data: GithubRepo;
  repoType: string;
};

export default function Card({ data, repoType }: CardProps) {
  const normalizedRepoType = repoType.toLowerCase();

  return (
    <article className={styles.card}>
      <div className={styles.card__content}>
        <img
          src={`https://christags.github.io/${data.name}/preview.jpg`}
          alt=""
          width={320}
          height={180}
          loading="lazy"
        />
        <header className={styles.card__header}>
          <h3 className={styles.card__title}>{data.name}</h3>
        </header>
        <p className={styles.card__description}>
          {data.description ?? "Aucune description disponible."}
        </p>
        <footer className={styles.card__footer}>
          <div className={styles.card__icons}>
            <TechnologyIcons
              excludedTopic={normalizedRepoType}
              topics={data.topics}
            />
          </div>
        </footer>
      </div>
      <div className={styles.card__actions}>
        <ButtonLink
          href={`https://christags.github.io/${data.name}`}
          target="_blank"
        >
          Voir ↗
        </ButtonLink>
        <ButtonLink
          href={`https://github.com/ChrisTags/${data.name}`}
          target="_blank"
        >
          Repo ↗
        </ButtonLink>
      </div>
    </article>
  );
}
