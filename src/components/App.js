import React from 'react'

const App = () => {
  const relatives = [
    'Uncle John',
    'Aunt Mary',
    'Cousin Sam',
    'Grandma',
    'Grandpa'
  ];
  return (
    <div id="main">
            <h2>Diwali Shopping List</h2>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  )
}

export default App
