import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [textInput, setTextInput] = useState('')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    await axios.get(`http://localhost:3001/todos`).then(res => {
      const tasks = res.data
      setTodos(tasks.reverse())
    })
  }

  const addTask = () => {
    if (!textInput.trim()) {
      alert('Введите названия задачи')
      setTextInput('')
      return
    }
    const newTask = {
      task: textInput,
      done: false
    }
    axios.post(`http://localhost:3001/todos`, newTask)
    fetchProducts()
    setTextInput('')
  }

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)
    fetchProducts()
  }

  const editTask = async (todo) => {
    const updateTask = {
      task: todo.task,
      done: !todo.done
    }
    await axios.put(`http://localhost:3001/todos/${todo.id}`, updateTask)
    fetchProducts()
  }


  return (
    <div className=" w-full flex flex-col items-center  bg-teal-200 font-sans" style={{ minHeight: '100vh' }}>
      <div className="bg-white rounded shadow p-6 mt-5  w-full lg:w-3/4 lg:max-w-3xl">
        <div className="mb-4">
          <div className="flex mt-4 ">
            <input onChange={(e) => setTextInput(e.target.value)} value={textInput} className="shadow appearance-none border outline-none rounded w-full py-2 px-3 mr-4 text-slate-600" placeholder="Add Todo" />
            <button onClick={addTask} className="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500">Add</button>
          </div>
        </div>
      </div>
      <div style={{ maxHeight: '500px' }} className="scroll overflow-auto bg-white rounded shadow p-6 mt-4 w-full lg:w-3/4 lg:max-w-3xl ">
        <h1 className="text-slate-800 text-3xl font-bold pb-3 border-b-2 mb-2">Todo List</h1>
        <ul>
          {todos && todos.map(todo => (
            <li key={todo.id} className="flex mb-2 items-center border-b-2 pb-2  ">
              <p className={!todo.done ? 'w-full text-grey-darkest' : 'w-full line-through text-green-500'}>{todo.task}</p>
              {!todo.done ?
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500" onClick={() => editTask(todo)}>Done</button>
                :
                <button className="flex-no-shrink w-36 p-2 ml-4 mr-2 border-2 rounded  hover:text-white text-slate-500 border-slate-500 hover:bg-slate-500" onClick={() => editTask(todo)}>Not Done</button>
              }
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500" onClick={() => deleteTask(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
