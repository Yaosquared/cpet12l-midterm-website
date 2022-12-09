import styles from "./FooterContact.module.css";

export default function FooterContact() {
    return (
        <div className={styles.container}>
            <div className={styles.label}>
                <p>Privacy</p>
            </div>
            <div className={styles.label1}>
                <p>Terms & Conditions</p>
            </div>
            <div className={styles.label2}>
                <p>Jobs</p>
            </div>
            <hr className={styles.line} />
            <div className={styles.label3}>
                <p>Landline</p>
            </div>
            <div className={styles.label4}>
                <p>(+63) 9 8765 4321</p>
            </div>
            <div className={styles.label5}>
                <p>(+63) 1 2345 6789</p>
            </div>
            <hr className={styles.line1} />
            <div className={styles.label6}>
                <p>Mobile</p>
            </div>
            <div className={styles.label7}>
                <p>0912 345 6789 (Smart)</p>
            </div>
            <div className={styles.label8}>
                <p>0998 765 4321 (Not Smart)</p>
            </div>
            <hr className={styles.line2} />
            <div className={styles.label9}>
                <p>Carlos Trinidad Avenue,</p>
            </div>
            <div className={styles.label10}>
                <p>Salawag, Dasmariñas City,</p>
            </div>
            <div className={styles.label11}>
                <p>Cavite, Philippines, 4114</p>
            </div>
            <div className={styles.label12}>
                <p>© 2022 Team E.A.S.Y.</p>
            </div>
        </div>
    )
}