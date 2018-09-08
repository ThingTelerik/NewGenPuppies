<template>
    <div>
    	<div class = "mynav">
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
					<div class="container">
						<a class="navbar-brand " href="#top">NewGenerationPuppies</a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarResponsive">
							<ul class="navbar-nav ml-auto ">
								<li class="nav-item">
									<router-link to= '/registeradmin' class = "nav-link">Register Admin</router-link>
								</li>
								<li class="nav-item">
										<router-link to= '/registerclient' class = "nav-link">Register Client</router-link>
								</li>
								<li class="nav-item">
										<router-link to= '/showUsers' class = "nav-link">Manage</router-link>
								</li>
								<li class="nav-item">
									<div class="input-group mb-3">
										<input type="search"  class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2">
										<div class="input-group-append">
									    <button  id= 'search-btn' class="btn btn-outline-secondary" type="button">Search</button>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		
		
    </div>        
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
    },
    methods: {
      changeTitle: function(){
        this.$emit('changeTitle', 'New Generation Puppies');
      }
    }  
}
</script>

<style>

</style>

