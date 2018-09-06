<template>
    <footer>
        <p>Copyright 2018 {{ title }} &copy;</p>
    </footer>
</template>
<script>
export default {
    props: {
      title: {
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
footer{
   padding: 4em 0 2em 0;
		background-color: #1b1b1f;
		text-align: center;
}
p{
    color: rgba(255, 255, 255, 0.5);
			font-size: 0.9em;
			margin: 0 0 2em 0;
			padding: 0;
			text-align: center;
}
</style>