import styles from "./CompanyInfo.module.css";

export default function CompanyInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.calendar}>
                <img src="calendar.png" alt="calendar logo" />
                <h2>3</h2>
                <p>Months in business</p>
            </div>
            <div className={styles.worker}>
                <img src="worker.png" alt="office worker logo" />
                <h2>4</h2>
                <p>Editors</p>
            </div>
            <div className={styles.works}>
                <img src="vector.png" alt="works logo" />
                <h2>∞</h2>
                <p>Works</p>
            </div>
            <div className={styles.message}>
                <p><strong className={styles.resize}>Our editors and proofreaders have the experience that match the things you need.</strong><br/><br/> We have a highly trained staff of editors with the skill and experience to work across many disciplines. Our staff came from different fields of editing and trained to the highest potential in editing. <br/><br/> Why so many people trust EASY-EDIT with their work? Because of our unique ability to match the right edits for the needs of your project, for example, if you’re aiming for a good view or scenery, we offers landscape editing for better ambiance of image. If your teams needs a clearer or colorful image, you’ll get a lightroom post processing edits. If you want a fantasy theme of your pictures we offer fairytale portrait editings.</p>
            </div>
        </div>
    )
}