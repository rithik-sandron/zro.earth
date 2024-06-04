import PostMetaData from "../../components/PostMetaData";
import styles from "../styles/Blog.module.css";
import { getBlogPosts } from "app/lib/db";
import { notFound } from "next/navigation";
import Mdx from "../../components/Mdx";
import { Metadata } from "next";

// export async function generateStaticParams() {
//   return allBlogs.map((post) => ({
//     slug: post.slug,
//   }));
// }

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://zro.earth/${post.slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
  };
}

export default async function Post({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <PostMetaData post={post} doNeedGist={true} />
      <section id="article" className={styles.blog}>
        <Mdx source={post.content} />
      </section>
    </article>
  );
}
