<template>
  <div class="main">
    <img src="../assets/IMG_0479.png" alt="" />
    <h3>Ksenia</h3>
    <p>An artist from Stavropol</p>
    <div class="icon">
      <Github style="color: #8bd3dd" />
      <Instagram style="color: pink" />
      <Facebook style="color: red" />
    </div>
  </div>
</template>

<script setup name="ProfileInfo">
import { Github, Instagram, Facebook } from "lucide-vue-next";
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  padding: 13px;
  gap: 15px;
  margin-bottom: 30px;
  border-radius: 11px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  line-height: 1.5;
}
.main img {
  width: 90px;
  height: auto;
  border-radius: 50%;
}
.main p {
  color: #adb5bd;
}
.icon {
  display: flex;
  gap: 5px;
}
.icon svg {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.icon svg:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .main img {
    width: 70px;
  }

  .icon {
    justify-content: center;
  }
}
</style>
