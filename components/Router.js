import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Router({ children, url, className = '' }) {

    return (<Link className={className} href={`${url}`}>{children}</Link>);
}