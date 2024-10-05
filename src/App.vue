<script setup>
import ProfileInfo from "./components/ProfileInfo.vue";
import SkillList from "./components/SkillList.vue";
import PhotoList from "./components/PhotoList.vue";
</script>

<template>
  <div class="main">
    <div class="left">
      <ProfileInfo />
      <SkillList />
    </div>
    <div class="right">
      <PhotoList />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
}

.left {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.right {
  margin-left: 50px;
}

/* 响应式 */
@media (max-width: 768px) {
  .main {
    flex-direction: column;
    gap: 30px;
    
  }

  .left {
    width: 30%;
  }

  .right {
    width: 100%;
  }
}
</style>
