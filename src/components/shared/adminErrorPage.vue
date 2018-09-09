<template>
  <div class="content">
    <h2 class="form-heading">Error</h2>
    <div class="login-form">
    </div>
    <div id="Login">
          <div class="form-group">
            <p>
            <h5>Something went wrong</h5>
            <p/>
          </div>
           <btn v-on:register = "navigateTo()"  v-bind:label= "label" v-bind:obj= "obj"/>
         
    </div>
  </div>
</template>

<script>

import Button from './Button.vue'

export default{
  name: "ErrorPage",
  components: {
    'btn':Button
  },
  data() {
    return  {
     label:"Go Back"
    };
  },
  methods: {
    navigateTo(nav) {

    this.$router.push({
        path: 'registeradmin'
    })
  }
  }
};
 
</script>

<style scoped >
 .content {
  background: rgba(35, 168, 221, 0.123) none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 50%;
  padding: 50px 70px 70px 71px;
}
.form-heading {
  color: #f7f7f7;
}
.form-group {
  margin-bottom: 10px;
}
.login-form {
  text-align: center;
  color: #f7f7f7;
}
   input {
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-block;
		font-size: 1rem;
		height: 2.5em;
		-webkit-box-pack: start;
		-ms-flex-pack: start;
		justify-content: flex-start;
		line-height: 1.5;
		padding-left: .75em;
		padding-right: .75em;
		background-color: #fff;
		border: 1px solid #dbdbdb;
		color: #363636;
		width: 50%;
		border-left: 0px;
		border-top: 0px;
		border-right: 0px;
		border-radius: 0px;
		box-shadow: 0 0 0;
		text-align: center;
    margin-bottom: 10px;
   }
	
</style>