import styles from "../styles/404.module.css";

import { cormorant, lora } from "../components/fonts";

const NotFound = () => {
  return (
    <>
      <section className={styles.error}>
        <h2 className={cormorant.className}>404</h2>
        <p className={lora.className}>
          Ops, não conseguimos encontrar essa página!
        </p>
      </section>
    </>
  );
};

export default NotFound;
