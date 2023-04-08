import { useRouter } from 'next/router';

export default function Router({ children, url, className='' }) {
    const router = useRouter();
    function route(url) {
        if (router.route !== url) router.push(url);
    }

    return (<span className={className} onClick={() => route(url)}>{children}</span>);
}