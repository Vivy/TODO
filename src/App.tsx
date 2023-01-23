import { useState } from 'react';
import './styles/general.css';
import { Header } from './component/header';
import Container from './component/header/container/container';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className='mr-auto ml-auto' style={{ width: '500px' }}>
        <Container />
      </div>
    </div>
  );
}

export default App;
