<template>
  <div class="">
    
      <svg @mousemove="movePlayer($event)"  @mouseup="player.clicked = false">

         <foreignObject 
                :x ='0'
                :y ='0'
                width = 100
                height = 150>
          <h1>{{player.points}}:{{enemy.points}}</h1>
      </foreignObject>
          <circle  ref="ball" :cx="ball.x" :cy="ball.y" :r ='ball.r' ></circle>

         <rect  ref="player"
                :x="player.x" 
                :y="player.y"  
                :width="player.width" 
                :height="player.height"
                @mousedown="player.clicked = true"
               >
         </rect>
          <rect  ref="enemy" :x="enemy.x" :y="enemy.y"  :width="enemy.width" :height="enemy.height"></rect>
      </svg>

  </div>
</template>

<script>

export default {
  name: 'name',
  components:{

  },
  props: {


  },
  data(){
    return{
     ball:{
      hSpeed : 10,
      vSpeed : 10,
      x : 20,
      y : 20,
      r: 10,
     },
     player:{
        y:50,
        x:10,
        speed: 10,
        points: 0,
        clicked : false,
        height : 100,
        width: 20,
     },
     enemy:{
        y :50,
        points:0,
        x: window.innerWidth-50,
        height : 100,
        width: 20,
     }
    }
  },
  methods:{
      step:function(){
        this.ballBehavior();
        this.enemyBehavior();
        this.$forceUpdate();
        setTimeout(()=>{this.step()}, 20);
      },
      enemyBehavior:function(){
        this.enemy.y = this.ball.y -(this.enemy.height/2)
      },
      ballBehavior:function(){
        
        // BOUNCE IN THE EDGES
        if(this.ball.x < this.enemy.x + this.enemy.width &&
             this.ball.x > this.enemy.x  && 
            this.ball.y > this.enemy.y && 
            this.ball.y < this.enemy.y+ this.enemy.height ){

            this.ball.hSpeed*= -1;
           
        }
         if(this.ball.x >= window.innerWidth){
            this.ball.hSpeed*= -1;
           this.player.points++
        }
          if(this.ball.x < this.player.x + this.player.width &&
             this.ball.x > this.player.x  && 
            this.ball.y > this.player.y && 
            this.ball.y < this.player.y+ this.player.height ){
          this.ball.hSpeed*= -1;
        
        }
        if(this.ball.x <= 0){

            this.ball.hSpeed*= -1;
           this.enemy.points++
        }

         if(this.ball.y > window.innerHeight){
          this.ball.vSpeed*= -1;
        
        }
          if(this.ball.y < 0){
          this.ball.vSpeed*= -1;
    
        }
        //UPDATE POSITION
        this.ball.x += this.ball.hSpeed;
        this.ball.y += this.ball.vSpeed;
      },
      movePlayer(event){
        if(this.player.clicked)
         this.player.y = event. clientY;
      }
  },
  // on create
  mounted(){
    console.log(this.ball,this.$refs);
    this.step();  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
circle{
  background: red;
}
svg{
  background: rgb(228, 243, 213);
  width: 100vw;
  height: 100vh;
}
</style>
