<template>
    <div id = "show-users">
        <h1>{{title}}</h1>
        <div v-for="(sub, index) in subscribers"  :key="index" class = "single-user">
            <ul class= "container">
                <li>
                <h4>{{sub.firstName}}</h4>
                 <h4>{{sub.lastName}}</h4>
                 <h4>{{sub.address}}</h4>
                 <h4>{{sub.egn}}</h4>
                 <h4>{{sub.phoneNumber}}</h4>
                 <button class= "btn" @click = "deleteElements(sub.id, index)" >Delete</button>
                 <button class= "btn" @click="isShown=!isShown" >Update</button>
                 
  					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   						Add Service
					</button>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<input class="dropdown-item " v-on:keyup.enter = "addservice(sub.id),show=index" v-model="name"/>
                       
					</div>
    
                 <button class= "btn" @click="saveId(sub.id), navigateTo()" >Pay Bills</button>
                 <h4 v-show="show === index">Service added successfuly :)</h4>
                                 
                 </li>
            </ul>
        </div>
        
        <!-- <router-link tag="button" class="myClass" id="button" :to="ShowUsers">Manage</router-link> -->
    </div>
</template>

<script>
import Vue from "vue";
import request from '../shared/helper.js'
import Button from '../shared/Button.vue'
import {bus} from '../../main.js'

const [post, get, put, deletee] = ["POST", "GET", "PUT", "DELETE"].map(request);

export default{
  name: "AllSubs",
  components:{
      Button
  },
  
    data(){
        return{
            subscribers:[],
            label:"Update",
            isShown:false,
            title: "All Subscribers",
            serviceAdded:false,
            name: "",
            show: null
         
            
        }
    }, 
    methods:{
        deleteElements(key, index) {
            
             this.$delete(this.subscribers, index);
             this.delete(key);
        },
        toggle(){
            this.isShown !=this.isShown;
        },
        delete(id){
            const { accessToken } = JSON.parse(localStorage.getItem('usersession') || '{}');
            this.$http.delete("http://localhost:8080/api/clients/subscribers/" + `${id}`,{
                headers: {
            'Authorization': `Bearer ${accessToken}`
          }
            })
            
        },
       async addservice(id){

             const {name} = this;

            const r = await post("http://localhost:8080/api/clients/subscribers/"+`${id}`+"/services/",{
                data:{name}
            });

             const res= await r.json();
             this.serviceAdded=true;
             return res;
    
       },
       saveId(id){


          localStorage.setItem('subid', JSON.stringify("r",id));
      
          
      

       },
       navigateTo(nav) {
           this.saveId();
        this.$router.push({
        path: 'unpaidbills'
    });
        }
    
            



    },

    created(){
         const { accessToken } = JSON.parse(localStorage.getItem('usersession') || '{}');
            this.$http.get("http://localhost:8080/api/clients/subscribers",{
                headers: {
            'Authorization': `Bearer ${accessToken}`
          }
            })
            .then(function(data){
                console.log(data.body.content);
                this.$set(this, 'subscribers', data.body.content);
                console.log(this.subscribers)
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
  max-width: 90%;
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