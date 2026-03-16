import React from 'react'
// import Counter from './features/counter/Counter'
// import Data from './features/counter/Data'
import TodoList from './features/todo/TodoList'
import AddData from './features/todo/AddData'

function App() {
  return (
    <div>
      <h1>Hello this Redux application</h1>
      {/* <Counter /> */}
      {/* <Data /> */}
      <AddData />
      <TodoList />
    </div>
  )
}

export default App
