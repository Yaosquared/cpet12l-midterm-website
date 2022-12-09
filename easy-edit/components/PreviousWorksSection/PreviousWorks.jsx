import styles from "./PreviousWorks.module.css";
import Link from "next/link";

export default function PreviousWorks() {
    return (
        <div className={styles.container}>
            <h1>Previous Works</h1>
            <Link href="/">
                <img src="back-arrow.png" alt="back icon" />
            </Link>
            <div className={styles.first}>
                <img src="first.png" alt="first edit" />
            </div>
            <div className={styles.second}>
                <img src="second.png" alt="second edit" />
            </div>
            <div className={styles.third}>
                <img src="third.png" alt="third edit" />
            </div>
            <div className={styles.fourth}>
                <img src="fourth.png" alt="fourth edit" />
            </div>
            <div className={styles.fifth}>
                <img src="fifth.png" alt="fifth edit" />
            </div>
            <div className={styles.sixth}>
                <img src="sixth.png" alt="sixth edit" />
            </div>
            <div className={styles.seventh}>
                <img src="seventh.png" alt="seventh edit" />
            </div>
            <div className={styles.eight}>
                <img src="eight.png" alt="eight edit" />
            </div>
        </div>
    )
}