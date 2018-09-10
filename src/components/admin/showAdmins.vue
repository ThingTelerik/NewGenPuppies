<template>
    <div id = "show-users">
        <h1>All admins</h1>
        <div v-for="(user, index) in users"  :key="index" class = "single-user">
            <ul class= "container">
                <li>
                <h4>{{user.username}}</h4>
                 <h4>{{user.email}}</h4>
                 <button class= "btn" v-on:click = "deleteElements(user.id,index)" >Delete</button>
                 <button class= "btn" @click="navigateTo(),isShown=!isShown,show=index" >Update</button>
                 <admin-update v-show="show === index" v-if="isShown"/>
                 </li>
            </ul>
        </div>
        <router-link tag="button" class="myClass" id="button" :to="ShowUsers">Manage</router-link>
    </div>
</template>

<script>
import Vue from "vue";
import request from '../shared/helper.js'
import Button from '../shared/Button.vue'
import AdminUpdate from './updateAdmin.vue'

const [post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(request);

export default{
  name: "ShowAdmins",
  components:{
      Button, AdminUpdate
  },
  
    data(){
        return{
            users:[],
            label:"Update",
            isShown:false,
            show:null
        }
    }, 
    methods:{
        deleteElements(key, index) {
            
             this.$delete(this.users, index);
             this.delete(key);
        },
        toggle(){
            this.isShown !=this.isShown;
        },
        delete(username){
            const { accessToken } = JSON.parse(localStorage.getItem('usersession') || '{}');
            this.$http.delete("http://localhost:8080/api/auth/admin/delete/" + `${username}`,{
                headers: {
            'Authorization': `Bearer ${accessToken}`
          }
            })
            
        },
         navigateTo (nav) {

            this.$router.push({
             path: 'adminupdate'
        })
  }

    },

    created(){
         const { accessToken } = JSON.parse(localStorage.getItem('usersession') || '{}');
            this.$http.get("http://localhost:8080/api/auth/admin/alladmins",{
                headers: {
            'Authorization': `Bearer ${accessToken}`
          }
            })
            .then(function(data){
                console.log(data.body);
                this.$set(this, 'users', data.body);
                console.log(this.users)
            })
    }
}
</script>

<style scoped>
h1{
    color: #ffffffe8;
}
h4{
    color: #ffffffe8;
     margin-right: 10px; 
     display: inline-block;
     position: relative;
     flex-flow: column;
   
}
 .container {
  background: rgba(35, 168, 221, 0.123) none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 10px;
  max-width: 50%;
  padding: 20px 20px 20px 21px;
 }
 ul {
           
    position: relative;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
ul:before, ul:after {
    text-align: center;
    display: block;
    border: 1px solid black;
    border-bottom: 0;
    width: 48%;
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
		height: 2.5em;
		line-height: 2em;
		text-align: center;
    text-decoration: none;
    margin: auto;
		max-height: 4.5vw;
    min-height: 2.5vw;
    width:10%;
    position: relative;
        text-align: center;
        margin-right: 10px;
        margin-inline-end: 20px;
        float:right;

}

	.btn:hover {
			background-color: #5ddbcebd;;
		}
</style>

