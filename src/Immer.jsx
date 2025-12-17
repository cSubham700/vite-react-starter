import { useImmer } from 'use-immer'

import React from 'react'
import Nav from './components/Nav'

let nextId = 3;


const initialList = [
  {id:0, title:'Big Bellies', seen: false},
  {id:1, title:'Lunar Landscape', seen: false},
  {id:2, title:'Terracota Army', seen: false}
]

const Immer = () => {

  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);


  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft=>{
      const artWork = draft.find (a => a.id === id)
      artWork.seen = nextSeen;
    });
    
  }

  function handleToggleYourList(id, nextSeen) {
    updateYourList(draft=>{
      const artWork = draft.find (a => a.id === id)
      artWork.seen = nextSeen;
    });
    
  }

  return (
    <>
    <Nav/>
    <div className="home">
      <h1>Art Bucket List</h1>
      <h2>My list of arts to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList}/>
      <h2>Your list of arts to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList}/>
    </div>
    </>
  )
}


function ItemList({ artworks, onToggle }) {
  return (
    <ul>
     {artworks.map(artwork => (
       <li key={artwork.id}>
       <label >
         <input type='checkbox' checked={artwork.seen} onChange={e => {
          onToggle(artwork.id, e.target.checked);
         }} />
         {artwork.title}
       </label>
     </li>
     ))}
    </ul>
  )
}


export default Immer