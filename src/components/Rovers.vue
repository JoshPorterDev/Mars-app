<template>
  <div class="Rovers">
    <h1 class="heading">Current and Former Rovers</h1>
    <div v-if="rovers.length">
      <div class="container">
        <div class="box" v-for="rover in rovers" :key="rover.id">
            <h1 class="roverName">{{ rover.name }}</h1>
            <h1>Launch date: <span class="roverInfo">{{ rover.launch_date }}</span></h1>
            <h1>Landing date: <span class="roverInfo">{{ rover.landing_date }}</span></h1>
            <h1>Status: <span class="roverInfo">{{ rover.status }}</span></h1>
            <h1>Total sols: <span class="roverInfo">{{ rover.max_sol }}</span></h1>
            <h1>Last active date: <span class="roverInfo">{{ rover.max_date }}</span></h1>
            <h1>Photos taken: <span class="roverInfo">{{ rover.total_photos }}</span></h1>
        </div>
      </div>
    </div>
    <h1 v-else>No rovers</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Rovers",
  data() {
    return {
      rovers: [],
    };
  },

  created() {
    console.log("Created");
    axios
      .get("https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY")
      .then((response) => {
        console.log(response.data);
        response.data.rovers.forEach((rover) => {
          let roverObject = {
            id: rover.id,
            name: rover.name,
            status: rover.status,
            launch_date: rover.launch_date,
            landing_date: rover.landing_date,
            max_sol: rover.max_sol,
            max_date: rover.max_date,
            total_photos: rover.total_photos,
          };
          this.rovers.push(roverObject);
        });
      });
  },
};
</script>

<style>
.heading {
    font-size: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  padding: 1rem;
}

.box {
  min-height: 140px;
  background-color: #2e455c;
  /* padding-top: 20px; */
  padding-left: 10px;
  padding-right: 10px;
  margin: 30px;
  border-style: solid;
  border-width: 5px;
  border-color: #993333;
  border-radius: 30px;
}

.box h1 {
    margin-top: 40px;
}

.roverName {
  color: #993333;
  text-align: center;
  margin: 20px;
}

.roverInfo {
    color: #993333;
}

#spirit {
  background: brown;
}

#curriosity {
  background-color: chocolate;
}

#oppritunity {
  background-color: darkgreen;
}
</style>
