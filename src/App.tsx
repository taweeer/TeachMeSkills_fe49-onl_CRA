import './App.css';
import { Button } from '#ui/button';

function App() {
  const onClick = () => console.log('main button clicked');

  return <Button onClick={onClick}>OK</Button>;
}

export default App;
