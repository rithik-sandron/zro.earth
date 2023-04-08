import React from 'react';
import Router from './Router';

export default function Lists({ list = [[{
    'title': '',
    'author': { name: "", picture: "" },
    'list': '',
    'date': '',
    'slug': '',
    'wc': '',
    'coverImage': '',
}]] }) {

    return (
        list.map((item, i) => {
            return (
                item.length > 0 &&

                <div className='container' key={i}>
                    <h3
                        style={{
                            backgroundColor: `${item[0].listColor}`,
                            textTransform: 'capitalize',
                            color: '#222',
                            marginBottom: '0.6em'
                        }}>
                        {item[0].list}
                    </h3>

                    {item.map(post => {
                        return (
                            <Router url={post.list + "/" + post.slug} key={post.slug}>
                                <div className='sub-container'>
                                    <h2>{post.title}</h2>
                                    <date>
                                        <span>{post.date}</span>
                                        <span>{post.wc}</span>
                                    </date>
                                </div>
                            </Router>
                        )
                    })}
                </div>

            )
        })
    )
}