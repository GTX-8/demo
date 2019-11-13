<template>
<div class="form">
  <burron @click="request">
  <h1>123456</h1>
</div>
</template>
<script>
export default {
    methods: {
        result() {
            this.axios.get('https://jsonplaceholder.typicode.com/posts?q=')
            .then(res => {
                this.results = res.data
            })
        }
    }
}
</script>
<style>
  .form {
    width: 100%;
    height: 100%;
  }
</style>