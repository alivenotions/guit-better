import React from 'react'
import { Home } from './Home'
import { Practice } from './Practice'

export const App = () => {
  const [showHome, setShowHome] = React.useState(true)
  const [chosenChords, setChosenChords] = React.useState([])

  function addChords(event) {
    if (event.target.tagName === 'BUTTON') {
      setChosenChords([...chosenChords, event.target.innerText])
    }
  }

  return (
    <header>
      {showHome ? (
        <Home
          start={() => {
            setShowHome(false)
          }}
          chosenChords={chosenChords}
          addChords={addChords}
        />
      ) : (
        <Practice chosenChords={chosenChords} />
      )}
    </header>
  )
}
