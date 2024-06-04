import Router from "../components/Router";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPosts } from "app/lib/db";
import "./styles/global.css";
import PostMetaDataHome from "components/PostMetaDataHome";

let allBlogs = getBlogPosts();
const posts = allBlogs.sort(function compareFn(a, b) {
  if (new Date(a.metadata.publishedAt) < new Date(b.metadata.publishedAt))
    return 1;
  else if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt))
    return -1;
  return 0;
});

const recent_post = posts[0];

export async function generateMetadata({}): Promise<Metadata | undefined> {
  let ogImage = `https://zro.earth/api/og?title=zro.earth`;

  return {
    openGraph: {
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
      <Router url={recent_post.slug}>
        <PostMetaDataHome post={recent_post} doNeedGist={true} />
      </Router>
      <div className="wrap-container">
        {posts.map((item, i) => {
          if (i > 0)
            return (
              <Router url={item.slug}>
                <PostMetaDataHome post={item} doNeedGist={false} />
              </Router>
            );
        })}
      </div>
    </>
  );
}
