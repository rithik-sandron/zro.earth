import Layout from "../components/Layout"

export default function Custom404() {
    return (
        <Layout>
            <div
                style={{ display: 'flex', gap: '1em', justifyContent: 'center', flexDirection: 'column', maxWidth: '600px', width: '80%', margin: '0 auto', height: '100vh' }}
            >
                <h1 style={{ fontSize: '4em', fontWeight: '600' }}>404 - Page Not Found</h1>
                <p>Please travel back to home screen</p>
            </div>
        </Layout>
    )
}