import { getPostBySlug } from '../../../pages/api/api'
import styles from '../../styles/Blog.module.css'

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

export default async function Post({ params: { list, slug } }) {
  const data = await getData(list, slug);
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
      <section key={data.props.post.slug} className='container'>
        <h3>{data.props.post.list}</h3>
        <h1>{data.props.post.title}</h1>
        <p>{data.props.post.gist}</p>
        <br />
        <ul>
          <li>{data.props.post.date}</li>
          <li>{data.props.post.wc}</li>
        </ul>
        <hr />
      </section>
      {/* <details open id='article-toc' className={styles.articleToc} /> */}
      <section id='article' dangerouslySetInnerHTML={{ __html: data.props.post.content }} className={styles.blog} />
    </article>
  )
}