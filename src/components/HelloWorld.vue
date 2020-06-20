<template>
  <div class="main" v-on:click="nextText()">
    <h1 v-for='text in shown' :key="text"> <span>me@terminal:-$</span> {{text}} </h1>
     <div v-if="index == text.length-1">
        <router-link to="/CV"> My Cv </router-link>
      <a target="_blank" href="https://linkedin.com/in/alejandro-martinez-rivero-116836120"> LinkedIn </a>
      <a target="_blank" href="https://github.com/alexMtzRivero"> Github </a>
       <router-link to="/Pong"> play pong </router-link>
     </div>
    <h1><span>me@terminal:-$</span> {{temp}}</h1>
    
     
    <!-- <h1 class="options" v-for="(option,ind) in options" :key="ind"></h1> -->
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
        text:['hello i am Alex.',
              'I like to describe myself as a problem solver that uses programming as a tool.',
              'I have experience in creating mobile applications and websites, therefore, java and JavaScript are listed in my skills. I have also worked for personal and school projects with Vue.js, Python, c++ and Node.js among others.',
              'Sorry but I’m currently  working in my portfolio',
              'I can give you 3 options' , 
              '1.- I can show you my curriculum and LinkedIn account ',
              '2.- you can see my git account ',
              '3.- Or you can play pong while I finish this website' ,'ls',
              ''
              ],
        
        index:0,
        writing: false,
        temp:""
    }
  },
  methods:{
        nextText: function(){
          if(!this.writing && this.index < this.text.length-1  ){
            this.writing = true;
            this.typeText(this.text[this.index],100);
          }
          else{
                    this.writing = false;
                  
                  this.temp = ""
          }
        },
        typeText:function(text,speed){
          if (text.length>0 && this.writing) {
             this.temp+= text.slice(0,1);
           setTimeout(()=>{this.typeText(text.slice(1,text.length),speed)}, Math.floor(Math.random()*200));
            }
          else {
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
    width: 100vw;
    height: 100vh;
    background: #2d0922;
    color: white;
  }
  a{
    color:#6493c3;
    font-size: large;
    margin: 0 10px;
  }
  h1{
    margin: 0.15em 0;
    font-size: large;
  }
  h2{
    position: absolute;
    bottom: 1em;
    text-align: end;
    font-size:large;
  }
  span{
    color:rgb(76, 255, 60);
  }
</style>
