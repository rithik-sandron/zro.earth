import PostMetaData from '../../../components/PostMetaData';
import styles from '../../styles/Blog.module.css'
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import { Mdx } from '../../../components/Mdx';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

// export async function generateMetadata({ params }) {
//   let post = allBlogs.find(post => post.slug === (params.list + "/" + params.slug));
//   if (!post) {
//     notFound();
//   }

//   return {
//     title: post.title,
//     description: post.list,
//     openGraph: {
//       images: [
//         {
//           url: "https://zro.earth/api/og",
//           width: 500,
//           height: 500
//         }
//       ]
//     }
//   }
// }


export default async function Post({ params }) {

  // const data = await getData(params.list, params.slug);
  // useEffect(() => {
  //     var toc = `<summary>On this article</summary><ul>`;
  //     let headings = document.querySelectorAll('.table-content-h1');
  //     if (headings.length > 3) {
  //         headings.forEach(heading => {
  //             const title = heading.innerText;
  //             const newLine = `<li><a href='#${heading.id}'>${title}</a></li>`;
  //             toc += newLine;
  //         });

  //         toc += `</ul>`;
  //         let articleToc = document.getElementById('article-toc');

  //         articleToc.innerHTML = toc;
  //         articleToc.style.display = 'block';
  //     }
  // }, []);
  const post = allBlogs.find(post => post.slug === (params.list + "/" + params.slug));
  if (!post) {
    notFound();
  }

  return (
    <article>
      <PostMetaData post={post} />
      <section id='article' className={styles.blog}>
        <Mdx code={post.body.code} />
      </section>
      {/* <details open id='article-toc' className={styles.articleToc} /> */}
    </article>
  )
}