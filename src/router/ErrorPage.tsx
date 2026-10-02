import { isRouteErrorResponse, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage = "Une erreur inattendue est survenue.";

  if (isRouteErrorResponse(error)) {
    errorMessage =
      error.status === 404
        ? "La page que vous cherchez n'existe pas."
        : error.statusText;
  }

  return (
    <div>
      <h1>Oups ! 🚧</h1>
      <p>{errorMessage}</p>
    </div>
  );
}
