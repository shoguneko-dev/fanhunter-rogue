<script>
  export let width = "auto";
  export let height = "auto";
  export let flex = undefined;

  $: style = flex ? `flex: ${flex};` : `width: ${width}; height: ${height};`;
</script>

<style>
  div {
    box-sizing: border-box;
    background-color: black;
    color: white;
  }

  .outside-border {
    border-top: 5px solid #f0cb54;
    border-left: 5px solid #f0cb54;
    border-right: 5px solid #d4af37;
    border-bottom: 5px solid #d4af37;
    border-radius: 2px;
  }

  .inner-border {
    width: 100%;
    height: 100%;
    border-top: 5px solid #d4af37;
    border-left: 5px solid #d4af37;
    border-right: 5px solid #f0cb54;
    border-bottom: 5px solid #f0cb54;
    padding: 5px;
  }
</style>

<div class="outside-border" {style}>
  <div class="inner-border">
    <slot />
  </div>
</div>
