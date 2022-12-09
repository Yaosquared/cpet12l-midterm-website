import styles from "./Contact.module.css";
import Link from "next/link";

export default function Contact() {
    return (
        <div id="contact" className={styles.container}>
                <Link href="/">
                    <img src="back-arrow.png" alt="back icon" />
                </Link>
                <h1>CONTACT US</h1>
                <div className={styles.landline}>
                    <h3>Landline:</h3>
                    <p className={styles.llfirst}>(+63) 9 8765 4321</p>
                    <p className={styles.llsecond}>(+63) 1 2345 6789</p>
                </div>
                <div className={styles.mobile}>
                    <h3>Mobile:</h3>
                    <p className={styles.mfirst}>0912 345 6789 (Smart)</p>
                    <p className={styles.msecond}>0998 765 4321 (Not Smart)</p>
                </div>
                <div className={styles.email}>
                    <h3>Email:</h3>
                    <p>easyedit_teameasy@gmail.com</p>
                </div>
                <div className={styles.teampic}>
                    <img src="easy.png" alt="team e.a.s.y." />
                </div>
        </div>
    )
}