import Navbar from './Components/Navbar'
import Shop from './Components/Shop'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Shop/>
      </div>
    </>
  );
}

export default App;
