
import './App.css';
import Navbar from './component/nav';
import Routepage from './component/AllRouts';
import Homepg from './component/Home';
import Footer from './component/footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routepage/>
    <Footer/>
    </div>
  );
}

export default App;
