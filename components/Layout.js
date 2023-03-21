import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'

export default function Layout({ children, title = '' }) {

  return (
    <div id={styles.common}>
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
}