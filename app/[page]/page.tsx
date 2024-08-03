import { getPages } from "app/lib/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageMetaData from "../../components/PageMetaData";
import styles from "../styles/Blog.module.css";
import Mdx from "../../components/Mdx";

export async function generateMetadata({ params }): Promise<Metadata | undefined> {

  let post = getPages().find((post) => post.slug === params.page);

  if (!post) {
    return;
  }

  let ogImage = `https://zro.earth/api/og?title=zro.earth`;

  let { title, description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://zro.earth/about",
      siteName: "about-zro",
      type: "website",
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default function About({ params }) {
  const post = getPages().find((post) => post.slug === params.page);
  if (!post) {
    notFound();
  }

  return (
    <article>
      <PageMetaData post={post} doNeedGist={true} />
      <section id="article" className={styles.blog}>
        <Mdx source={post.content} />
      </section>
    </article>
  );
}