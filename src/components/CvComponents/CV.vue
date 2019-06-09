<template>
  <div class="cv">
    <div id="presentatin">
      <div class="intro">
        <h1>{{info.name}}</h1>
        <h2>{{info.post}}</h2>
        <h3>{{info.introduction}}</h3>
      </div>
      <div class="central-img">
      <img src="" alt="">
      </div>
      <div class="personal-info">
          <ul>
            <li v-for="name in Object.keys(info.personalInformation)" :key="name">{{name}}-{{info.personalInformation[name]}}</li>
          </ul>
      </div>
       </div>
      <div id="main">
        <div class="column">
          <div  v-for="job in info.profesionalExperience"  :key="job.tittle" class="default-list-item">
            <h1 class="post">{{job.tittle}}</h1>
            <h2 class="enterprise">{{job.enterprise}}</h2>
            <div class="date">{{job.timeBegin}}-{{job.timeEnd}}</div>
            <div class="place">{{job.place}}</div>
            <div class="description">{{job.description}}</div>
            <div class="tecnologies">(tecnologies)</div>
          </div> 
        </div>
        <div class="column">
          <div  v-for="school in info.education"  :key="school.diploma" class="default-list-item">
            <h1 class="diploma">{{school.diploma}}</h1>
            <h2 class="school">{{school.school}}</h2>
            <div class="date">{{school.timeBegin}}-{{school.timeEnd}}</div>
          </div> 
           <div  v-for="pp in info.personalProjects"  :key="pp.name" class="default-list-item">
            <h1 class="tittle">{{pp.name}}</h1>
            <div class="date">{{pp.timeBegin}}-{{pp.timeEnd}}</div>
            <div class="description">{{pp.description}}</div>
            <div class="tecnologies">{{pp.skills}}</div>
          </div> 
          <ul>
            <li v-for="skill in info.skills" :key="skill">{{skill}}</li>
          </ul>
          <ul>
            <li v-for="pl in info.programingLenguages" :key="pl.name">{{pl.name}}--{{pl.level}}</li>
          </ul>
           <ul>
            <li v-for="inter in info.interest" :key="inter">{{inter}}</li>
          </ul>
          <ul>
            <li v-for="achivement in info.achivements" :key="achivement">{{achivement}}</li>
          </ul>
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

</style>
