<template>
  <main class="p-6">
    <!-- 筛选器 -->
    <div class="bg-white rounded-custom shadow p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
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
          <label for="log_level" class="block text-sm font-medium text-gray-700 mb-1">日志级别</label>
          <select id="log_level" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="all">所有级别</option>
            <option value="debug">Debug</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </div>
        <div>
          <label for="time_range" class="block text-sm font-medium text-gray-700 mb-1">时间范围</label>
          <select id="time_range" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="last_hour">最近1小时</option>
            <option value="last_6_hours">最近6小时</option>
            <option value="last_24_hours">最近24小时</option>
            <option value="last_7_days">最近7天</option>
            <option value="custom">自定义</option>
          </select>
        </div>
        <div>
          <label for="keyword" class="block text-sm font-medium text-gray-700 mb-1">关键词搜索</label>
          <input type="text" id="keyword" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="输入关键词...">
        </div>
        <div class="flex items-end">
          <button class="w-full bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            搜索日志
          </button>
        </div>
      </div>
    </div>

    <!-- 日志内容 -->
    <div class="bg-white rounded-custom shadow overflow-hidden">
      <div class="px-6 py-4 border-b flex justify-between items-center">
        <h3 class="text-lg font-medium">日志内容</h3>
        <div class="flex space-x-2">
          <button class="px-3 py-1 text-xs border rounded-md text-gray-700 bg-white hover:bg-gray-50 flex items-center">
            <i class="fas fa-download mr-1"></i>
            <span>下载日志</span>
          </button>
          <button class="px-3 py-1 text-xs border rounded-md text-gray-700 bg-white hover:bg-gray-50 flex items-center">
            <i class="fas fa-sync-alt mr-1"></i>
            <span>刷新</span>
          </button>
        </div>
      </div>
      <div class="p-6 bg-gray-50 h-96 overflow-auto">
        <div class="log-content">
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:10]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[text-generation-v1]</span> 服务启动成功，监听端口: 8000</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:15]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[text-generation-v1]</span> 收到请求: req-9876, 客户端IP: 192.168.1.105</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:15]</span> <span class="log-debug">[DEBUG]</span> <span class="text-gray-700">[text-generation-v1]</span> 输入长度: 128 tokens</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:15]</span> <span class="log-debug">[DEBUG]</span> <span class="text-gray-700">[text-generation-v1]</span> 模型加载时间: 25ms</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:15]</span> <span class="log-debug">[DEBUG]</span> <span class="text-gray-700">[text-generation-v1]</span> 推理时间: 210ms</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:15]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[text-generation-v1]</span> 请求处理成功: req-9876, 响应时间: 235ms, 输出长度: 512 tokens</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:30]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[image-recognition-v2]</span> 收到请求: req-4567, 客户端IP: 192.168.1.106</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:30]</span> <span class="log-debug">[DEBUG]</span> <span class="text-gray-700">[image-recognition-v2]</span> 图像大小: 1024x768, 格式: JPEG</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:31]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[image-recognition-v2]</span> 请求处理成功: req-4567, 响应时间: 320ms</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:42]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[text-generation-v1]</span> 收到请求: req-9875, 客户端IP: 192.168.1.105</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:42]</span> <span class="log-debug">[DEBUG]</span> <span class="text-gray-700">[text-generation-v1]</span> 输入长度: 64 tokens</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:32:42]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[text-generation-v1]</span> 请求处理成功: req-9875, 响应时间: 198ms, 输出长度: 256 tokens</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:05]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[sentiment-analysis-v1]</span> 收到请求: req-2345, 客户端IP: 192.168.1.107</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:05]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[sentiment-analysis-v1]</span> 请求处理成功: req-2345, 响应时间: 156ms</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:15]</span> <span class="log-warning">[WARNING]</span> <span class="text-gray-700">[text-generation-v1]</span> 内存使用率超过80%: 当前使用 6.5GB/8GB</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:20]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[image-recognition-v2]</span> 收到请求: req-4568, 客户端IP: 192.168.1.108</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:20]</span> <span class="log-warning">[WARNING]</span> <span class="text-gray-700">[image-recognition-v2]</span> 图像分辨率过高: 4096x3072</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:21]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[image-recognition-v2]</span> 请求处理成功: req-4568, 响应时间: 850ms</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:45]</span> <span class="log-info">[INFO]</span> <span class="text-gray-700">[text-generation-v1]</span> 收到请求: req-9874, 客户端IP: 192.168.1.106</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:45]</span> <span class="log-debug">[DEBUG]</span> <span class="text-gray-700">[text-generation-v1]</span> 输入长度: 2048 tokens</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:45]</span> <span class="log-warning">[WARNING]</span> <span class="text-gray-700">[text-generation-v1]</span> 输入长度接近最大限制</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:48]</span> <span class="log-error">[ERROR]</span> <span class="text-gray-700">[text-generation-v1]</span> 处理请求失败: req-9874, 错误: CUDA out of memory</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:48]</span> <span class="log-error">[ERROR]</span> <span class="text-gray-700">[text-generation-v1]</span> 详细错误: CUDA error: out of memory. Tried to allocate 1.97 GiB (GPU 0; 15.78 GiB total capacity)</div>
          <div class="mb-1"><span class="text-gray-500">[2023-06-21 14:33:50]</span> <span class="log-warning">[WARNING]</span> <span class="text-gray-700">[text-generation-v1]</span> 自动释放GPU内存缓存</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// 日志查看页面
</script>

<style scoped>
.rounded-custom {
  border-radius: 12px;
}
.log-content {
  font-family: 'Courier New', Courier, monospace;
  white-space: pre-wrap;
  font-size: 0.875rem;
  line-height: 1.5;
}
.log-info {
  color: #3b82f6;
}
.log-warning {
  color: #f59e0b;
}
.log-error {
  color: #ef4444;
}
.log-debug {
  color: #6b7280;
}
</style>