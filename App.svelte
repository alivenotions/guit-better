<script>
  import Home from './Home.svelte'
  import { ChordBox } from 'vexchords'

  let showHome = true
  let chosenChords = []
  $: console.log(chosenChords)
  function addChords(event) {
    if (event.target.tagName === 'BUTTON') {
      chosenChords = [...chosenChords, event.target.innerText]
    }
  }
</script>
<style>
</style>

<header>
  {#if showHome}
    <h1>GuitBetter</h1>
    <Home
      start={() => { showHome = false }}
      chosenChords={chosenChords}
      addChords={addChords}
    />
  {:else}
    <div>Chosen Chords YO! Let's start</div>
    <div>{chosenChords.join(', ')}</div>
  {/if}
</header>
