<template>
  <div class="photo">
    <div v-if="photos.length">
      <div v-for="photo in photos" :key="photo.id">
        <img :src="photo.img" :alt="photo.img" />
        <h1>Taken by: {{ photo.rover }}</h1>
      </div>
    </div>
    <h1 v-else>No photos</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Photo",
  data: function() {
    return {
      key: "AxdyS6wqIInudM5ueiG1aVQciB44EBWQUEah2skM",
      info: null,
      photos: [],
    };
  },

//   created()
//   {
//       console.log("Created")
//           axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=AxdyS6wqIInudM5ueiG1aVQciB44EBWQUEah2skM')
//           .then(response => {
//               console.log(response.data)
//               response.data.photos.forEach(photo => {
//                   let photoObject = {
//                       'id': photo.id,
//                       'sol': photo.sol,
//                       'date': photo.earth_date,
//                       'img': photo.img_src,
//                       'rover': photo.rover.name,
//                   }
//                   this.photos.push(photoObject);
//               })
//           })
//   }
};
</script>

<style>
img {
  width: 500px;
  height: 500px;
}
</style>
