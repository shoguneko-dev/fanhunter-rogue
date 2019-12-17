<script>
  import BorderDiv from "../components/BorderDiv.svelte";

  let mapHeight;
  $: mapWidthStyle = `width: ${mapHeight}px;`;
</script>

<style type="text/scss">
  .main {
    width: 100%;
    height: calc(100% - var(--app-header-height, 3.5rem));
    display: flex;
  }

  .text-container {
    flex: 1 500px;
    margin-right: 0.5rem;
    display: flex;
    flex-direction: column;

    .text-area {
      flex: 1;
    }

    .command-input {
      flex: 0 1.5rem;
      margin: 0;
      background-color: var(--main-bg-color, black);

      &:focus {
        outline: none;
      }
    }
  }

  .map {
    position: absolute;
    height: 45%;
  }

  .sidebar {
    flex: 0 300px;
    display: flex;
    flex-direction: column;
  }
</style>

<div class="main">
  <div class="text-container">
    <div class="text-area">Text Area</div>
    <input class="command-input" />
  </div>
  <div bind:offsetHeight={mapHeight} class="map" style={`${mapWidthStyle}`}>
    <BorderDiv width="100%" height="100%">
      <p>Map</p>
    </BorderDiv>
  </div>
  <div class="sidebar">
    <BorderDiv flex="1 250px">
      <p>Items</p>
    </BorderDiv>
    <BorderDiv flex="0 200px">
      <p>Status</p>
    </BorderDiv>
  </div>
</div>
