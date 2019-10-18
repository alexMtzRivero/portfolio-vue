<template>
<div class="wrap">


  <div class="cv">
    <!-- <button @click="print">print</button> -->
    <div id="presentation">
      <div class="intro">
        <h1>{{info.name}}</h1>
        <h2>{{info.post}}</h2>
        <h3>{{info.introduction}}</h3>
         <img src="../../assets/profile.png" alt="">
      </div>
     <div class="side-info">
        <div class="personal-info">
            <ul>
              <li v-for="name in Object.keys(info.personalInformation)" :key="name"><b>{{name}}</b> <br>{{info.personalInformation[name]}}<br><br><br></li>
            </ul>
        </div>
        <div class="central-img">
       
        </div>
     </div>
      
       </div>
      <div id="main">
        <div class="column">
          <h1>Professional experience</h1>
          <div  v-for="job in info.profesionalExperience"  :key="job.tittle" class="default-list-item">
            <h1 class="post">{{job.tittle}}</h1>
            <h2 class="enterprise">{{job.enterprise}}</h2>
            <div class="date">{{job.timeBegin}}-{{job.timeEnd}}</div>
            <div class="place">{{job.place}}</div>
            <div class="description">{{job.description}}</div>
            <div class="tecnologies">(tecnologies)</div>
          </div> 
           <h1>Skills</h1>
          <ul>
            <li v-for="skill in info.skills" :key="skill">{{skill}}</li>
          </ul>
           <h1>Education</h1>
          <div  v-for="school in info.education"  :key="school.diploma" class="default-list-item">
            <h2 class="diploma">{{school.diploma}}</h2>
            <h3 class="school">{{school.school}}</h3>
            <div class="date">{{school.timeBegin}}-{{school.timeEnd}}</div>
          </div> 
        </div>
        <div class="column">
         
          <h1>Personal projects</h1>
           <div  v-for="pp in info.personalProjects"  :key="pp.name" class="default-list-item">
            <h1 class="tittle">{{pp.name}}</h1>
            <div class="date">{{pp.timeBegin}}-{{pp.timeEnd}}</div>
            <div class="description">{{pp.description}}</div>
            <div class="tecnologies">{{pp.skills}}</div>
          </div> 
         
          <h1>Programig lenguages</h1>
          <ul>
            <li v-for="pl in info.programingLenguages" :key="pl.name">{{pl.name}}--{{pl.level}}</li>
          </ul>
          <h1>Interest</h1>
           <ul>
            <li v-for="inter in info.interest" :key="inter">{{inter}}</li>
          </ul>
          <h1>Achivement</h1>
          <ul>
            <li v-for="achivement in info.achivements" :key="achivement">{{achivement}}</li>
          </ul>
        </div>
     
  </div>
  </div>
  </div>
</template>

<script>
const   INFO = require("./data.json");
export default {
  name: 'CV',
  components:{

  },
  props: {


  },
  data(){
    return{
      info:{"personalInformation":{}}
    }
  },
  methods:{
      print: function(){
        window.print();
      }
  },
  // on create
  mounted(){
    console.log(INFO);
    this.info = INFO;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  width: 100%;
  background: #F2F2F2;
}
.home{
background: #F2F2F2
}
.cv{
   background: #f2f2f2;
    color: #403433;
   width: 600px;
   margin:auto;  
}

#presentation{
  background: rgb(110,145,95);
  background: linear-gradient(33deg, rgba(110,145,95,1) 0%, rgba(2,89,73,1) 100%); 
  color:#f2f2f2;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2em;
  border-radius: 20px 20px 0px 0px;
}
#main{
   display: flex;
    padding: 1em;
    margin: 0 1em ;
}
img{
  width: 50%;
  height: auto;
  margin: auto 0;
  border-radius: 50%;
  border: solid .4rem rgba(0, 0, 0, 0.438);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 
}
.personal-info li{
  display: inline;
}
.side-info{
  margin: 30px 0px;
}
.intro{
   width: 50%;
}
.side-info{
  width: 50%;
}
.personal-info{
   width: 100%;
   text-align: right;
}
.central-img{
  width: 100%;
  text-align: center
}
.column{
   width: 50%;
   padding: 1em;
   border-left: solid .2rem #403433;
}
#main h1{
  color:#08A689;
}
#main h2{
   color:#08A689;
}
#main h3{
  color: #403433;
}
ul{
  display:flexbox;
  padding-left: 0px;
}
#main li{
  background:#08A689;
  color: #F2F2F2;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  width: auto;
  display: inline-block;
}
@media screen and (max-width: 600px){
  .cv{
   
   width: 100%; 
}

  #main{
   display:block;
    padding: 1em;
    margin: 0 1em ;
  }
  .column{
      width: 100%;
  }
  #presentation{
  display: block;
  }
  .intro{
   width: 100%;
}
.side-info{
  width: 100%;
}
}

</style>
