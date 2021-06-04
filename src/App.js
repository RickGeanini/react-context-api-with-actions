import logo from './logo.svg';
import './App.css';

import Store from './store/_store'
import Products from './Products';

function App() {
  return (
    <Store>
      <div className="App">
        <header className="App-header">
          <Products />         
        </header>
      </div>
    </Store>

  );
}

export default App;
