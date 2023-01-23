import Header from "../pages/Header";

export default function Layout({ children, bg }) {
    return (
        <div id='common-body'>
            <Header bg={bg}/>
            {children}
        </div>
    )
}