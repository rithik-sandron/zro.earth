import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '/public/_posts');

export function getPostsFromDirectory(dir) {
  return fs.readdirSync(postsDirectory + `/${dir}`)
}

export function getDirectories() {
  return fs.readdirSync(postsDirectory + '/')
}

export function getAllPosts(fields = []) {
  let dir = getDirectories();
  let tipDirectoryIndex = 0;
  return {
    list: dir.map((dr, i) => {
      if (dr === 'tips') {
        tipDirectoryIndex = i;
      }
      let count = 0;
      return getPostsFromDirectory(dr)
        .map((slug) => {
          if (count++ > dr === 'tips' ? 1 : 15) {
            return getPostBySlug(dr, slug, fields)
          }
        })
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    }),
    tipIndex: tipDirectoryIndex
  }
}

export function getAllPostsAsPath(fields = []) {
  let dir = getDirectories().filter(x => x !== 'tips');
  return (
    dir.map(dr => {
      return getPostsFromDirectory(dr)
        .map((slug) => getPostBySlug(dr, slug, fields))
    })
      .reduce((prev, next) => prev.concat(next))
  )
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

    if (field === 'color') {
      items[field] = hashCode(realSlug);
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

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return intToRGB(hash);
}

function intToRGB(i) {
  let c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec("00000".substring(0, 6 - c.length) + c);
  return {
    bg: `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})`,
    fore: `rgb(${255 - parseInt(result[1], 16)},${255 - parseInt(result[2], 16)},${255 - parseInt(result[3], 16)})`
  };
}