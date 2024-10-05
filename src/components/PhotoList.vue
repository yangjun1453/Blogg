<template>
  <h1>Мои списки фотографий</h1>
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

      <button @click="clean">Назад</button>
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
import assetImport from "../utils/assetImport";
import { ref } from "vue";

let cards = [
  {
    title: "Туризм в горах",
    description:
      "Погрузитесь в удивительный мир горных пейзажей и приключений. Каждая фотография передает величие природы и дух свободы в горах",
    images: [
      assetImport("./group1/IMG_0647.JPG"),
      assetImport("./group1/IMG_0648.JPG"),
      assetImport("./group1/IMG_0649.JPG"),
      assetImport("./group1/IMG_0650.JPG"),
      assetImport("./group1/IMG_0651.JPG"),
      assetImport("./group1/IMG_0652.JPG"),
      assetImport("./group1/IMG_0654.JPG"),
      assetImport("./group1/IMG_0655.JPEG"),
    ],
  },
  {
    title: "Мгновения повседневной жизни",
    description:
      "Мимолетные моменты из повседневной жизни, запечатленные на фотографиях. Эти кадры демонстрируют красоту в простых и обыденных вещах.",
      images: [
      assetImport("./group2/IMG_0733.JPG"),
      assetImport("./group2/IMG_0734.JPG"),
      assetImport("./group2/IMG_0735.JPG"),
      assetImport("./group2/IMG_0736.JPG"),
      assetImport("./group2/IMG_0737.JPG"),
      assetImport("./group2/IMG_0738.JPG"),
  
      
    ],
  },
  {
    title: "Мои работы",
    description:
      "Коллекция моих художественных произведений, включающая картины, рисунки и уникальные креативные проекты, раскрывающие мой творческий путь.",
    images: [
      assetImport("./group3/IMG_0656.JPG"),

      assetImport("./group3/IMG_0658.JPG"),
      assetImport("./group3/IMG_0659.JPG"),
      assetImport("./group3/IMG_0660.JPG"),
      assetImport("./group3/IMG_0661.JPG"),
      assetImport("./group3/IMG_0662.JPG"),
      assetImport("./group3/IMG_0663.JPG"),
      assetImport("./group3/IMG_0664.JPG"),
      assetImport("./group3/IMG_0657.JPG"),
    ],
  },
  {
    title: "Другие изображения (от Jun)",
    description:
      "Эксклюзивная подборка фотографий и моментов из жизни Jun, отражающих его уникальный взгляд на мир.",
      images: [
      assetImport("./group4/2024-09-21 06_13_57.662.jpg"),
      assetImport("./group4/hoga 2024-09-21 060628.324.jpg"),


      assetImport("./group4/IMG_0144.JPEG"),
      assetImport("./group4/IMG_0149.JPEG"),
      assetImport("./group4/IMG_0151.JPEG"),
      assetImport("./group4/IMG_0155.JPEG"),
      assetImport("./group4/IMG_0158.JPEG"),
      assetImport("./group4/IMG_0160.JPEG"),
      assetImport("./group4/IMG_0289.JPEG"),

  
      
    ],
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
.images img:hover {
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
