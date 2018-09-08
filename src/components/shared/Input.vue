<template>
   <input type="text" class="register-control" :placeholder="placeholderName">
</template>

<script>
  export default {
props: {
  
      placeholderName:{
           type: String,
        required: true
      },
       obj: {
               type: Object,
              required:true
           },
    },
    data(){
        return{

        }
    }
}
</script>
<style>

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

