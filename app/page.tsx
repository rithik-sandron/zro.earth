import Router from "../components/Router";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPosts } from "app/lib/db";
import "./styles/global.css";
import PostMetaData from "components/PostMetaData";

let allBlogs = getBlogPosts();
const posts = allBlogs.sort(function compareFn(a, b) {
  if (new Date(a.metadata.publishedAt) < new Date(b.metadata.publishedAt))
    return 1;
  else if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt))
    return -1;
  return 0;
});

const recent_post = posts[0];

export async function generateMetadata({ }): Promise<Metadata | undefined> {
  let ogImage = `https://zro.earth/api/og?title=zro.earth`;

  return {
    openGraph: {
      title: "zro.earth",
      description:
        "A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..",
      url: "https://zro.earth",
      siteName: "zro",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default async function Index() {
  if (!recent_post) {
    notFound();
  }

  return (
    <>
      <Router url={`blog/${recent_post.slug}`}>
        <PostMetaData post={recent_post} doNeedGist={true} />
      </Router>
      <hr />
      <div>
        {posts.map((item, i) => {
          if (i > 0)
            return (
              <Router url={`blog/${item.slug}`}>
                <PostMetaData post={item} doNeedGist={false} />
              </Router>
            );
        })}
      </div>
    </>
  );
}
