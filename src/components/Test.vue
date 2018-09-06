<template>
<div class = "test">
    <ul id="list">
  <!-- <li v-for="item in items"> -->
    {{ item.message }}
  <!-- </li> -->
</ul>
    <div/>
</template>

<script>

//export somehow -> kocko

const list = new Vue({
  el: '#list',
  data: {
    items: [
      { message: 'pesho' },
      { message: 'gosho' }
    ]
  }
});


</script>