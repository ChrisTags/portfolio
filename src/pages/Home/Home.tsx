import { useEffect } from "react";
import { Link } from "react-router";
import ContentSection from "../../components/ContentSection";
import Dice from "../../components/Dice";
import ItemsList from "../../components/ItemsList";
import styles from "./Home.module.scss";

const TECHNOLOGIES = [
  { name: "HTML5", filename: "html" },
  { name: "CSS3", filename: "css" },
  { name: "SCSS", filename: "scss" },
  { name: "JavaScript", filename: "javascript" },
  { name: "TypeScript", filename: "typescript" },
  { name: "React.js", filename: "react" },
  { name: "pnpm", filename: "pnpm" },
  { name: "Vite", filename: "vite" },
  { name: "VS Code", filename: "vscode" },
  { name: "Git", filename: "git" },
  { name: "GitHub", filename: "github" },
];

export default function Home() {
  useEffect(() => {
    document.title = "Accueil | Portfolio Christophe Agostinho";
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles["hero__header"]}>
          <h1 className={styles["hero__title"]}>
            Développeur
            <br /> Front-End
          </h1>
          <div className={styles.dice}>
            <Dice />
          </div>
        </div>

        <p className={styles["hero__description"]}>
          <strong>Bienvenue, moi c'est Christophe</strong>
        </p>
        <p className={styles["hero__description"]}>
          J'ai conçu ce portfolio pour centraliser{" "}
          <strong>mes réalisations et ma pratique du code</strong>. C'est mon
          espace pour pratiquer, progresser et montrer simplement ce que je sais
          faire aujourd'hui.
        </p>
        <div className={styles.hero__actions}>
          <Link to="/lab" className={styles["hero__link"]}>
            Labo
          </Link>
          <Link to="/projects" className={styles["hero__link"]}>
            Projets
          </Link>
        </div>
      </section>
      <ContentSection
        title="Compétences"
        description="Mon écosystème Front-End."
      >
        <ItemsList className={styles["section-technology"]}>
          {TECHNOLOGIES.map((techno) => (
            <li key={techno.name} className={styles["technology-list__item"]}>
              <img
                src={`${import.meta.env.BASE_URL}languages-icons/${techno.filename}.svg`}
                alt={techno.name}
                className={styles["technology-list__icon"]}
                loading="lazy"
              />
            </li>
          ))}
        </ItemsList>
      </ContentSection>
    </>
  );
}
