import Header from './components/Header';
import Banner from './components/Banner';
import Blog from './components/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className='content'>
        <Blog/>
      </div>
    </div>
  );
}

export default App;
