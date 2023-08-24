import './App.css';

import { Menu } from '#ui/menu/menu';
import { TestForm } from './features/test-form/test-form';

function App() {
  return (
    <div>
      <Menu
        items={[
          { id: '1', title: 'item 1' },
          { id: '2', title: 'item 2' },
        ]}
      />
      <TestForm />
    </div>
  );
}

export default App;
