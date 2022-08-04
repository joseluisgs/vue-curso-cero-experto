<template>
  <div class="options-container">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PokemonOptions',
  }
</script>

<style scoped>
  /* Pokemon Options */
  ul {
    list-style-type: none;
  }
  li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .options-container {
    display: flex;
    justify-content: center;
  }
</style>
