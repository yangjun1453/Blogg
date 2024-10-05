<template>
  <h1>My photo lists</h1>
  <div class="main">
    <div v-if="selectedCard" class="image-gallery">
      <h3>{{ selectedCard.title }}</h3>
      <div class="images">
        <img
          alt=""
          v-for="(img, index) in selectedCard.images"
          :key="index"
          :src="img"
        />
      </div>

      <button @click="clean">back</button>
    </div>
    <div v-else>
      <InfoCard
        v-for="(item, index) in cards"
        :key="index"
        :card="item"
        @click="select(item)"
      />
    </div>
  </div>
</template>

<script setup name="PhotoList">
import InfoCard from "./InfoCard.vue";
import assetImport from '../utils/assetImport';
import { ref } from "vue";
const BASE_URL =  process.env.NODE_ENV === 'production' ? 'https://yangjun1453.github.io/Blogg/' : new URL(import.meta.url).origin;

let cards = [
  {
    title: "Alpine Odyssey: Hiking Escapades",
    description:
      "Embark on a visual journey through the majestic mountains. Discover the thrill of hiking trails, the serenity of peaks, and the beauty of nature’s grandeur.",
    images: [
      assetImport("./group1/IMG_0647.JPG",BASE_URL),
      new URL("./group1/IMG_0648.JPG",BASE_URL).href,
      new URL("./group1/IMG_0649.JPG",BASE_URL).href,
      new URL("./group1/IMG_0650.JPG",BASE_URL).href,
      new URL("./group1/IMG_0651.JPG",BASE_URL).href,
      new URL("./group1/IMG_0652.JPG",BASE_URL).href,
      new URL("./group1/IMG_0654.JPG",BASE_URL).href,
      "/group1/IMG_0655.JPEG",
    ],
  },
  {
    title: "Self-Portrait Spectacle",
    description:
      "Explore a curated collection of selfies that capture my essence. Each photo tells a story, reflecting moments of joy, introspection, and personal style..",
  },
  {
    title: "Frame by Frame: The Cinema of Life",
    description:
      "Dive into a world where every shot tells a story. Experience photographs with a cinematic flair, invoking the magic and emotion of the silver screen.",
    images: [
      new URL("./group3/IMG_0656.JPG",BASE_URL).href,
     
      new URL("./group3/IMG_0658.JPG",BASE_URL).href,
      new URL("./group3/IMG_0659.JPG",BASE_URL).href,
      new URL("./group3/IMG_0660.JPG",BASE_URL).href,
      new URL("./group3/IMG_0661.JPG",BASE_URL).href,
      new URL("./group3/IMG_0662.JPG",BASE_URL).href,
      new URL("./group3/IMG_0663.JPG",BASE_URL).href,
      new URL("./group3/IMG_0664.JPG",BASE_URL).href,
      new URL("./group3/IMG_0657.JPG",BASE_URL).href,
 
    ],
  },
  {
    title: "Culinary Delights: A Visual Feast”",
    description:
      "Indulge in a visual array of delectable dishes. This gastronomic gallery showcases the art of cooking and the beauty of food, stimulating both your eyes and appetite..",
    // images: ['../img/group1/2.jpg']
  },
];
const selectedCard = ref(null);
const select = (card) => {
  selectedCard.value = card;
};
const clean = () => {
  selectedCard.value = null;
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  padding: 13px;
  gap: 15px;
  margin-top: 30px;
  border-radius: 7px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  max-width: 850px;
}
.image-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-gallery h3 {
  margin-bottom: 20px;
  color: #adb5bd;
}
.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px; 
}

.images img {
  width: 220px; 
  height: auto;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  transition: transform 0.2s ease, box-shadow 0.2s ease; 
}
.images img:hover{
  transform: scale(1.05); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease; 
}
button:hover {
  background-color: #0056b3;
}


</style>
