<template>
<meta name="viewport" content="width=device-width, initial-scale=1">

  <div class="accessories">
    <div id="container" class="col-9 col-s-9">
      <div id="menu">
        <div id="header">
          <p>Seçtiğin araca ait özellikler,<br> konforunu ve yaşam stilini belirler</p>
        </div>
        <div id="grid-wrapper" class="col-9 col-s-9">
          <div v-for="item in aronaAcc" :key="item.name" class="acc-item">
            <div id="accname"> {{item.name}} </div>
          <div id="accprice"> {{item.accprice}}  TL </div>
          <input class="selectacc" type="checkbox" :value="item.id"  v-model="selected" @change="myMethod">
        </div>
      </div>
  
    <div id="clear">
    </div>
    </div>
    </div>
  <div id="total" class="col-12 col-s-12">
        <img id="chosen-logo"  alt="chosen-logo" class=".col-1 col-s-1" :src="require(`@/assets/${model}-${chosencolor}.png`)">
        <div id="totalprice" class=".col-2 col-s-2"> <span><b>Total <br> {{price}}  TL  </b></span></div>
        <button href="summary" class=".col-1 col-s-1" v-on:click="sendAcc(price,chosencolor,model,selectedAcc)" id="totalbutton">SUMMARY </button> 
  </div>
  </div>
</template>



<script>
// @ is an alias to /src

export default {
  name: 'AcessoriesView',
  components: {
  },
  data(){return{
  price:this.$route.params.price,
  model:this.$route.params.model,
  chosencolor:this.$route.params.chosencolor,
  selected:[],
  selectedAcc:[],
  selectedAccPrice:[],
  sumSelectedAcc:0,
  sum:0,
  aronaAcc:[{id:0,name:'Pedals, Desire Red',accprice:750},{id:1,name:'Arona Free Sync Pack Easy Jet',accprice:13700},{id:2,name:"Maintenance Program Update",accprice:1500},{id:3,name:'Arona Free Sync Pack Easy Jet',accprice:500},{id:4,name:'Arona Free Sync Pack Easy Jet',accprice:250},{id:5,name:'Side mouldings',accprice:500},{id:6,name:'Sport Version stainless steel side sill',accprice:1000},{id:7,name:'Pedals, Desire Red',accprice:750},{id:8,name:'Touch-up pencil Desire Red',accprice:500},{id:9,name:'Carbon Fibre Spoiler',accprice:2000},{id:10,name:'Black leather armrest',accprice:500},{id:11,name:'Rear mudflaps',accprice:1000},{id:12,name:'Safety dog harness - Size S/M/L/X',accprice:250},{id:13,name:'18" alloy wheel Sport Black',accprice:1500},{id:14,name:'Aerodynamic kit – Rear diffuser',accprice:1000}],
  ibizaAcc:[{id:0,name:'Pedals, Desire Red',accprice:750},{id:1,name:'Ibiza Free Sync Pack Easy Jet',accprice:13700},{id:2,name:'Maintenance Program Update',accprice:500},{id:3,name:'Ibiza Free Sync Pack Easy Jet',accprice:1000},{id:4,name:'Ibiza Free Sync Pack Easy Jet',accprice:250},{id:5,name:'18" alloy wheel Sport Black',accprice:1500},{id:6,name:'Aerodynamic kit – Rear diffuser',accprice:1000},{id:7,name:'Pedals, Desire Red',accprice:750},{id:8,name:'Extendable ski & snowboard rack',accprice:1500},{id:9,name:"18'' diamond cut aluminium alloy wheel",accprice:1500},{id:10,name:'Foot rest, Desire Red',accprice:500},{id:11,name:'Safety dog harness - Size S/M/L/X',accprice:250},{id:12,name:'Side mouldings',accprice:500},{id:13,name:'Sport Version stainless steel side sill',accprice:1000},{id:14,name:'Pedals, Desire Red',accprice:750},{id:15,name:'Touch-up pencil Desire Red',accprice:500}]}
  },

  methods:{
    
    myMethod () {
    this.selectedAcc.splice(0)
    this.selectedAccPrice.splice(0)
    for (var i = 0; i < this.selected.length; i++) { 
      this.selectedAccPrice.push(this.aronaAcc[this.selected[i]].accprice)
      this.selectedAcc.push(this.aronaAcc[this.selected[i]].name)

    }
    this.sum=this.selectedAccPrice.reduce((partialSum, a) => partialSum + a, 0)
    this.price=parseInt(this.$route.params.price)+parseInt(this.sum)},
    sendAcc(price,chosencolor,model,selectedAcc){
      this.$router.push({name:'Summary',params: {price,chosencolor,model,selectedAcc}})

    }

  }

}

</script>

<style scoped>


#container {
  margin: auto;
  width: 50%;
  padding: 10px;
  opacity: 1;
  
}
#menu{
overflow: hidden;}




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


/* Clear floats after the columns */
.gridrow:after {
  content: "";
  display: table;
}

#grid-wrapper{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  overflow-y: scroll ;
  height: 400px;
  width: 100%;
  grid-gap: 5px;

  
  

}

.acc-item{
padding: 10%;
background-color: #292929;
color:lightgray;
height: 200px;
border-radius: 25px;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


}

.acc-item :active{
padding: 10%;
background-color: white;
color:black;


}

.acc-item #accprice{
  margin-top: 10%;
}

.acc-item #accname{
  margin-top: 10%;
}

.selectacc{
  margin-top: 10%;

  width: 10%;
  height: 10%;
  background-color: #eee;
  border-radius: 50%;

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

