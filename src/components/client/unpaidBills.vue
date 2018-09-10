<template>
    <div id = "show-users">
        <h1>{{title}}</h1>

        

        <div v-for="(bill, index) in bills"  :key="index" class = "single-user">
            <ul class= "container">
                
                <li>
                <h4>{{bill.service.name}}</h4>
                 <h4>{{bill.startDate}}</h4>
                <h4>{{bill.endDate}}</h4>
                 <h4>{{bill.paymentDate}}</h4>
                 <h4>{{bill.amount}}</h4>
                 <h4>{{bill.currency}}</h4>
                 
                 <button class= "btn" @click = "payBills(bill.id,index)" >Pay</button>
               
                  <button class= " btn btn-center" @click = "payAllBills()" >Pay all</button>
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
  name: "UnpaidBills",
  components:{
      Button
  },
  
    data(){
        return{
            bills:[],
            label:"Pay",
            isShown:false,
            title: "Unpaid Bills",
            serviceAdded:false,
            name: "",
            show: null
           
        
            
        }
    }, 
    methods:{
        toggle(){
            this.isShown !=this.isShown;
        },
       
       async payBills(billId, index){
            const r = await put("http://localhost:8080/api/clients/"+`${1}`+"/payBill/"+`${billId}`,{
            });
             const res= await r.json() 
             this.$delete(this.bills, index);

             return res;

       },
        async payAllBills(){
            const r = await put("http://localhost:8080/api/clients/1/payAllUnpaidBills",{
            });
             const res= await r.json() 
             this.bills.splice(0,this.bills.length)
            this.navigateTo();
             return res;     

       },
        navigateTo(nav) {
        this.$router.push({
        path: 'allsubs'

        })
        }
            

    },
 

    created(){
        const {r} = JSON.parse(localStorage.getItem('subid') || '{}');
         const id=1;
         
         const { accessToken } = JSON.parse(localStorage.getItem('usersession') || '{}');
            this.$http.get("http://localhost:8080/api/clients/"+`${id}`+"/bills",{
                headers: {
            'Authorization': `Bearer ${accessToken}`
          }
            })
            .then(function(data){
                console.log(data.body.content);
                this.$set(this, 'bills', data.body.content);
                console.log(this.bills)
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