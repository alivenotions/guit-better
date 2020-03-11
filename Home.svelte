<script>
  export let start
  export let chosenChords
  export let addChords
</script>

<div id="front">
  <section id="chords" on:click={addChords}>
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
  <button on:click={start}>Start</button>
</div>
