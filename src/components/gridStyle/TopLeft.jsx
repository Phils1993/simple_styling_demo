import styles from "../../pages/griddemo/grid.module.css";

function TopLeft({ children }) {
  return <div className={styles.topDiv1}>{children || "Top Left"}</div>;
}

export default TopLeft;
