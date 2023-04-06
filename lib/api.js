import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '/_posts');

export function getPostsFromDirectory(dir) {
  return fs.readdirSync(postsDirectory + `/${dir}`).filter(x => x !== '.DS_Store')
}

export function getDirectories() {
  return fs.readdirSync(postsDirectory + '/')
}

export function getAllPosts(fields = []) {
  let dir = getDirectories();
  const list = dir.map((dr, i) => {
    if (dr === 'tips') {
      tipDirectoryIndex = i;
    }
    return getPostsFromDirectory(dr)
      .map((slug) => {
        return getPostBySlug(dr, slug, fields)
      })
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  })
  return {
    list: list,
    feature: list.reduce(function (pV, cV) {
      if (!pV[0] || (pV[0] && pV[0].date < cV.date)) {
        pV = cV;
      }
      return pV;
    }, [])[0]
  }
}

export function getAllPostsAsPath(fields = []) {
  let dir = getDirectories();
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
    join(postsDirectory + `/${dir}`, `/${realSlug}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents);

  const items = {}

  fields.forEach((field) => {


    if (field === 'color') {
      items[field] = hashCode(data['title']);
    }

    else if (field === 'listColor') {
      items[field] = hashCode(data['list']);
    }

    else if (field === 'gist') {
      items[field] = data['gist'];
    }

    else if (field === 'wc') {
      items[field] = "☕️ " + Math.round(content.split(' ').length / 120) + ' min read';
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
    hash = str.charCodeAt(i) + ((hash > 8) - hash);
  }
  return '#' + Math.floor((Math.abs(Math.sin(hash) * 16777215))).toString(16).padStart(6, '0') + '5a';
}