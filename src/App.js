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
      bquote = "What is this? is not a question"
      cite = "Sahil"
    />
     {/* Header */}
     {/* Clock */}
     {/* Qoute */}
    </div>
  );
}

export default App;
