<template>
<meta name="viewport" content="width=device-width, initial-scale=1">

  <div class="colors">
    <div id="first" class="col-12 col-s-12">
      <div id="row" class="col-6 col-s-6">
        <h1 id="background"> {{model}} </h1>
        <p>Hayalindeki araca dair rengini<br> seç, tarzını hemen yansıt</p>
        <img id="chosen-color" alt="chosen logo" class=".col-9 col-s-9" height="250" :src="require(`@/assets/${model}-${chosencolor}.png`)">
      </div>
      <div id="row" class="col-6 col-s-6">
        <button type="button" v-on:click="getColor('red')" id="red" class="selectbutton"></button>
        <button type="button" v-on:click="getColor('black')" id="black" class="selectbutton"></button>
        <button type="button" v-on:click="getColor('grey')" id="grey" class="selectbutton"></button>
      </div>
      <div id="total" class="col-12 col-s-12"> 
        <img id="chosen-logo"  class=".col-1 col-s-1"  alt="chosen-logo"  :src="require(`@/assets/${model}-${chosencolor}.png`)">
        <div id="totalprice" class=".col-2 col-s-2" > <span> <b> Total :{{price}}<br> </b> </span></div>
        <button type="button" class=".col-1 col-s-1"  v-on:click="sendColor(chosencolor,price,model)" id="totalbutton">ACCESSORIES</button> 
      </div>
      <div id="clear">
      </div>
    </div>
  </div>
</template>



<script>
// @ is an alias to /src


export default {


  name: 'ColorsView',
  components: { 
    
  },
  data(){return{chosencolor:'red',price:this.$route.params.price,model:this.$route.params.model}},

  methods:{sendColor(chosencolor,price,model){
      this.$router.push({name:'Accessories',params: {price,chosencolor,model}})
    },

    getColor(e){
      if (e=='red') {
         this.price=parseFloat(this.$route.params.price)+0, this.chosencolor='red'
         }  else if (e=='black') {
           this.price=parseFloat(this.$route.params.price)+1000, this.chosencolor='black'}
           else if (e=='grey') {
           this.price=parseFloat(this.$route.params.price)+2000, this.chosencolor='grey'}}
        
},

}

</script>

<style scoped>


#row {
  margin: auto;
  width: 50%;
  padding: 10px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}




.selectbutton{
  margin: 4px 2px;
  border: 1%;
  border-color: white;
  padding: 10px 10px;
  border-radius: 50%;
 }
  


#red{background-color: red;}
#black{background-color: black;}
#grey{background-color: grey;}


.colors{
display: block;
margin-left: auto;
margin-right: auto;

}

#total{
margin-top: 3%;
height: 200px;
display: flex;
justify-content: center;
}

#totalbutton{
  background-color:black; 
  border: none;
  color: white;
  padding: 10px 32px;
  text-decoration: none;
  display: inline-block;
  text-align: left;
  height: 16%;
  font-size: 60%;
  border-radius: 0px 15px 15px 0px;
  max-lines: 1;
  max-height: 50px;
  max-width: 25%;
}
#totalprice{
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  max-lines: 1;
  max-height: 50px;
  max-width: 50%;

}

#chosen-logo{
    display: inline-block;
    height: 1fr;
    -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  max-lines: 1;
  max-height: 50px;
  max-width: 25%;

}

#background {
   z-index: -1;
   color: #e9e9e9;
  text-transform: uppercase;
  font-size: 400%;
  font-stretch: expanded;
  font-weight: bold;
  

}

[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}





</style>