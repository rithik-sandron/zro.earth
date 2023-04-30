import PostMetaData from '../../../components/PostMetaData';
import Router from '../../../components/Router';
import { getPostBySlug, getAllPostsAsPath } from '../../../lib/api'
import styles from '../../styles/Blog.module.css'

export async function generateStaticParams() {
  const list = getAllPostsAsPath(['slug', 'list']);
  return list.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  let post = getPostBySlug(params.list, params.slug, [
    'title',
    'list',
  ])

  return {
    title: post.title,
    description: post.list,
    openGraph: {
      images: [
        {
          url: "https://zro.earth/api/og",
          width: 500,
          height: 500
        }
      ]
    }
  }
}

async function getData(list, slug) {
  let post = getPostBySlug(list, slug, [
    'title',
    'date',
    'list',
    'slug',
    'author',
    'content',
    'gist',
    'wc',
  ])

  return {
    props: {
      post: post
    },
  }
}

export default async function Post({ params }) {
  const data = await getData(params.list, params.slug);
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

  return (
    <article>
      <Router url={data.props.post.list + "/" + data.props.post.slug}>
        <PostMetaData post={data.props.post} />
      </Router>
      {/* <details open id='article-toc' className={styles.articleToc} /> */}
      <section id='article' dangerouslySetInnerHTML={{ __html: data.props.post.content }} className={styles.blog} />
    </article>
  )
}