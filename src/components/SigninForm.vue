<template>
  <div class="container">
    <h2 class="form-heading">Client Login</h2>
    <div class="login-form">
      <p>Please enter your username and password</p>
    </div>
    <div id="Login">
          <div class="form-group">
            <input type="text" v-model="username" class="form-control" id="inputUsername" placeholder="Username">
            <input type="password" v-model="password" class="form-control" id="inputPassword" placeholder="Password">
            </div> 
            <button type="submit" @click="register" class="btn btn-primary">Login</button>
         
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import request from './helper.js'

const [post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(request);

export default{
  name: "SigninForm",
  data() {
    return  {
      username: "Kon",
      password: "secret"
    };
  },
  methods: {
    async register() {
      const { username, password } = this;
      const r = await post("http://localhost:8080/api/signin", {
        data: { username, password }
      });
      const { accessToken } = await r.json();
      this.saveSession({ username, accessToken });
    },
    saveSession(session) {
      
      localStorage.setItem("usersession", JSON.stringify(session));
      console.log(
      localStorage.getItem("usersession"));
    }
  }
};

 
</script>

<style>

.login-form .form-control {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
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
 .btn.btn-primary {
 background-color: #70c7bea8;
		border-radius: 4px;
		border: 0;
		display: inline-block;
    color: #ffffff;
    justify-content: center;
    align-items:center;
    display: inline-block;
    font-size: 1em;
		cursor: pointer;
		font-weight: 400;
		height: 5em;
		line-height: 3em;
		text-align: center;
    text-decoration: none;
    margin: auto;
		max-height: 4.5vw;
    min-height: 3.5vw;
    width:35%;
    position: relative;
		text-align: center;

}

	.btn:hover {
			background-color: #5ddbcebd;;
		}

	
</style>


