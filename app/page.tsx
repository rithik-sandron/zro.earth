import Router from '../components/Router';
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import PostMetaData from '../components/PostMetaData';
import type { Metadata } from 'next';
import './styles/global.css';

const posts = allBlogs.sort(function compareFn(a, b) {
    if (new Date(a.date) < new Date(b.date)) 
      return 1;
    else if (new Date(a.date) > new Date(b.date)) 
      return -1;
    return 0;
  });

const recent_post = posts[0];

export const metadata: Metadata = {
    description: 'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..',
    
    openGraph: {
        title: 'zro.earth',
        description: 'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..',
        url: 'https://zro.earth',
    }
};

export default async function Index() {
    
    if (!recent_post) {
        notFound();
    }
    
    return (
        <>
            <Router url={recent_post.slug}>
                <PostMetaData post={recent_post} doNeedGist={true} />
            </Router>
            <div className='wrap-container'>
                {
                    posts.map((item, i) => {
                        if (i > 0)
                            return (
                                <Router url={item.slug}>
                                    <PostMetaData post={item} doNeedGist={false} />
                                </Router>
                            )
                    })
                }
            </div>
        </>
    )
}
