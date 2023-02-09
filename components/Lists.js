import React from 'react';
import List from '../components/List.js';

export default function Lists({ list = [{
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
                <List posts={item} key={i} />
            )
        })
    )
}