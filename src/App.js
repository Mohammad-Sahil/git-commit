import './App.css';
import Clock from './components/Clock';
import Header from './components/Header';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App" style={{transform: "scale(0.7)", marginTop: "-140px"}}>
    <Header/>
    <Clock/>
    <Quote 
      key="1"
      bquote = " thsi is is is is  is"
      cite = "is is is is is is is is is isi  is is is is is is is is"
    />
     {/* Header */}
     {/* Clock */}
     {/* Qoute */}
    </div>
  );
}

export default App;
