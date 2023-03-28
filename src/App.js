import Header from './components/Header';
import Banner from './components/Banner';
import BannerMobile from './components/BannerMobile';
import Blog from './components/Blog';
import DropDownBlock from './components/DropDownBlock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner className='banner'/>
      <BannerMobile className='bannerMobile'/>
      <div className='content'>
        <Blog/>
        <DropDownBlock/>
      </div>
    </div>
  );
}

export default App;
