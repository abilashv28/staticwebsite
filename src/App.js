import logo from './logo.svg';
import './App.css';
import Headerr from './Headerr';
import Firstsection from './Firstsection';
import Secondsection from './Secondsection';
import Thirdsection from './Thirdsection';
import Fourthsection from './Fourthsection';
import Founders from './Founders';
import Mapsection from './Mapsection';
import Succesfulfund from './Succesfulfund';
import Investor from './Investor';
import Footer from './Footer';

function App() {
  return (
    <div className="container-fluid">
      <Headerr/>
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Fourthsection/>
      <Mapsection/>
      <Succesfulfund/>
      <Investor/>
      <Footer/>

    </div>
  );
}

export default App;
