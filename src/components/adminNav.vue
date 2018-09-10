<template>
    <div>
    	<div class = "mynav">
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
					<div class="container">
                        <router-link to= '/showadmins' class="navbar-brand ">NewGenerationPuppies</router-link>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarResponsive">
							<ul class="navbar-nav ml-auto ">
								<li class="nav-item">
									<div class="dropdown">
  											<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   											 Register
												</button>
												<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
													<router-link to= '/registeradmin' class="dropdown-item">Admin</router-link>
													<router-link to= '/registerclient' class="dropdown-item">Client</router-link>
												</div>
										</div>
								</li>
								<li class="nav-item">
										<div class="dropdown">
  											<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   											 Manage
												</button>
												<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
													<router-link to= '/showadmins' class="dropdown-item">Admins</router-link>
													<router-link to= '/showclients' class="dropdown-item">Clients</router-link>
												</div>
										</div>
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
#dropdownMenuButton{
  display:block;
    margin-right: 10px;
}
</style>

