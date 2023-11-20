import './App.css';
import Audience from './components/Audience';
import Festival from './components/Festival';
import Footer from './components/Footer';
import Magazine from './components/Magazine';
import Moviess from './components/Moviess';
import Norway from './components/Norway';
import Populated from './components/Populated';
import Sidebar from './components/Sidebar';
import Tickets from './components/Tickets';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Norway/>
      <Festival/>
      <Audience/>
      <Moviess/>
      <Magazine/>
      <Tickets/>
      <Populated/>
      <Footer/>
    </div>
  );
}

export default App;
