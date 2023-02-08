import Layout from '../../components/Layout.js';
import styles from '../../styles/List.module.css';
import { useRouter } from 'next/router';

export default function Post() {

    const router = useRouter();
    const list = router.query.list;

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.head}
                    // style={{ borderTop: `18px solid ${bg}` }}
                >{list}</div>
            </div>
        </Layout>
    )
}
