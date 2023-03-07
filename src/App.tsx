import { Card, Total, Switch, Actions, Numbers, Drop, Equal } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='switch'><Switch /></div>
      <div className='calc'>
        <div className='item1' draggable>
          <Card>
            <Total />
          </Card>
        </div>
        <div className='item2' draggable>
          <Card>
            <Actions />
          </Card>
        </div>
        <div className='item3' draggable>
          <Card>
            <Numbers />
          </Card>
        </div>
        <div className='item4' draggable>
          <Card>
            <Equal />
          </Card>
        </div>
      </div>
      <div className='bar'>
        <Drop />
      </div>
    </div>
  );
}

export default App;
