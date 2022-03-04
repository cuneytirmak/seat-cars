<template>
<meta name="viewport" content="width=device-width, initial-scale=1">

  <div  id="container" class="col-12 col-s-12">
    <div class="grid-wrapper">
      <div v-for="item in models" :key="item.name" class="item-model">
      <h1 id="background"> {{item.name}} </h1>
      <img id="ibiza-logo" alt="ibiza logo" class=".col-9 col-s-6" height="250" :src="require(`@/assets/${item.name}-red.png`)">
      <p><b>{{item.price}}</b>'den başlayan <br>fiyatlarla</p>
      <button type="button" @click="getModel(item.name)" class="select">Select</button>
      </div>
    </div>
    <div id="total" class="col-12 col-s-12">
        <img id="chosen-logo" class=".col-1 col-s-1" alt="chosen-logo"  height="50" :src="require(`@/assets/${model}-red.png`)">
          <div id="totalprice" class=".col-2 col-s-2" > <span><b>Total {{price}}</b> <br> </span></div>
            <button type="button" class=".col-1 col-s-1" @click="sendModel(this.model,this.price)"  id="totalbutton">COLORS<i id="arrow right"></i></button>  
      </div>
    </div>
</template>


<script>


export default {


  name: 'PriceComponent',
  props: {
  },
  components:{},
     
data(){return{price:'',model:'ibiza',
  models:[{name:'ibiza',price:193500},{name:'arona',price:195500}],
}},

  methods: {
    sendModel(model,price){
      this.$router.push({name:'Colors',params: {model,price}})
    },

    getModel(e){
      if (e=='ibiza') {
         this.price=193500, this.model='ibiza'
         }  else if (e=='arona') {
           this.price=199500, this.model='arona'}}
        
},


  
}
</script>
<style scoped>

.grid-wrapper{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 5px;
  width: 100%;

}

#background {
   z-index: -1;
   color: #e9e9e9;
  text-transform: uppercase;
  font-size: 400%;
  font-stretch: expanded;
  font-weight: bold;
  

}

.select{background-color:black; 
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 12px;}

#models {
    margin: auto;
}
.item-model {
    float: left;
    opacity: 0.5;
    border-radius: 40%;
    box-shadow: 1px 1px 0px 0px #f2f2f2;

}


.item-model:hover{opacity: 1;}


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


#clear {
    clear: both;
}

/* For mobile phones: */
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