<template>
  <button @click="toggleTheme" class="p-2 rounded-full focus:outline-none" :class="isDark ? 'text-yellow-400 hover:text-yellow-500' : 'text-gray-600 hover:text-gray-800'">
    <i class="fas" :class="isDark ? 'fa-sun' : 'fa-moon'"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const isDark = ref(false);

// 初始化主题
onMounted(() => {
  // 检查本地存储中的主题设置
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDark.value = false;
    document.documentElement.classList.remove('dark');
  }
});

// 切换主题
const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

// 导出主题状态，以便其他组件可以使用
defineExpose({
  isDark
});
</script>