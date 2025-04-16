<template>
  <div class="w-64 bg-white dark:bg-gray-800 shadow-lg rounded-tr-xl rounded-br-xl transition-colors duration-300">
    <div class="flex items-center justify-center h-16 border-b dark:border-gray-700">
      <h1 class="text-xl font-bold text-primary dark:text-blue-400">MCP服务运维平台</h1>
    </div>
    <nav class="mt-6">
      <div class="px-4">
        <span class="text-xs text-gray-400 dark:text-gray-300 uppercase tracking-wider">主菜单</span>
        <div class="mt-3">
          <router-link to="/" class="flex items-center px-4 py-3 rounded-lg" :class="{ 'text-primary bg-blue-50 dark:bg-blue-900 dark:bg-opacity-50': currentRoute === '/', 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-25': currentRoute !== '/' }">
            <i class="fas fa-home mr-3"></i>
            <span>仪表盘</span>
          </router-link>
          <router-link to="/services" class="flex items-center px-4 py-3 rounded-lg mt-1" :class="{ 'text-primary bg-blue-50 dark:bg-blue-900 dark:bg-opacity-50': currentRoute === '/services', 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-25': currentRoute !== '/services' }">
            <i class="fas fa-server mr-3"></i>
            <span>服务管理</span>
          </router-link>
          <router-link to="/statistics" class="flex items-center px-4 py-3 rounded-lg mt-1" :class="{ 'text-primary bg-blue-50 dark:bg-blue-900 dark:bg-opacity-50': currentRoute === '/statistics', 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-25': currentRoute !== '/statistics' }">
            <i class="fas fa-chart-line mr-3"></i>
            <span>调用统计</span>
          </router-link>
          <router-link to="/logs" class="flex items-center px-4 py-3 rounded-lg mt-1" :class="{ 'text-primary bg-blue-50 dark:bg-blue-900 dark:bg-opacity-50': currentRoute === '/logs', 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-25': currentRoute !== '/logs' }">
            <i class="fas fa-clipboard-list mr-3"></i>
            <span>日志查看</span>
          </router-link>
        </div>
      </div>
      <div class="px-4 mt-8">
        <span class="text-xs text-gray-400 dark:text-gray-300 uppercase tracking-wider">系统</span>
        <div class="mt-3">
          <router-link to="/settings" class="flex items-center px-4 py-3 rounded-lg" :class="{ 'text-primary bg-blue-50 dark:bg-blue-900 dark:bg-opacity-50': currentRoute === '/settings', 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:hover:bg-opacity-25': currentRoute !== '/settings' }">
            <i class="fas fa-cog mr-3"></i>
            <span>系统设置</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentRoute = computed(() => route ? route.path : '/');
</script>