import React, {useState , useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  console.log(input)

  useEffect(() => {
     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
     })
  }, [])
  
  const addTodo = (event) => {
    event.preventDefault()
   
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

     setInput('')
  }

  return (
    <>

     <form>
       
    <div className="todo-input">
     <input
      placeholder="Enter Text"
      value={input}
      onChange={event => setInput(event.target.value)}
      />
     <button 
     type="submit" 
     disabled={!input}  
     onClick={addTodo} 
     className="btn btn-warning ml-1"> add todo </button>
  
    </div>
    </form>

    <div className="todo-data mt-3">
       <ul>
        {
          todos.map(todo => ( <Todo text={todo} /> ) )
        }
       </ul>
    </div>



    </>
  );
}

export default App;
