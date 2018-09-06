<template>
  <button type="submit" class= "btn">{{label}}
    </button>
</template>

<script>
  export default {
props: {
      label: {
        type: String,
        required: true
      }
    },
    data(){
        return{
        }
    }
}
</script>


<style scoped>
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