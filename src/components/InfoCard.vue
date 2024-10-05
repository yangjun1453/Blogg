<template>
  <div class="box">
    <img src="" alt="" />
    <div class="text">
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>
<script setup name="InfoCard">
defineProps(["card"]);
</script>
<style scoped>
.box {
  border-bottom: 3px solid white;
  display: flex;
  padding: 25px 10px;
  gap: 30px;
  line-height: 2;
  width: 800px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
.box:hover {
  background-color: #dbe4ff;
  cursor: pointer;
  transform: scale(1.02);
}

.box h3 {
  color: #74c0fc;
}
</style>
