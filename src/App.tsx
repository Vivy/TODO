import { useState } from 'react';
import './styles/general.css';
import { Header } from './component/header';

function App() {
  const [count, setCount] = useState(0);

  return <Header />;
}

export default App;
