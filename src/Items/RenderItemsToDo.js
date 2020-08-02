import React, { useEffect, useState } from 'react'
import { deleteItem, markReady } from '../Store/controladorAlmacen'
import {TaskContainer, TaskCard, Button, TagComplete, ButtonDel, TaskTittle, TaskTittleContainer} from '../Styles/Styles'
const RenderItemsToDo = (props) => {

  const [doneTask, setDoneT] = useState([])
  const [unDoneTask, setUnDoneT] = useState([])

  useEffect(() => { 
    setDoneT(props.itemsArray.filter(item => item.isCompleted !== undefined && item.isCompleted))
    setUnDoneT(props.itemsArray.filter(item => item.isCompleted === undefined || !item.isCompleted))
  }, [props.itemsArray])

  const markComplete = (p_item) => {
    markReady(p_item)
  }

  return (
    <TaskContainer >
      <div style={{ flex: 5, maxWidth:"50%"}}>
        <h3>To Do:</h3>
        {
          unDoneTask.map((item, indx) => (
            <TaskCard key={indx}>
              <TaskTittleContainer>
                <TaskTittle >
                  {item.text}
                </TaskTittle>

                <div style={{ flex: 3 }}>
                  <ButtonDel 
                    onClick={() => deleteItem(item.text)}>x</ButtonDel>
                </div>
              </TaskTittleContainer> 
              <Button 
                onClick={() => markComplete(item.text)}>Mark As Complete</Button>
              
            </TaskCard>
          ))
        }
      </div>

      <div style={{ flex: 5, maxWidth:"50%" }}>
        <h3>Done:</h3> 
        {
          doneTask.map((item, indx) => (
            <TaskCard key={indx}>

              <TaskTittleContainer >
                <TaskTittle >
                  {item.text}
                </TaskTittle>

                <div style={{ flex: 3 }}>
                  <ButtonDel 
                    onClick={() => deleteItem(item.text)}>x</ButtonDel>
                </div>
              </TaskTittleContainer>

              <TagComplete>Completed! </TagComplete>

            </TaskCard>
          ))
        }
      </div>
    </TaskContainer>
  );
}

export default RenderItemsToDo

