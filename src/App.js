import './App.css'
import ClientReview from './Components/ClientReview/ClientReview';
import Navbar from './Components/Navbar/Navbar';
import Proposals from './Components/Propasal/Proposals';
import Statics from './Components/Statistics/Statics';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Statics/>
        <Proposals/>
        <ClientReview/>
    </div>
  );
}

export default App;
