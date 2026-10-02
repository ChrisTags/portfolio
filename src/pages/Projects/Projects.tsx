import { useEffect, useState, type ChangeEvent } from "react";
import Card from "../../components/Card";
import { TechFilterForm } from "../../components/Forms";
import ItemsList from "../../components/ItemsList";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageHeader from "../../components/PageHeader";
import useDataRepos from "../../hooks/useDataRepos";
import styles from "./Projects.module.scss";

export default function Projects() {
  const [techsSelected, setTechsSelected] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Projets | Portfolio Christophe Agostinho";
  }, []);

  const handleTechChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTechsSelected((prev) => [...prev, e.target.value]);
    } else {
      setTechsSelected((prev) =>
        prev.filter((topic) => topic !== e.target.value),
      );
    }
  };

  const repoType = "projects";

  const { repos, loading, error } = useDataRepos(
    "https://api.github.com/users/ChrisTags/repos",
    repoType,
  );

  return (
    <>
      <PageHeader
        title="Projets"
        description={
          <>
            <p>
              Une sélection de projets concrets pour montrer ma façon de
              <strong>structurer mon code</strong> et de{" "}
              <strong>concevoir des interfaces modulaires</strong>.
            </p>
          </>
        }
      />
      <TechFilterForm onTechChange={handleTechChange} />
      <ItemsList className={styles.projectsItemsList}>
        {error ? (
          <li>Erreur de chargement des repos...</li>
        ) : loading ? (
          <LoadingSpinner />
        ) : (
          repos
            .filter(
              (repo) =>
                techsSelected.length === 0 ||
                repo.topics.some((t) => techsSelected.includes(t)),
            )
            .map((repo) => (
              <>
                <Card key={repo.id} data={repo} repoType={repoType} />
              </>
            ))
        )}
      </ItemsList>
    </>
  );
}
