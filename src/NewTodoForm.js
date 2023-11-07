
import React, {useState} from "react"
import './NewTodoForm.css'




function NewTodoForm({addTodo}) {
    const [formData, setFormData]  = useState("")
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      }
    
      const handleSubmit = e => {
        e.preventDefault()
        addTodo({...formData})
        setFormData("")


      }
    return (
      <div className="TodoForm">
            <form onSubmit={handleSubmit}>
                <label className="FormLabel" htmlFor="title">Title:</label>
                <input 
                    name="title" 
                    data-testid="title"
                    id="title"
                    value={formData.title || ""}
                    onChange={handleChange}/>
                <label className="FormLabel" htmlFor="text">Text:</label>
                <input 
                    name="text" 
                    data-testid="text"
                    id="text"
                    value={formData.text || ""}
                    onChange={handleChange} />
          
                <button data-testid="submit">Add!</button>
</form>
      </div>
    );
  }

  export default NewTodoForm
