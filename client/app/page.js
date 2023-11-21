import Image from "next/image";
import styles from "./page.module.scss";
import logo from "../components/header/assets/phoneSvg.svg";

export default function Home() {
    return (
        <main className={styles.main}>
            <Image src={logo} alt='qwe'></Image>
        </main>
    );
}
