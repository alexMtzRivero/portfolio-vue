<template>
  <div class="main" v-on:click="nextText()">
    <h1 v-for='text in shown' :key="text"> <span>me@terminal:-$</span> {{text}} </h1>
    <h1><span>me@terminal:-$</span> {{temp}}</h1>
    <h1 class="options" v-for="(option,ind) in options" :key="ind"></h1>
    <h2>click to continue</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
   props: {
  },
  data(){
    return{
        shown:[],
        text:['hello i am Alejandro ;)',
              'I have a problem',
              'I dont know what style to use for this portfolio',
              'So i will let you decide :)'],
        
        index:0,
        writing: false,
        temp:""
    }
  },
  methods:{
        nextText: function(){
          if(!this.writing){
            this.writing = true;
            this.typeText(this.text[this.index],100);
          }
        },
        typeText:function(text,speed){
          if (text.length>0) {
             this.temp+= text.slice(0,1);
           setTimeout(()=>{this.typeText(text.slice(1,text.length),speed)}, Math.floor(Math.random()*200));
            }
          else{
                  this.shown.push(this.text[this.index]);
                  if (this.index < this.text.length-1 ){
                    this.index++;
                    this.writing = false;
                  }
                  this.temp = ""
          }
        }
  },
  // on create
  mounted(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    margin: 1em;
    width: 100%;
    height: 100%;
  }
  h1{
    margin: 0.15em 0;
  }
  h2{
    position: absolute;
    bottom: 1em;
    text-align: end;
  }
  span{
    color:rgb(76, 255, 60);
  }
</style>
