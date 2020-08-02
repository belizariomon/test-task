import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import sincron, { addItem } from './Store/controladorAlmacen'
import RenderItemsToDo from './Items/RenderItemsToDo'
import { AppDiv, App_header, App_logo, TaskCard, Button, Input } from './Styles/Styles';

const App = () => {

  const [itemsArray, setItems] = useState([])
  const [newTextData, setTextData] = useState("")

  useEffect(() => {
    sincron(setItems)
  }, [])

  return (
    <AppDiv >
      <App_header >
        <App_logo src={logo} alt="logo" />
        <p>
          A React project.
        </p>
        Redux storage.
        <TaskCard>
          <p>
            Next Activity
          </p>
          <Input
            type="text"
            value={newTextData}
            placeholder="..."
            onFocus={()=>setTextData("")}
            onChange={e => setTextData(e.target.value)} >
          </Input>
          <Button
            onClick={() => addItem(newTextData)}
          >Add</Button>
        </TaskCard>
        <RenderItemsToDo itemsArray={itemsArray} />
      </App_header>
    </AppDiv>
  );
}

export default App;
