<template>
  <div id="app">
    <DashBoard/>
  </div>
</template>

<script>
import DashBoard from './components/DashBoard';

export default {
  name: 'App',
  components: {
    DashBoard,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rubik");
#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
