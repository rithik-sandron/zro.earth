import React from 'react';
import List from '../components/List.js';

export default function Lists({ blocks=[], list = [{
    'title': '',
    'author': { name: "", picture: "" },
    'list': '',
    'date': '',
    'slug': '',
    'coverImage': '',
}] }) {

    return (
        list.map((item, i) => {
            return (
                <List posts={item} key={i} blocks={blocks}/>
            )
        })
    )
}