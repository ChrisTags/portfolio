import ButtonLink from "../../components/ButtonLink";
import styles from "./Footer.module.scss";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className="wrapper">
        <div className={styles.mainFooter__content}>
          <nav className={styles.mainFooter__contact}>
            <ul className={styles["mainFooter__contact-list"]}>
              <li className={styles.mainFooter__item}>
                <ButtonLink
                  href="https://www.linkedin.com/in/christophe-agostinho/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </ButtonLink>
              </li>
              <li className={styles.mainFooter__item}>
                <ButtonLink
                  href="https://github.com/ChrisTags"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub ↗
                </ButtonLink>
              </li>
            </ul>
          </nav>
          <p className={styles.mainFooter__author}>
            <strong>
              © <time dateTime={String(currentYear)}>{currentYear}</time>{" "}
              Christophe Agostinho
            </strong>{" "}
            <br />
            Développeur Front-End
          </p>
        </div>
      </div>
    </footer>
  );
}
