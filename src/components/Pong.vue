<template>
  <div class="pong">
    
      <svg  @mouseup="player.clicked = false" @mousemove="tapInPlayer">

         <foreignObject 
                :x ='enemy.x/2'
                :y ='0'
                width = 150
                height = 150>
          <h1>{{player.points}}:{{enemy.points}}</h1>
      </foreignObject>
        
        <rect  ref="ball" :x="ball.x-10" :y="ball.y-10" :width ='ball.r' :height ='ball.r' fill="white"></rect>

         <rect  ref="player"
                :x="player.x" 
                :y="player.y"  
                :width="player.width" 
                :height="player.height"
                fill="white"
               v-touch:moving="tapInPlayer"
               @mousedown="player.clicked = true"
               >
         </rect>
          <rect  ref="enemy" :x="enemy.x" :y="enemy.y"  :width="enemy.width" :height="enemy.height" fill="white"></rect>
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
      vSpeed : 5,
      x : 20,
      y : 20,
      r: 20,
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
        speed: 0.1
     }
    }
  },
  methods:{
      step:function(){
        var time = this.ballBehavior();
        this.enemyBehavior();
        this.$forceUpdate();
        setTimeout(()=>{this.step()}, 20+time);
      },
      enemyBehavior:function(){
        this.enemy.y += this.enemy.speed * (this.ball.y - (this.enemy.y+this.enemy.height/2))
      },
      ballBehavior:function(){
        var time = 0;
        // BOUNCE IN enemy
        if(this.ball.x < this.enemy.x + this.enemy.width &&
             this.ball.x > this.enemy.x  && 
            this.ball.y > this.enemy.y && 
            this.ball.y < this.enemy.y+ this.enemy.height ){

            this.ball.hSpeed*= -1.1;
           
        }
         if(this.ball.x >= window.innerWidth){
           
           this.player.points++
           this.ball.hSpeed = -5;
           this.ball.x = window.innerWidth/2;
           time = 1000;
        }
        // BOUNCE IN player
          if(this.ball.x < this.player.x + this.player.width &&
             this.ball.x > this.player.x  && 
            this.ball.y > this.player.y && 
            this.ball.y < this.player.y+ this.player.height ){
            this.ball.hSpeed*= -1.1;
        
        }
        if(this.ball.x <= 0){
           this.enemy.points++
           this.ball.hSpeed = 5;
           this.ball.x = window.innerWidth/2;
           time = 1000;
        }

        //BOUNCE IN floor and roof
         if(this.ball.y > window.innerHeight){
          this.ball.vSpeed*= -1;
        
        }
          if(this.ball.y < 0){
          this.ball.vSpeed*= -1;
    
        }
        //UPDATE POSITION
        this.ball.x += this.ball.hSpeed;
        this.ball.y += this.ball.vSpeed;
        return time;
      },
      tapInPlayer(event){
       // console.log("tap in player",event);
       if(event.touches)
        this.player.y = event.touches[0].clientY;
       else if(this.player.clicked)
        this.player.y = event.clientY - (this.player.height/2);
      }
  },
  // on create
  mounted(){
   // console.log(this.ball,this.$refs);
    this.$refs.player.addEventListener("touchstart", this.tapInPlayer);
    this.step();  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pong{
background: black;
}
svg{
  background:black;
  width: 100vw;
  height: 100vh;
}
h1{
  color:white;
}
</style>
