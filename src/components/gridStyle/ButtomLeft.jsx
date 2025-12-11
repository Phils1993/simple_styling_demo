import styles from "../../pages/griddemo/grid.module.css";

function ButtomLeft() {
  return (
    <div className={styles.leftMenu}>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    </div>
  );
}

export default ButtomLeft;