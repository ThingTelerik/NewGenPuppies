<template>
    <div id = "reg-form" class="container">
        <div class="register-form">
            <h2>{{title}}</h2>
            <p>{{title}}</p>
        </div>
        <div id = "register">
            <div class="register-form">
                <p>
                <input type="text" v-model="name"  class="register-control" id="inputName" placeholder="Name"> 
                </p> 
                <p>
                <input type="text" v-model="username"  class="register-control" id="inputUsername" placeholder="Username">
                </p>
                <p>
                <vue-isyourpasswordsafe v-model="myStrongPassword" placeholder="Your password"	@onFinishedChecking="isPasswordSafe"/>
                </p>
                <p>
                <input type="password"  v-model="password" class="register-control" id="inputPassword" placeholder="Repeat password">
                </p>
                <h4 v-if="isSafe">Password should be good to go :)</h4>
		        <h4 v-if="isSafe === false" class="error">Password has been leaked and you <strong>shouldn't</strong> use it!</h4>
                <input type="text" v-model="email"  class="register-control" id="inputemail" placeholder="Email">    
              </div>   
              <btn v-on:register = "register()" v-bind:label= "label" v-bind:obj= "obj"/>
              
        </div>
    </div>
</template>

<script>

import Button from '../shared/Button'
import request from '../shared/helper.js'

const [post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(request);

export default{
  name: "AdminRegister",
  components:{
      'btn':Button
  },
  data() {
    return  {
       obj:{
        name: "adminn",
        username: "adminn",
        password: "",
        email: "54879848gh56",
        },
        myStrongPassword: "werdeds",
        isSafe:null,
        label:"Add admin",
        title:"Register admin"
        
    };
  },
    methods:{
        async register(){
            const {name, username, password, email} = this;
            const r = await post("http://localhost:8080/api/auth/admin/register", {
                data: {name, username, password, email}
            });
            const res = await r.json();
            return res;
        },
        isPasswordSafe(val) {
			this.isSafe = val;
        }
    }
    
}
</script>

<style scoped>
    .container {
  background: rgba(35, 168, 221, 0.123) none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 50%;
  padding: 50px 70px 70px 71px;
}
    .register-form{
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
		width: 60%;
		border-left: 0px;
		border-top: 0px;
		border-right: 0px;
		border-radius: 0px;
		box-shadow: 0 0 0;
		text-align: center;
		margin-bottom: 10px;
	}
	
</style>

