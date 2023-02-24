import './App.css';
import Footer from './componemts/footer/Footer';
import Header from './componemts/Header/Header';
import Overview from './componemts/Overview/Overview';
import SalesReport from './componemts/SalesReport/SalesReport';

function App() {
  return (
    <div >
    <Header />
    <div style={{display:'flex'}}>
    <SalesReport />
    <Overview />
    </div>
    
    <Footer/>
    
    </div>
  );
}

export default App;
