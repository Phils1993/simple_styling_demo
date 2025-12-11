import ButtomLeft from "../../components/gridStyle/buttomLeft.jsx";
import ButtomRight from "../../components/gridStyle//ButtomRight.jsx";
import TopLeft from "../../components/gridStyle/TopLeft.jsx";
import TopRight from "../../components/gridStyle/TopRight.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import styles from "./grid.module.css";



const GridDemo = () => {
  return (
    <>
       <div className={styles.container}>
      {/* Top row */}
      <div className={styles.topRow}>
        <TopLeft />
        <TopRight />
      </div>

      {/* Bottom row */}
      <div className={styles.bottomRow}>
        <ButtomLeft />
        <ButtomRight />
        <Footer />
      </div>
    </div>
    </>
  );
};

export default GridDemo;
