<template>
    <div id = "show-users">
        <h1>all users</h1>
        <div v-for="user in users" :key="user.id" class = "single-user">
        <h2>{{user.username}}</h2>
        </div>
        <button v-on="getall">Get all</button>
    </div>
</template>

<script>
import Vue from "vue";
import getRequest from './helper.js'
import Button from './Button.vue'

//const [post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(getRequest);

export default{
  name: "ShowUsers",
  components:{
      Button
  },
  
    data(){
        return{
            users:[]
        }
    }, 
    methods:{
         async getall(){
            const r = await get("http://localhost:8080/api/auth/admin/all", {});
            const res = await r.json();
            return res;
        },
        
    },
    created(){
            this.$http.get("http://localhost:8080/api/auth/admin/all")
            .then(function(data){
                console.log(data.body);
                this.$set(this, 'users', data.body);
                console.log(this.users)
            })
    }
}
</script>

<style>

</style>

