
import React, { useEffect } from "react";
export default function Tips({ post =
    { content: "", date: "", slug: "", coverImage: "" }
}) {

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]
    useEffect(() => {
        const d = new Date();
        const year = d.getFullYear();
        const date = d.getDate();
        const dayName = days[d.getDay()];
        const monthName = months[d.getMonth()];
        const time = d.toLocaleTimeString();
        const formatted = `${dayName}, ${date} ${monthName} ${year}`;
        document.getElementById('date').innerHTML = formatted;
    }, [])

    useEffect(() => {
        // time
        setInterval(() => {
            const d = new Date();
            const year = d.getFullYear();
            const date = d.getDate();
            const dayName = days[d.getDay()];
            const monthName = months[d.getMonth()];
            const time = d.toLocaleTimeString();
            const formatted = `${dayName}, ${date} ${monthName} ${year}`;
            document.getElementById('date').innerHTML = formatted;
        }, 1000)
    }, []);

    return (
        <div className='list-container'
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            <h1 id='date' className="headline" />

            <span className='tip-not'>Today's Tip</span>
            <span className='tip-title'>{post.content}</span>
        </div>
    )
}