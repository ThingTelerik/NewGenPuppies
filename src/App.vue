<template>
  <div id="app">
  
      <app-header v-bind:title = "title" v-on:changeTitle = "updateTitle($event)"/>
      <!-- <client-nav  v-bind:title = "title" v-on:changeTitle = "updateTitle($event)"/> -->
      <!-- <signin-form/> -->
      <!-- <c-signin-form/> -->
      <!-- <register-form/> -->
      <!-- <show-users/> -->
      <router-view></router-view>
      <!-- <AddSubscriber/> -->
      <app-footer v-bind:title= "title"/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import Header from './components/adminNav.vue'
import ClientNav from './components/client/ClientNav.vue'
import SigninForm from './components/shared/SigninForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import ShowAdmins from './components/admin/showAdmins'
import AddSubscriber from './components/shared/addSubscriber.vue'
import Footer from './components/Footer.vue'
import CSigninForm from './components/client/clientSignin.vue' 




export default {
  name: 'app',
  components: {
    SigninForm, RegisterForm,ShowAdmins,AddSubscriber,ClientNav,CSigninForm,
    'app-footer':Footer,
    'app-header':Header,

   
  },
  data(){
    return{
      title: 'New Generation Puppies'
    }
  },
   methods: {
      updateTitle: function(updatedTitle){
        this.title = updatedTitle;
      }
    }
}
</script>

<style>
* {
		font-family: 'Nunito', sans-serif;
		font-weight: 300;
	}
	body {
        margin: 0px;
        background: #202024;
	}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
