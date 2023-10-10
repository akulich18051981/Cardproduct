import React from 'react';
import '../style/App.scss';
import user from './data/data.json'
import Item from './Item/Item';


function App() {
  return (
    <>
      <div className='conteyner'>
        {user.map((element, index) => (
          <Item object={element} />
        ))}
      </div>
    </>
  );
}

export default App;

