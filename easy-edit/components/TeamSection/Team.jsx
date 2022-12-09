import styles from "./Team.module.css";
import Link from "next/link";

export default function Team() {
    return (
        <div id="team" className={styles.container}>
            <h1>Our Team</h1>
            <Link href="/">
                <img src="back-arrow.png" alt="back icon" />
            </Link>
            <div className={styles.scroll}>
                <div className={styles.scrollcontainer}>
                    <div className={styles.first}>
                        <img src="member1.png" alt="Member 1" />
                        <h5>Hannah Camille P. Endrina</h5>
                        <p>Designer</p>
                    </div>
                    <div className={styles.second}>
                        <img src="member2.png" alt="Member 2" />
                        <h5>Al Keisser D. Aragon</h5>
                        <p>Project Manager</p>
                    </div>
                    <div className={styles.third}>
                        <img src="member3.png" alt="Member 3" />
                        <h5>Louis Gabriel B. Sabangan</h5>
                        <p>Developer</p>
                    </div>
                    <div className={styles.fourth}>
                        <img src="member4.png" alt="Member 4" />
                        <h5>Mario U. Yaoyao II</h5>
                        <p>Designer</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}