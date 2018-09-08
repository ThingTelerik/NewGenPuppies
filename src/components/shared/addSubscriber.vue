<template>
    <div id = "reg-form" class="container">
        <div class="register-form">
            <h2>Add Subscriber</h2>
            <p>Enter data here</p>
        </div>
        <div id = "register">
            <div class="register-form">
                <p>
                <input type="text" v-model="phoneNumber"  class="register-control"  placeholder="Phone"> 
                </p> 
                <p>
                <input type="text" v-model="firstName"  class="register-control"  placeholder="First Name">
                </p>
                <p>
                <input type="text"  v-model="lastName" class="register-control" placeholder="Last Name">
                </p>
                <p>
                <input type="text" v-model="address"  class="register-control"  placeholder="Address">
                </p>
                <input type="text" v-model="egn"  class="register-control" placeholder="EGN">    
              </div>   
              <btn v-on:register = "register()" v-bind:label= "label" v-bind:obj= "obj"/>
              
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import request from './helper.js'
import Button from './Button.vue'



const [post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(request);

export default{
  name: "AddSubscriber",
  components:{
      'btn':Button
  },
  data() {
    return  {
      
        phoneNumber: "08888888",
        firstName: "Edward",
        lastName: "Stewart",
        address: "Sofia",
        egn: "123456798",
        
       
        label:"Register",
        
    };
  },
    methods:{
        async register(){
            //this.$http.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNTM2MzE0MzI2LCJleHAiOjE1MzY5MTkxMjZ9.ja0RHAxn14WqIGsAzD8otdx1wlI7PieXBISWGv752bhDVC0Sz48OgFx2tEeR8yUEvX7JAVSZBX2YVVOfJaJrQQ';
            const {phoneNumber,firstName,lastName,address,egn} = this;
            const r = await post("http://localhost:8080/api/clients/subscribers", {
                data: {phoneNumber,firstName,lastName,address,egn}
            });
            const res = await r.json();
            return res;
        
        },
        
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