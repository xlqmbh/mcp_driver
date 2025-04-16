<template>
  <main class="p-6">
    <!-- 筛选器 -->
    <div class="bg-white rounded-custom shadow p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <label for="service" class="block text-sm font-medium text-gray-700 mb-1">服务</label>
          <select id="service" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="all">所有服务</option>
            <option value="text-generation-v1">文本生成服务</option>
            <option value="image-recognition-v2">图像识别服务</option>
            <option value="speech-synthesis-v1">语音合成服务</option>
            <option value="sentiment-analysis-v1">情感分析服务</option>
          </select>
        </div>
        <div>
          <label for="time_range" class="block text-sm font-medium text-gray-700 mb-1">时间范围</label>
          <select id="time_range" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="today">今天</option>
            <option value="yesterday">昨天</option>
            <option value="last_7_days">最近7天</option>
            <option value="last_30_days">最近30天</option>
            <option value="this_month">本月</option>
            <option value="last_month">上月</option>
            <option value="custom">自定义</option>
          </select>
        </div>
        <div>
          <label for="group_by" class="block text-sm font-medium text-gray-700 mb-1">分组方式</label>
          <select id="group_by" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="hour">按小时</option>
            <option value="day">按天</option>
            <option value="week">按周</option>
            <option value="month">按月</option>
          </select>
        </div>
        <div class="flex items-end">
          <button class="w-full bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            应用筛选
          </button>
        </div>
      </div>
    </div>

    <!-- 统计卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div class="bg-white rounded-custom shadow p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-blue-100 text-primary">
            <i class="fas fa-bolt"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-gray-500 text-sm">总调用次数</h3>
            <p class="text-2xl font-semibold">24,586</p>
            <p class="text-sm text-green-600"><i class="fas fa-arrow-up mr-1"></i>12% 较上期</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-custom shadow p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-green-100 text-green-600">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-gray-500 text-sm">成功调用</h3>
            <p class="text-2xl font-semibold">23,942</p>
            <p class="text-sm text-green-600"><i class="fas fa-arrow-up mr-1"></i>8% 较上期</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-custom shadow p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-red-100 text-red-600">
            <i class="fas fa-times-circle"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-gray-500 text-sm">失败调用</h3>
            <p class="text-2xl font-semibold">644</p>
            <p class="text-sm text-red-600"><i class="fas fa-arrow-up mr-1"></i>3% 较上期</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-custom shadow p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <i class="fas fa-clock"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-gray-500 text-sm">平均响应时间</h3>
            <p class="text-2xl font-semibold">256ms</p>
            <p class="text-sm text-green-600"><i class="fas fa-arrow-down mr-1"></i>5% 较上期</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 图表区域 -->
    <div class="grid grid-cols-1 gap-6 mb-6">
      <div class="bg-white rounded-custom shadow p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium">调用趋势</h3>
          <div class="flex space-x-2">
            <button class="px-3 py-1 text-xs border rounded-md text-gray-700 bg-white hover:bg-gray-50">
              按小时
            </button>
            <button class="px-3 py-1 text-xs border rounded-md text-white bg-primary hover:bg-blue-600">
              按天
            </button>
            <button class="px-3 py-1 text-xs border rounded-md text-gray-700 bg-white hover:bg-gray-50">
              按周
            </button>
            <button class="px-3 py-1 text-xs border rounded-md text-gray-700 bg-white hover:bg-gray-50">
              按月
            </button>
          </div>
        </div>
        <div class="h-64 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="调用趋势图" class="max-h-full rounded-lg">
        </div>
      </div>
    </div>

    <!-- 服务调用分布 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div class="bg-white rounded-custom shadow p-6">
        <h3 class="text-lg font-medium mb-4">服务调用分布</h3>
        <div class="h-64 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="服务调用分布图" class="max-h-full rounded-lg">
        </div>
      </div>
      <div class="bg-white rounded-custom shadow p-6">
        <h3 class="text-lg font-medium mb-4">响应时间分布</h3>
        <div class="h-64 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="响应时间分布图" class="max-h-full rounded-lg">
        </div>
      </div>
    </div>

    <!-- 调用详情表格 -->
    <div class="bg-white rounded-custom shadow overflow-hidden">
      <div class="px-6 py-4 border-b">
        <h3 class="text-lg font-medium">调用详情</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">请求ID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">服务名称</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">响应时间</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">调用时间</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">客户端IP</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">req-9876</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">文本生成服务</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">成功</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">235ms</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-21 14:32:15</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.105</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">req-4567</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">图像识别服务</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">成功</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">320ms</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-21 14:32:31</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.106</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">req-9874</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">文本生成服务</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">失败</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-21 14:33:48</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">192.168.1.106</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="px-6 py-4 border-t flex justify-between items-center">
        <div class="text-sm text-gray-500">显示 1 至 3 条，共 24,586 条</div>
        <div class="flex space-x-2">
          <button class="px-3 py-1 text-xs border rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50" disabled>
            上一页
          </button>
          <button class="px-3 py-1 text-xs border rounded-md text-white bg-primary hover:bg-blue-600">
            1
          </button>
          <button class="px-3 py-1 text-xs border rounded-md text-gray-700 bg-white hover:bg-gray-50">
            2
          </button>
          <button class="px-3 py-1 text-xs border rounded-md text-gray-700 bg-white hover:bg-gray-50">
            3
          </button>
          <button class="px-3 py-1 text-xs border rounded-md text-gray-700 bg-white hover:bg-gray-50">
            下一页
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// 调用统计页面
</script>

<style scoped>
.rounded-custom {
  border-radius: 12px;
}
</style>