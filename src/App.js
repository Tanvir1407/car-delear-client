import './App.css';
import Banner from './components/Home/Banner/Banner';
import Feature from './components/Home/Feature/Feature';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import News from './components/Home/News/News';

function App() {

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Feature></Feature>
      <News></News>
      <Footer></Footer>
    </>
  ); 
}

export default App;