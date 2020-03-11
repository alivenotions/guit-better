<script>
  import Home from './Home.svelte'
  import Practice from './Practice.svelte'

  let showHome = true
  let chosenChords = []

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
      start={() => {
        showHome = false
      }}
      {chosenChords}
      {addChords} />
  {:else}
    <Practice {chosenChords} />
  {/if}
</header>
