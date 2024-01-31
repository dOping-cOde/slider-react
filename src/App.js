import reviews from './data'
import './App.css';
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">
      <div>Testimonials</div>
     <Testimonials reviews ={reviews}/>
    </div>
  );
}

export default App;
