import Header from "./Header";
import styles from '../styles/Layout.module.css'

export default function Layout({ children, bg = '', fore = '' }) {
  return (
    <div id={styles.common}>
      <Header bg={bg} fore={fore} />
      {children}
      {/* <Footer bg={bg} fore={fore} /> */}
    </div>
  );
}