import Button from "../ButtonSection/Button";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Link href="/">
          <Button variant="primary">Home</Button>
        </Link>
        <Link href="/team">
          <Button variant="primary">Team</Button>
        </Link>
        <Link href="/works">
          <Button variant="primary">Works</Button>
        </Link>
        <Link href="services">
          <Button variant="primary">Services</Button>
        </Link>
        <Link href="/contact">
          <Button variant="primary">Contact</Button>
        </Link>
      </div>
    </div>
    );
  }