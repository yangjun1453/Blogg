<template>
  <div class="main">
    <h2>Навыки</h2>
    <ul>
      <li v-for="(item, index) in Lists" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup name="SkillList">
import { ref } from "vue";

const Lists = ref([
  "Живопись",
  "Скульптура",
  "Графический дизайн",
  "Фотография",
  "История искусства",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Цифровая иллюстрация",
  "Эскизирование",
]);
</script>

<style scoped>
.main {
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 3px;
  border-radius: 11px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.main li {
  display: inline-block;
  list-style-type: none;
  background-color: #e9ecef;
  padding: 5px;
  margin: 3px;
  border-radius: 13px;
}
h2{
  margin-bottom: 10px;
}

</style>
