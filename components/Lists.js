import React from 'react';
import List from '../components/List.js';

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
                item.length > 0 && <List posts={item} key={i} />
            )
        })
    )
}