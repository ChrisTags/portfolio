import Dice from "../Dice";

export default function LoadingSpinner() {
  return (
    <li className="spinner">
      <Dice />
      <p>Chargement...</p>
    </li>
  );
}