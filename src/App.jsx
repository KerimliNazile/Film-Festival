import './App.css';
import Audience from './components/Audience';
import Festival from './components/Festival';
import Footer from './components/Footer';
import Header from './components/Header';
import Magazine from './components/Magazine';
import Moviess from './components/Moviess';
import Norway from './components/Norway';
import Populated from './components/Populated';
import Sidebar from './components/Sidebar';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <Norway/>
      <Festival/>
      <Audience/>
      <Moviess/>
      <Magazine/>
      <Speakers/>
      <Tickets/>
      <Populated/>
      <Footer/>
    </div>
  );
}

export default App;
