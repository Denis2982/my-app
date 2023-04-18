import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ImageBg from './components/Image/Image';
import Login from './components/Login/Login';

function App() {  
  return (
    <div className="wrapper">
      <div className="login__inner">
        <Header />
        <Login />
        <Footer />
      </div>
      <ImageBg />
    </div> 
  );
}

export default App;
