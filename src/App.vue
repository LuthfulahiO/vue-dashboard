<template>
  <div id="app">
    <SideBar/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import SideBar from './components/SideBar';

export default {
  name: 'App',
  components: {
    HelloWorld,
    SideBar,
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
