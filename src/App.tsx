import React,  { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'Lebron James',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg/220px-LeBron_James_-_51959723161_%28cropped%29.jpg',
      age: 36,
      note: 'Allergic to staying in the same team'
    }
  ])


  return (
    <div className="App">
      <h1>People invited in the party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
    // {
    //   name: 'Lebron James',
    //   url: '',
    //   age: 36,
    //   note: 'Allergic to staying in the same team'
    // },
    // {
    //   name: ' Kobe Bryant',
    //   url: '',
    //   age: 36
    // }