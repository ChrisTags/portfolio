import { Outlet } from "react-router";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import useMobileHeaderVisibility from "../../hooks/useMobileHeaderVisibility";
import ErrorBoundary from "../../router/ErrorBoundary";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.scss";

export default function Layout() {
  const isHeaderVisible = useMobileHeaderVisibility();

  return (
    <div className={styles.layout}>
      <div className={styles.headerArea}>
        <ErrorBoundary fallback={<p>L'en-tête ne peut pas être affiché.</p>}>
          <Header isVisible={isHeaderVisible} />
        </ErrorBoundary>
      </div>
      <div className={styles.mainArea}>
        <div className="wrapper">
          <main className={styles.mainContent}>
            <Outlet />
          </main>
        </div>
      </div>
      <div className={styles.footerArea}>
        <ErrorBoundary
          fallback={<p>Le pied de page ne peut pas être affiché.</p>}
        >
          <Footer />
        </ErrorBoundary>
      </div>

      <ScrollToTopButton />
    </div>
  );
}
