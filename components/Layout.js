'use client';

import Header from "./Header";
import styles from '../styles/Layout.module.css'
import Meta from "./Meta";

export default function Layout({ children,
  title = '',
  desc = '',
  search,
  setSearch,
  hideSearch = false,
  bgColor = false,
  grad = ''
}) {

  return (
    <>
      <Meta title={title} desc={desc} />
      <main id={styles.common} className={bgColor && styles.tree}>
        <Header search={search} setSearch={setSearch} hideSearch={hideSearch} grad={grad} bgColor={bgColor} />
        {children}
      </main>
    </>

  );
}