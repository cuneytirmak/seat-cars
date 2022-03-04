<template>
<meta name="viewport" content="width=device-width, initial-scale=1">

  <div class="summary">
    <div id="container" class="col-12 col-s-12">
      <div id="product">
      <h1 id="background"> {{model}} </h1>
        <div id="firstcol" class="col-6 col-s-6">
          <div id="col">
            <img id="chosen-color" alt="chosen logo" class=".col-7 col-s-7" height="300" :src="require(`@/assets/${model}-${chosencolor}.png`)">
          </div>
        </div>
        <div id="secondcol" class="col-6 col-s-6">
          <div id="info">
            <span><b>MODEL</b></span><br>
            <span id="capitalize"> {{model}}</span>
            
          </div>
          <div id="info">
            <span><b>COLOR</b><br></span>
            <span id="capitalize">{{chosencolor}}</span>
          </div>
          <div id="info">
            <span><b>ACCESSORIES</b><br></span>
            <ul id="grid-wrapper" >
            <li v-for="item in selectedAcc" :key="item" class="acc-item">
              {{item}}
            </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="total" class="col-12 col-s-12">
          <img id="chosen-logo" class=".col-1 col-s-1" alt="chosen-logo"  :src="require(`@/assets/${model}-${chosencolor}.png`)">
          <div id="totalprice"  class=".col-2 col-s-2"> <span><b>Total  {{price}}  TL </b></span></div>
          <a href="#" class=".col-1 col-s-1" id="totalbutton" >BUY NOW</a> 
      </div>
    </div>
  </div>
</template>



<script>
// @ is an alias to /src


export default {
  name: 'SummaryView',
  components: {
  },
  data(){return{
  price:this.$route.params.price,
  model:this.$route.params.model,
  chosencolor:this.$route.params.chosencolor,
  selectedAcc:this.$route.params.selectedAcc}}
}

</script>

<style scoped>



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
#product:after {
    margin: auto;
    width: 50%;
    padding: 25px;
    display: table;
    clear:both;
    content: "";



}

#firstcol {
  float: left;
    border-radius: 25px;


}

#secondcol {
  float: left;
  text-align: left;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    
    
}
#info{margin-bottom:5%}


#clear {
    clear: both;
}
span {font-size: 13px;}

#background {
   z-index: -1;
   color: #e9e9e9;
  text-transform: uppercase;
  font-size: 400%;
  font-stretch: expanded;
  font-weight: bold;

}
#capitalize{
  text-transform: capitalize;
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