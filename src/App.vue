
<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
<div class="header">
  <img alt="Vue logo" height="100" width="100" src="./assets/logo.png" >
  <nav>
      <router-link to="/">MODELS</router-link> 
      <router-link :to="{ name: 'Colors', params: { model: 'ibiza',price:'193500' } }">COLORS</router-link> 
      <router-link :to="{ name: 'Accessories', params: { model: 'ibiza',chosencolor:'red',price:'193500' } }">ACCESSORIES</router-link> 
      <router-link :to="{ name: 'Summary', params: { model: 'ibiza',chosencolor:'red',price:'193500',selectedAcc:[] } }">SUMMARY</router-link> 
    </nav>
    <router-view/>
</div>
</template>

<script scoped>


export default {

components:{},

data(){return{appprice:"45"}},  

}
</script>

<style lang="scss">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.header{align-content: center;}


nav {
  text-align: center;
  display: grid;
  padding: 5%;
  grid-auto-flow: column;
  padding: 3%;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-decoration: none; 

    
a {
  font-weight: bold;
  color: rgb(114, 107, 107);
  text-decoration: none; 

  &.router-link-exact-active {
    color: black;
    text-decoration: none; 
  }
}

}
</style>
