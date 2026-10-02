import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { TechFilterForm } from "../../components/Forms";
import ItemsList from "../../components/ItemsList";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageHeader from "../../components/PageHeader";
import useDataRepos from "../../hooks/useDataRepos";
import styles from "./Lab.module.scss";

export default function Lab() {
  const [techsSelected, setTechsSelected] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Laboratoire | Portfolio Christophe Agostinho";
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

  const repoType = "lab";

  const { repos, loading, error } = useDataRepos(
    "https://api.github.com/users/ChrisTags/repos",
    repoType,
  );

  const description = (
    <>
      <p>
        Le « Labo » est mon terrain de jeu pour tester des fonctionnalités et
        <strong>maîtriser les fondamentaux</strong> (HTML, CSS/SCSS, JavaScript,
        TypeScript, React).
      </p>
    </>
  );

  return (
    <>
      <PageHeader title="Laboratoire" description={description} />
      <TechFilterForm onTechChange={handleTechChange} />
      <ItemsList className={styles.labItemsList}>
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
