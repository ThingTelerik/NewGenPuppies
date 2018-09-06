<template>
    <div id = "reg-form" class="container">
        <div class="register-form">
            <h2>Client Register</h2>
            <p>Register your bank here</p>
        </div>
        <div id = "register">
            <div class="register-form">
                <input type="text" v-model="name"  class="register-control" id="inputName" placeholder="Name">  
                <input type="text" v-model="username"  class="register-control" id="inputUsername" placeholder="Username">
                <vue-isyourpasswordsafe v-model="myStrongPassword" placeholder="Your password"	@onFinishedChecking="isPasswordSafe"/>
                <input type="password"  v-model="password" class="register-control" id="inputPassword" placeholder="Repeat password">
                <h4 v-if="isSafe">Your password should be good to go :)</h4>
		        <h4 v-if="isSafe === false" class="error">Your password has been leaked and you <strong>shouldn't</strong> use it!</h4>
                <input type="text" v-model="eik"  class="register-control" id="inputEik" placeholder="EIK">    
                <button type="submit" @click="register" class="btn btn-primary">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import request from './helper.js'



const [post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(request);

export default{
  name: "RegisterForm",
  data() {
    return  {
        name: "FiBank",
        username: "fibank",
        myStrongPassword: "werdeds",
        password: "",
        eik: "54879848gh56", 
        isSafe:null
    };
  },
    methods:{
        async register(){
            const {name, username, password, eik} = this;
            const r = await post("http://localhost:8080/api/register", {
                data: {name, username, password, eik}
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

<style>
* {
		font-family: 'Nunito', sans-serif;
		font-weight: 300;
	}
	body {
		margin: 0px;
	}

    .container {
  background: rgba(35, 168, 221, 0.123) none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 50%;
  padding: 50px 70px 70px 71px;
}


    div#app input {
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
		width: 350px;
		border-left: 0px;
		border-top: 0px;
		border-right: 0px;
		border-radius: 0px;
		box-shadow: 0 0 0;
		text-align: center;
		margin-bottom: 10px;
	}


	

</style>


