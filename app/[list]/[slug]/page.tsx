import PostMetaData from '../../../components/PostMetaData';
import styles from '../../styles/Blog.module.css'
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import { Mdx } from '../../../components/Mdx';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  
  const post = allBlogs.find(post => post.slug === (params.list + "/" + params.slug));
  if (!post) {
    notFound();
  }
  
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: post.color },
      { media: '(prefers-color-scheme: dark)', color: post.color },
  ],
  }
}


export default async function Post({ params }) {
  
  const post = allBlogs.find(post => post.slug === (params.list + "/" + params.slug));
  if (!post) {
    notFound();
  }

    return (
      <div>
        <article>
          <PostMetaData post={post} doNeedGist={true} />
          <section id='article' className={styles.blog}>
            <Mdx code={post.body.code} />
          </section>
        </article>
      </div>
    )
  }