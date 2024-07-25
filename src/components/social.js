import styles from "../styles/social.module.css";

const Social = () => {
  return (
    <div className={styles.social}>
      <figure>
        <img src="/icons/mdi--facebook.svg" />
      </figure>
      <figure>
        <img src="/icons/mdi--instagram.svg" />
      </figure>
      <figure>
        <img src="/icons/mdi--twitter.svg" />
      </figure>
    </div>
  );
};

export default Social;
