import data from './data';
import './index';
import { useState } from 'react';
import  './data';
import List from './List';

function App() {
  const [people , setPeople]=  useState(data);
  return (
    <main>
      <section className='container'>
      <h3 >{people.length} Birthdays today</h3>
      <List people={people}/>
      <button onClick={()=>setPeople([])} >Clear all </button>

    </section>
    </main>
    
  )
   
 
}

export default App;
