import React from 'react'

export const Home = ({ start, chosenChords, addChords }: any) => {
  return (
    <div id="front">
      <section id="chords" onClick={addChords}>
        <h2>Chords</h2>
        <div id="a-chords">
          <button>A major</button>
          <button>A minor</button>
          <button>A 7</button>
        </div>
        <div id="c-chords">
          <button>C major</button>
          <button>C minor</button>
          <button>C 7</button>
        </div>
      </section>
      <section id="bpm">
        <h2>BPM</h2>
        <input aria-labelledby="bpm" placeholder="60" />
      </section>
      <section id="chosen-chords">
        <h2>Chosen chords</h2>
        <div>{chosenChords.join(', ')}</div>
      </section>
      <button onClick={start}>Start</button>
    </div>
  )
}
