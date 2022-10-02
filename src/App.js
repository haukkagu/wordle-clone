import Grid from './components/Grid.js'
import './App.css';

function App() {
  return (
      <div className="App">
        <Grid tiles={[['H','E','L','L','O'], ['W','O','R','L','D']]}/>
      </div>
  );
}

export default App;
