import styles from "../../pages/griddemo/grid.module.css";

function TopRight({ children }) {
  return <div className={styles.topDiv2}>{children || "Top Right"} </div>;
}

export default TopRight;
