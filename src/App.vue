<template>
  <div id="app">
      <div ref="container">
      </div>
      <signin-form/>
      <register-form/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

//Vue.use(VueRouter)
import SigninForm from './components/SigninForm.vue'
import RegisterForm from './components/RegisterForm.vue'

//Vue.component('SinginForm', SigninForm)

export default {
  name: 'app',
  components: {
    SigninForm, RegisterForm
   
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
