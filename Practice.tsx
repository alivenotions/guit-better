import React from 'react'
import { ChordBox } from 'vexchords'
import { CHORDS } from './chords'

export const Practice = ({ chosenChords }: any) => {
  const chordBox = React.useRef(null)
  React.useEffect(() => {
    chosenChords.map(chord => {
      const child = document.createElement('div')
      chordBox.current.append(child)
      new ChordBox(child).draw({ chord: CHORDS[chord] })
    })
  }, [chosenChords])

  return (
    <div>
      <div>Chosen Chords YO! Let us start</div>
      <div>{chosenChords.join(', ')}</div>
      <div ref={chordBox} />
    </div>
  )
}
