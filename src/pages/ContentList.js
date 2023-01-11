
import React from 'react';
import '../App.css';
import './blog.css';

export default function ContentList() {
    return (
        <div className='content-list-container blog'>
            {
                [1, 2, 3].map(x => {
                    return (
                        <div className='content-list-item'>
                            <div className='hashtag-container'>
                                <span className='hashtag'>Lorem</span>
                                <span className='hashtag'>Lorem</span>
                                <span className='hashtag'>Lorem</span>
                            </div>
                            <h1>Lorem Ipsum</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    );
                })
            }
        </div>
    );
}
