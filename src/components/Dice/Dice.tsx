import styles from "./Dice.module.scss";

export default function Dice() {
  return (
    <div className={`${styles.scene} spinner__scene`}>
      <div className={`${styles.dice} spinner__cube`}>
        <div className={`${styles.face} ${styles.front}`}></div>
        <div className={`${styles.face} ${styles.back}`}></div>
        <div className={`${styles.face} ${styles.right}`}></div>
        <div className={`${styles.face} ${styles.left}`}></div>
        <div className={`${styles.face} ${styles.top}`}></div>
        <div className={`${styles.face} ${styles.bottom}`}></div>
      </div>
      <div
        className={`${styles.dice} ${styles.diceAlternative} spinner__cube`}
      >
        <div className={`${styles.face} ${styles.front}`}></div>
        <div className={`${styles.face} ${styles.back}`}></div>
        <div className={`${styles.face} ${styles.right}`}></div>
        <div className={`${styles.face} ${styles.left}`}></div>
        <div className={`${styles.face} ${styles.top}`}></div>
        <div className={`${styles.face} ${styles.bottom}`}></div>
      </div>
    </div>
  );
}
