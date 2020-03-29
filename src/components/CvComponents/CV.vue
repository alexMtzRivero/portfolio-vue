<template>
<div class="wrap">

<div class='upBar'>
  <img class="flag" src="../../assets/france.png" alt="france flag" @click="changeInfo('french')">
  <img class="flag" src="../../assets/mexico.png" alt="mexico flag"  @click="changeInfo('spanish')">
  <img class="flag" src="../../assets/united-kingdom.png" alt="UK flag"  @click="changeInfo('english')">
  <button @click="print()">Print</button>
</div>
  <div class='cv'>
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
          <h1>{{info.headers.profesionalExperience}}</h1>
          <div  v-for="job in info.profesionalExperience"  :key="job.tittle" class="default-list-item">
            <h2 class="post">{{job.tittle}}</h2>
            <h3 class="enterprise">{{job.enterprise}}</h3>
            <div class="date">{{job.timeBegin}}-{{job.timeEnd}}</div>
            <div class="place">{{job.place}}</div>
            <div class="description">{{job.description}}</div>
            <div v-for="skil in job.skils"  :key="skil" class="tecnologies">{{skil}}</div>
          </div> 
           <h1>{{info.headers.skills}}</h1>
          <ul>
            <li v-for="skill in info.skills" :key="skill">{{skill}}</li>
          </ul>
          <h1>{{info.headers.interest}}</h1>
           <ul>
            <li v-for="inter in info.interest" :key="inter">{{inter}}</li>
          </ul>
        </div>
        <div class="column">
         
          <h1>{{info.headers.personalProjects}}</h1>
           <div  v-for="pp in info.personalProjects"  :key="pp.name" class="default-list-item">
            <h2 class="tittle">{{pp.name}}</h2>
            <div class="date">{{pp.timeBegin}}-{{pp.timeEnd}}</div>
            <div class="description">{{pp.description}}</div>
            <div class="tecnologies">{{pp.skills}}</div>
          </div> 
         
          <h1>{{info.headers.programingLenguages}}</h1>
          <ul>
            <li v-for="pl in info.programingLenguages" :key="pl.name">{{pl.name}}</li>
          </ul>
          <h1>{{info.headers.education}}</h1>
          <div  v-for="school in info.education"  :key="school.diploma" class="default-list-item">
            <h2 class="diploma">{{school.diploma}}</h2>
            <h3 class="school">{{school.school}}</h3>
            <div class="date">{{school.timeBegin}}-{{school.timeEnd}}</div>
          </div> 
          <h1>{{info.headers.achivements}}</h1>
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
      info:{"personalInformation":{}},
      printing :false
    }
  },
  methods:{
      print: function(){
        window.print();
      },
      changeInfo(input){
        this.info = INFO[input]
      }
  },
  // on create
  mounted(){
    this.info = INFO.english;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flag{
  width:40px;
  margin: 10px;
}
.wrap{
  width: 100%;
   background: #F2F2F2;
  background: linear-gradient(33deg, #00D2E8 0%, #F2F2F2 50%); 
}
.wrap{
  font-size: smaller;
}
.home{
background: #F2F2F2
}
.cv{
   background: #f2f2f2;
    color: #403433;
   width: 700px;
   margin:auto;  
}

 button{
   background-color: #0093E9;
   color:#f2f2f2;
   border-radius: 10px;
   width: 4em;
   height: 2em;
   border: none;
   position:absolute ;
   font-size: medium;
   margin: 1em;
 }
.cv #presentation{
  background: rgb(110,145,95);
  background: linear-gradient(33deg, #00D2E8 0%, #0093E9 100%); 
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
.cv img{
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
  color:#0093E9;
}
#main h2{
   color:#00D2E8;
}
#main h3{
  color: #00D2E8;
}
ul{
  display:flexbox;
  padding-left: 0px;
}
#main li{
  background:#0093E9;
  color: #F2F2F2;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  width: auto;
  display: inline-block;
}
@media print {
  .upBar{
  display: none;
  }
    .wrap{
    font-size: smaller;
  }
  #presentation{
    background-color: #0093E9 !important; 
    -webkit-print-color-adjust: exact; 
    color:#f2f2f2;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0em 2em;
  }
  img{
    width: 25%;
    height: auto;
    margin: auto 0;
    border-radius: 50%;
    border: solid .4rem rgba(0, 0, 0, 0.438);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  }
  #main h1{
    font-size: medium;
    color:#0093E9;
  }
  #main h2{
      font-size: small;
    color:#00D2E8;
  }
  #main h3{
    font-size: smaller;
    color: #00D2E8;
  }

  #main li{
    color: #f2f2f2;
    margin: 3px;
    padding: 3px;
    width: auto;
    display: inline-block;
    -webkit-print-color-adjust: exact; 
  }
}
@media screen and (max-width: 700px){
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
 .cv #presentation{
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
