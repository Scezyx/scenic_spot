<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import navBar from './components/public/navBar'

export default {
  name: 'app',
  // components:{
  //   navBar,
  // }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  margin: 0;
  padding: 0;
  background: #151531;
  height: 100%;
  width: 100%;
}
</style>
