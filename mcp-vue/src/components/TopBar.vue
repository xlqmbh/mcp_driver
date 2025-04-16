<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm h-16 flex items-center justify-between px-6">
    <div class="flex items-center">
      <h2 class="text-lg font-medium dark:text-white">{{ title }}</h2>
    </div>
    <div class="flex items-center space-x-4">
      <ThemeToggle ref="themeToggle" />
      <button class="p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none">
        <i class="fas fa-bell"></i>
      </button>
      <div class="relative">
        <button class="flex items-center text-sm focus:outline-none">
          <img class="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="用户头像">
          <span class="ml-2 text-gray-700 dark:text-gray-200">管理员</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import ThemeToggle from './ThemeToggle.vue';

const themeToggle = ref(null);

const route = useRoute();
const title = computed(() => {
  switch (route.path) {
    case '/':
      return '仪表盘';
    case '/services':
      return '服务管理';
    case '/statistics':
      return '调用统计';
    case '/logs':
      return '日志查看';
    case '/settings':
      return '系统设置';
    case '/service-add':
      return '添加服务';
    default:
      if (route.path.includes('/service-detail/')) {
        return '服务详情';
      } else if (route.path.includes('/service-edit/')) {
        return '编辑服务';
      }
      return '仪表盘';
  }
});
</script>