<template>
  <button :class="type"><slot/></Button>
</template>

<script>
  export default {
name: 'Button',
props: [ 'type' ]
}
</script>


<style scoped>
button.primary {
background: #bcb05e;
color: white;
}
</style>