import { Card, Total, Switch, Actions, Numbers, Drop, Equal } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='switch'><Switch /></div>
      <div className='calc'>
        <Card>
          <Total />
        </Card>
        <Card>
          <Actions />
        </Card>
        <Card>
          <Numbers />
        </Card>
        <Card>
          <Equal />
        </Card>
      </div>
      <div className='bar'>
        <Drop />
      </div>
    </div>
  );
}

export default App;
