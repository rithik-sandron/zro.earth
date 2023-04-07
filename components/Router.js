import { useRouter } from 'next/router';

export default function Router({ children, url }) {
    const router = useRouter();
    function route(url) {
        if (router.route !== url) router.push(url);
    }

    return (<span onClick={() => route(url)}>{children}</span>);
}