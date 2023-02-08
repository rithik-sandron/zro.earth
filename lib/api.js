import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '/public/_posts');
const year = new Date().getFullYear();

export function getPostSlugs(dir) {
  return fs.readdirSync(postsDirectory + `/${dir}`)
}

export function getDirectories() {
  return fs.readdirSync(postsDirectory + '/')
}

export function getAllPosts(dir = '', fields = []) {
  if (dir === '') {
    let slugs = getDirectories();
    let posts = [];
    slugs
      .forEach(dr => {
        getPostSlugs(dr)
          .forEach(slug => {
            posts.push(getPostBySlug(dr, slug, fields))
            // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)))
          })
      })
    return posts.slice(0, 20);

  } else {
    const slugs = getPostSlugs(dir)
    const posts = slugs
      .map((slug) => getPostBySlug(dir, slug, fields))
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
      .slice(0, 20)
    return posts
  }

}

export function getPostBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = (dir === 'tips') ?
    join(postsDirectory + `/${dir}/`, `${realSlug}.md`)
    :
    join(postsDirectory + `/${dir}` + `/${realSlug}`, `index.md`)


  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents);

  const items = {}

  fields.forEach((field) => {

    if (field === 'count') {
      items[field] = getSlugCount(dir, realSlug);
    }

    else if (field === 'slug') {
      items[field] = realSlug
    }

    else if (field === 'content') {
      items[field] = content
    }

    else if (field === 'author') {
      if (data[field]) {
        items[field] = data[field];
      } else {
        items[field] = { name: 'San', picture: '/authors/san.jpeg' };
      }
    }

    else if (field === 'coverImage') {
      items[field] = `/_posts/${dir}/${realSlug}/` + `${data[field]}`;

    } else {
      items[field] = data[field]
    }
  })
  return items
}