import React, { useState } from 'react'
import Nav from './components/Nav'


        const initialItems = [
            {title:"pretzels", id:0},
            {title:"crispy seaweed", id:1},
            {title:"granola bar", id:2},
        ]



const TravelSnack = () => {

    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);


    const selectedItem = items.find(item => item.id === selectedId);

        function handleItemChange(id, e) {

            setItems(items.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        title: e.target.value,
                    }
                } else {
                    return item;
                }
            }))
            
        }
        

  return (
    <>
    <Nav/>
    <div className='home'>

        <h2>What's your travel snack?</h2>
            <ul>
                {items.map(item=>(
                    <li key={item.id}>
                        <input type="text" value={item.title} onChange={e => {
                            handleItemChange(item.id, e)
                        }} />
                        {""}
                        <button onClick={()=>{
                            setSelectedId(item.id);
                        }}>Choose</button>
                    </li>
                ))}
            </ul>

            <p>You picked {selectedItem.title}.</p>


    </div>
    </>
  )
}

export default TravelSnack