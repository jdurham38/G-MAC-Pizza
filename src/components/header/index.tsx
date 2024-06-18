import styles from "./styles.module.css";
import Logo from "../logo";
import Navbar from "../navbar";
export default function Header() {

    return (
        <div className={styles.header}>
            <Logo />
            <Navbar />


        </div>
    );
}
