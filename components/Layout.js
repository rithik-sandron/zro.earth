import Header from "../pages/Header";

export default function Layout({ children, bg, isHomePage }) {
    return (
        <div id='common-body'>
            {!isHomePage && <Header bg={bg} />}
            {children}
        </div>
    )
}