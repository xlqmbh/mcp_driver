<template>
  <main class="p-6">
    <!-- 操作栏 -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex">
        <div class="relative">
          <input type="text" placeholder="搜索服务..." class="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
          <div class="absolute left-3 top-2.5 text-gray-400">
            <i class="fas fa-search"></i>
          </div>
        </div>
        <div class="ml-4">
          <select class="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
            <option value="all">所有状态</option>
            <option value="running">运行中</option>
            <option value="stopped">已停止</option>
            <option value="error">错误</option>
          </select>
        </div>
      </div>
      <router-link to="/service-add" class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
        <i class="fas fa-plus mr-2"></i>
        <span>添加服务</span>
      </router-link>
    </div>

    <!-- 服务列表 -->
    <div class="bg-white rounded-custom shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">服务名称</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">服务类型</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">端口</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">今日调用</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <!-- 服务项 1 -->
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500">
                  <i class="fas fa-robot"></i>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">文本生成服务</div>
                  <div class="text-sm text-gray-500">text-generation-v1</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">LLM</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                运行中
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8000</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">568</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-15</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex space-x-2">
                <router-link :to="`/service-detail/1`" class="text-primary hover:text-blue-700"><i class="fas fa-eye"></i></router-link>
                <router-link :to="`/service-edit/1`" class="text-blue-600 hover:text-blue-800"><i class="fas fa-edit"></i></router-link>
                <button class="text-red-600 hover:text-red-800"><i class="fas fa-stop-circle"></i></button>
                <button class="text-red-600 hover:text-red-800"><i class="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
          <!-- 服务项 2 -->
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-500">
                  <i class="fas fa-image"></i>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">图像识别服务</div>
                  <div class="text-sm text-gray-500">image-recognition-v2</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">CV</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                运行中
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8001</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">342</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-05-20</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex space-x-2">
                <router-link :to="`/service-detail/2`" class="text-primary hover:text-blue-700"><i class="fas fa-eye"></i></router-link>
                <router-link :to="`/service-edit/2`" class="text-blue-600 hover:text-blue-800"><i class="fas fa-edit"></i></router-link>
                <button class="text-red-600 hover:text-red-800"><i class="fas fa-stop-circle"></i></button>
                <button class="text-red-600 hover:text-red-800"><i class="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
          <!-- 服务项 3 -->
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                  <i class="fas fa-volume-up"></i>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">语音合成服务</div>
                  <div class="text-sm text-gray-500">speech-synthesis-v1</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">TTS</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                已停止
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8002</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-04-10</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex space-x-2">
                <router-link :to="`/service-detail/3`" class="text-primary hover:text-blue-700"><i class="fas fa-eye"></i></router-link>
                <router-link :to="`/service-edit/3`" class="text-blue-600 hover:text-blue-800"><i class="fas fa-edit"></i></router-link>
                <button class="text-green-600 hover:text-green-800"><i class="fas fa-play-circle"></i></button>
                <button class="text-red-600 hover:text-red-800"><i class="fas fa-trash"></i></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
// 服务管理页面
</script>

<style scoped>
.rounded-custom {
  border-radius: 12px;
}
</style>