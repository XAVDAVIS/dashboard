import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Analysis from './components/Analysis';
import Rating from './components/Rating';
import Reviews from './components/Reviews';
import Visitors from './components/Visitors';
import './App.css';

function App() {
  return (
    <>
    <Sidebar />
    <Header />
    <Main />
    <Analysis />
    <Rating />
    <Reviews />
    <Visitors />
    </>
  );
}

export default App;
