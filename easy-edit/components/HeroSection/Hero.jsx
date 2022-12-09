import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <div className={styles.container}>
                <div className={styles.bg}></div>
                <div className={styles.logo}></div>
                <p>Your #1 provider of easy-level edits.</p>
        </div>
    )
}