import { useState } from "react"


export function NewTodoForm({ onSubmit }){    
    const [newItem, setNewItem] = useState("")


    function handleSubmit(e){
        e.preventDefault()
      
      if(newItem === "") return

      onSubmit(newItem)
      
      setNewItem("")
      }
      
      return (
        <form onSubmit={handleSubmit}className="form__item"> 
        <div className="form__row">
          <label htmlFor="item">New Task</label>
          <input 
          value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item" 
          placeholder='What do you need to do?'/>
        </div><div className='form__btn--container'>
        <button className="form__btn">+</button>
        </div>
        </form>
      )


}