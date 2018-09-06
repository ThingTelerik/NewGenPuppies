<template>
  <div class="content">
    <h2 class="form-heading">Client Login</h2>
    <div class="login-form">
      <p>Please enter your username and password</p>
    </div>
    <div id="Login">
          <div class="form-group">
            <input type="text" v-model="username" class="form-control" id="inputUsername" placeholder="Username">
            <input type="password" v-model="password" class="form-control" id="inputPassword" placeholder="Password">
            </div> 
            <button  type="submit" @click="register" class="btn btn-primary" >Login</button>
         
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import request from './helper.js'


const [post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(request);

export default{
  name: "SigninForm",
  components: {
   
  },
  data() {
    return  {
      username: "Kon",
      password: "secret",
      label: "Login"
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
 .btn {
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


