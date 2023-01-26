import Footer from "../pages/Footer";
import Header from "../pages/Header";

export default function Layout({ bg, fore, children }) {
    return (
        <div id='common-body'>
            <Header bg={bg} fore={fore} />
            {children}
            <Footer bg={bg} fore={fore} />
        </div>
    )
}