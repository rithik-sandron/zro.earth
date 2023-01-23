import Header from "../pages/Header";

export default function Layout({ children }) {
    return (
        <div id='common-body'>
            <Header />
            {children}
        </div>
    )
}