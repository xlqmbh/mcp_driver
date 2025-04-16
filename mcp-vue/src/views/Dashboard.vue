<template>
  <main class="p-6">
    <!-- 状态卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div class="bg-white dark:bg-gray-800 rounded-custom shadow p-6 transition-colors duration-300">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-400">
            <i class="fas fa-server"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-gray-500 dark:text-gray-400 text-sm">总服务数</h3>
            <p class="text-2xl font-semibold dark:text-white">12</p>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-custom shadow p-6 transition-colors duration-300">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
            <i class="fas fa-play-circle"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-gray-500 dark:text-gray-400 text-sm">运行中服务</h3>
            <p class="text-2xl font-semibold dark:text-white">8</p>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-custom shadow p-6 transition-colors duration-300">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400">
            <i class="fas fa-stop-circle"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-gray-500 dark:text-gray-400 text-sm">停止服务</h3>
            <p class="text-2xl font-semibold dark:text-white">4</p>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-custom shadow p-6 transition-colors duration-300">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400">
            <i class="fas fa-bolt"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-gray-500 dark:text-gray-400 text-sm">今日调用次数</h3>
            <p class="text-2xl font-semibold dark:text-white">1,286</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 图表区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="bg-white dark:bg-gray-800 rounded-custom shadow p-6 transition-colors duration-300">
        <h3 class="text-lg font-medium mb-4 dark:text-white">服务调用趋势</h3>
        <div class="h-64 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="调用趋势图" class="max-h-full rounded-lg">
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-custom shadow p-6 transition-colors duration-300">
        <h3 class="text-lg font-medium mb-4 dark:text-white">服务状态分布</h3>
        <div class="h-64 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="状态分布图" class="max-h-full rounded-lg">
        </div>
      </div>
    </div>

    <!-- 最近活动 -->
    <div class="bg-white dark:bg-gray-800 rounded-custom shadow overflow-hidden transition-colors duration-300">
      <div class="px-6 py-4 border-b dark:border-gray-700">
        <h3 class="text-lg font-medium dark:text-white">最近活动</h3>
      </div>
      <div class="p-6">
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-400">
                  <i class="fas fa-play"></i>
                </span>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-900 dark:text-white">启动服务 - 文本生成服务</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">2分钟前</p>
              </div>
            </div>
          </li>
          <li class="py-3">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-400">
                  <i class="fas fa-edit"></i>
                </span>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-900 dark:text-white">修改服务配置 - 图像识别服务</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">15分钟前</p>
              </div>
            </div>
          </li>
          <li class="py-3">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-500">
                  <i class="fas fa-stop"></i>
                </span>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-900">停止服务 - 语音合成服务</p>
                <p class="text-sm text-gray-500">30分钟前</p>
              </div>
            </div>
          </li>
          <li class="py-3">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-500">
                  <i class="fas fa-plus"></i>
                </span>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-900">添加新服务 - 情感分析服务</p>
                <p class="text-sm text-gray-500">1小时前</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
// 仪表盘页面不需要特殊逻辑
</script>

<style scoped>
.rounded-custom {
  border-radius: 12px;
}
</style>