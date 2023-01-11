import './App.css';
import Header from './pages/Header';
import HighlightContent from './pages/HighlightContent';
import ContentList from './pages/ContentList';
import Footer from './pages/Footer';

function App() {
  return (
    <div id="common-body">
      <Header />
      <HighlightContent />
      <ContentList />
      <Footer />
    </div>
  );
}

export default App;
