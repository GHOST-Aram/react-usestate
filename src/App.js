// import StateHooks5 from './components/StateHooks5';
// import EffectHook1 from './components/EffectHook1';
import IntervalHookCounter from './components/IntervalHookCounter';
import { Link } from 'react-router-dom';
// import DataFetching from './components/DataFetching';
import './App.css';
import StateHook1 from './components/StateHook1';

function App() {
  return (
    <div className="App">
      <IntervalHookCounter />
      <Link to='/statehook1' component ={<StateHook1 />}>
        <h1> Sate Hook 1</h1>
      </Link>
    </div>
  );
}

export default App;
