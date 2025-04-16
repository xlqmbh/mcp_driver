<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- 侧边栏 -->
    <SideBar />

    <!-- 主内容区 -->
    <div class="flex-1 overflow-auto">
      <!-- 顶部导航栏 -->
      <TopBar />

      <!-- 页面内容 -->
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import SideBar from './components/SideBar.vue';
import TopBar from './components/TopBar.vue';

// 导入Font Awesome
onMounted(() => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  document.head.appendChild(link);
});
</script>

<style>
@import '@fortawesome/fontawesome-free/css/all.min.css';
</style>
