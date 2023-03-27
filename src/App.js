import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import DropDownBlock from './components/DropDownBlock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className='content'>
        <Blog/>
        <DropDownBlock/>
      </div>
    </div>
  );
}

export default App;
