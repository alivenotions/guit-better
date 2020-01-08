<script>
  export let chosenChords
  import { ChordBox, draw } from 'vexchords'
  import { onMount } from 'svelte'
  let CHORDS = {
    'A major': [
      [1, 0],
      [2, 2, 3],
      [3, 2, 2],
      [4, 2, 1],
      [5, 0, 'A'],
      [6, 'x'],
    ],
    'A minor': [
      [1, 0],
      [2, 1, 1],
      [3, 2, 3],
      [4, 2, 2],
      [5, 0, 'A'],
      [6, 'x'],
    ],
    'A 7': [
      [1, 0],
      [2, 2, 3],
      [3, 0],
      [4, 2, 2],
      [5, 0, 'A'],
      [6, 'x'],
    ],
    'C major': [
      [1, 0],
      [2, 1, '1'],
      [3, 0],
      [4, 2, 2],
      [5, 3, 3],
    ],
    'C minor': [
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 5],
      [5, 3],
      [6, 'x'],
    ],
    'C 7': [
      [1, 0],
      [2, 1, 1],
      [3, 3, 4],
      [4, 2, 2],
      [5, 3, 3],
      [6, 'x'],
    ],
  }
  let chordBox

  onMount(() => {
    chosenChords.map(chord => {
      const child = document.createElement('div')
      chordBox.append(child)
      new ChordBox(child).draw({ chord: CHORDS[chord] })
    })
  })
</script>

<div>
  <div>Chosen Chords YO! Let's start</div>
  <div>{chosenChords.join(', ')}</div>
  <div bind:this={chordBox} />
</div>
