import styles from "../styles/clock.module.css";

import { cormorant, lora } from "./fonts";

const Clock = () => {
  return (
    <div className={styles.clock}>
      <h3 className={lora.className}>15:30</h3>
    </div>
  );
};

export default Clock;
