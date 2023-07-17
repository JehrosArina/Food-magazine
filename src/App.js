
import './App.css';
import Header from './component/Header';
import  Footer  from './component/Footer';
import 'bootstrap/dist/css/bootstrap.css';  //npm install bootstrap
function App() {

  return (
    <div className="App">
    <Header />

     <div className='image-container'>
      <img className='image' src={process.env.PUBLIC_URL + '/image/logo.jpg'} alt="My Image" />
    </div>

    <Footer />
    </div>
  );
}

export default App;