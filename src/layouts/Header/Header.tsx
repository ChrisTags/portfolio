import styles from "./Header.module.scss";
import Navbar from "./Navbar";

type HeaderProps = {
  isVisible: boolean;
};

export default function Header({ isVisible }: HeaderProps) {
  return (
    <header className={styles.mainHeader} data-visible={isVisible}>
      <div className="wrapper">
        <Navbar />
      </div>
    </header>
  );
}
