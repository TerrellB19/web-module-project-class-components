import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>todos</h1>
        <ul>
          <li>Do the laundry</li>
          <li>Wash the dishes</li>
          <li>Vacuum carpet</li>
        </ul>

        <form>
          <input type='text'/>
          <button>Add</button>  
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
