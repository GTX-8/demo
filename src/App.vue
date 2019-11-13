<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import son from './components/son'
export default {
  components: {
    son
  },
  data() {
    return {
      message: '这是一条消息'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
