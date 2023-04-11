import Header from "./Header";
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import Meta from "./Meta";

export default function Layout({ children,
  title = '',
  desc = '',
  search,
  setSearch,
  color,
  hideSearch = false
}) {

  return (
    <>
      <Meta title={title} desc={desc} color={color} />
      <main id={styles.common}>
        <Header search={search} setSearch={setSearch} color={color} hideSearch={hideSearch} />
        {children}
      </main>
      <Footer />
    </>
  );
}