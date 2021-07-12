<template>
  <div class="wrap">
    <div class="upBar">
      <img
        class="flag"
        src="@/assets/france.png"
        alt="france flag"
        @click="changeInfo('french')"
      />
      <img
        class="flag"
        src="@/assets/mexico.png"
        alt="mexico flag"
        @click="changeInfo('spanish')"
      />
      <img
        class="flag"
        src="@/assets/united-kingdom.png"
        alt="UK flag"
        @click="changeInfo('english')"
      />
      <!-- <button @click="print()">Print</button> -->
    </div>
    <div class="cv">
      <div id="presentation">
        <div class="intro">
          <ItemHeader big>{{ info.name }}</ItemHeader>
          <h2>{{ info.post }}</h2>
          <h3>{{ info.introduction }}</h3>
        </div>
        <div class="side-info">
          <div class="personal-info">
            <ul>
              <li v-for="name in Object.keys(personalInformation)" :key="name">
                <b class="personal-info-name">{{ name }}</b> <br />{{
                  personalInformation[name]
                }}<br /><br />
              </li>
            </ul>
          </div>
          <img src="@/assets/me.jpeg" alt="" />
        </div>
      </div>
      <div id="main">
        <div class="column">
          <MHeader>{{ info.headers.profesionalExperience }}</MHeader>
          <div
            v-for="job in info.profesionalExperience"
            :key="job.tittle"
            class="default-list-item"
          >
            <ItemHeader>{{ job.tittle }}</ItemHeader>
            <h3 class="enterprise">{{ job.enterprise }}</h3>
            <div class="date">{{ job.timeBegin }}-{{ job.timeEnd }}</div>
            <div class="place">{{ job.place }}</div>
            <div class="description">{{ job.description }}</div>
            <div class="skillContainer">
              <div v-for="skil in job.skills" :key="skil" class="tecnologies">
                {{ skil }}
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <MHeader right>{{ info.headers.personalProjects }}</MHeader>
          <div
            v-for="pp in info.personalProjects"
            :key="pp.name"
            class="default-list-item"
          >
            <ItemHeader>{{ pp.name }}</ItemHeader>
            <div class="date">{{ pp.timeBegin }}-{{ pp.timeEnd }}</div>
            <div class="description">{{ pp.description }}</div>
            <div class="skillContainer">
              <div class="tecnologies">{{ pp.skills }}</div>
            </div>
          </div>
          <MHeader right>{{ info.headers.programingLenguages }}</MHeader>
          <ul>
            <li class="pill" v-for="pl in programingLenguages" :key="pl.name">
              {{ pl.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="black-apendice">
        <div class="column">
          <MHeader>{{ info.headers.education }}</MHeader>
          <div
            v-for="school in info.education"
            :key="school.diploma"
            class="default-list-item"
          >
            <ItemHeader>{{ school.diploma }}</ItemHeader>
            <h3 class="school">{{ school.school }}</h3>
            <div class="date">{{ school.timeBegin }}-{{ school.timeEnd }}</div>
          </div>
          <MHeader>{{ info.headers.skills }}</MHeader>
          <ul>
            <li class="pill" v-for="skill in info.skills" :key="skill">
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="column">
          <MHeader right>{{ info.headers.achivements }}</MHeader>

          <div
            class="achivement"
            v-for="achivement in info.achivements"
            :key="achivement"
          >
            <div class="decoration"></div>
            {{ achivement }}
          </div>

          <MHeader right>{{ info.headers.interest }}</MHeader>
          <ul>
            <li class="pill" v-for="inter in info.interest" :key="inter">
              {{ inter }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const INFO = require("./data.json");
import MHeader from "./MHeader";
import ItemHeader from "./ItemHeader";
export default {
  name: "CV",
  components: {
    MHeader,
    ItemHeader,
  },
  props: {},
  data() {
    return {
      info: {
        personalInformation: {},
      },
      printing: false,
      programingLenguages: [],
    };
  },
  methods: {
    print: function () {
      window.print();
    },
    changeInfo(input) {
      this.info = INFO[input];
    },
  },
  // on create
  mounted() {
    this.info = INFO.english;
    this.programingLenguages = INFO.programingLenguages;
    this.personalInformation = INFO.personalInformation;
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

$black: #070000;
$lblack: #282828;
$yellow: #d9dd0b;

.flag {
  width: 40px;
  margin: 10px;
}

.wrap {
  width: 100%;
  background: #ffffff;
}

.wrap {
  font-size: smaller;
}

.home {
  background: #f2f2f2;
}

.default-list-item {
  margin-bottom: 20px;
}

.cv {
  background: #f2f2f2;
  color: #403433;
  margin: auto;
  font-family: "Montserrat", sans-serif;
}

.description {
  text-align: justify;
  font-weight: bold;
  margin: 5px;
  margin-left: 30px;
  letter-spacing: 1px;
  color: #292323;
}

.skillContainer {
  display: flex;
  flex-wrap: wrap;
}

.tecnologies {
  margin-right: 5px;
}

button {
  background-color: #0093e9;
  color: #f2f2f2;
  border-radius: 10px;
  width: 4em;
  height: 2em;
  border: none;
  position: absolute;
  font-size: medium;
  margin: 1em;
}

.cv #presentation {
  color: $black;
  display: flex;
  padding: 2em;
}

#main {
  display: flex;
  padding: 1em;
  margin: 0 1em;
}

.cv img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  left: -117px;
  margin: -60px 0 0 0;
}

.personal-info li {
  display: inline;
}
.enterprise {
  margin-left: 0;
}
.intro {
  width: 50%;
}

.side-info {
  margin-top: 70px;
  width: 50%;
  display: flex;
}

.personal-info {
  position: relative;
  display: flex;
  width: 90%;
  background: $yellow;
  padding: 16px;
  border-radius: 0 0 20px 20px;
}

.column {
  width: 50%;
  padding: 1em;
}

#presentation h2 {
  margin: 10px 30px;
  font-size: large;
  text-align: right;
}

#presentation h3 {
  margin: 10px 0px;
  font-size: medium;
  font-weight: 300;
}

#main h2 {
  color: $black;
  margin: 4px;
}

#main h3 {
  color: $lblack;
  margin: 0px;
}

ul {
  display: flexbox;
  padding-left: 0px;
}

.pill {
  background: $yellow;
  color: $black;
  margin: 2px;
  padding: 10px;
  border-radius: 10px;
  width: auto;
  display: inline-block;
}
.black-apendice {
  display: flex;
  padding: 1em;
  border-radius: 20px 20px 0 0;
  background: $lblack;
  .school {
    color: white;
  }
  .date {
    color: white;
  }
  .achivement {
    color: white;
    margin: 15px 0px;
    font-size: medium;
  }
  .decoration {
    background: #d9dd0b;
    position: relative;
    top: 10px;
    left: -10px;
    width: 40px;
    height: 10px;
    z-index: -1;
    border-radius: 3px 3px 0 0;
  }
}
.personal-info-name {
  letter-spacing: 3px;
  font-size: medium;
}

@page {
  size: auto;
  margin: 0mm;
}

@media print {
  .upBar {
    display: none;
  }

  .wrap {
    font-size: smaller;
  }

  #presentation {
    background-color: #0093e9 !important;
    -webkit-print-color-adjust: exact;
    color: #f2f2f2;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0em 2em;
  }

  img {
    width: 25%;
    height: auto;
    margin: auto 0;
    border-radius: 50%;
    border: solid 0.4rem rgba(0, 0, 0, 0.438);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #main h2 {
    font-size: small;
    color: #00d2e8;
  }

  #main h3 {
    font-size: smaller;
    color: #00d2e8;
  }

  #main li {
    color: #f2f2f2;
    margin: 3px;
    padding: 3px;
    width: auto;
    display: inline-block;
    -webkit-print-color-adjust: exact;
  }
}

@media screen and (max-width: 700px) {
  .cv {
    width: 100%;
    overflow: hidden;
  }

  #main {
    display: block;
    padding: 1em;
    margin: 0 1em;
  }
  .black-apendice {
    display: block;
  }

  .column {
    width: 100%;
  }

  .cv #presentation {
    display: block;
  }

  .intro {
    width: 100%;
  }

  .side-info {
    width: 100%;
  }
}
</style>