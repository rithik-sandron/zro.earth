import styles from '../styles/Footer.module.css'
import { useRouter } from "next/router";

export default function Footer() {

    const router = useRouter();

    function privacy() {
        if (router.route !== '/about#p') router.push('/about#p');
    }

    return (
        <footer className={styles.footer}>
            <span>Copyright © 2023 zro.earth, All rights reserved.</span>
            <a onClick={privacy}>Privacy Policy</a>
        </footer>
    );
}