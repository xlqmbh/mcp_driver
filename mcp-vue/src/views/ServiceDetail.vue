<template>
  <div class="container mx-auto px-4 py-6">
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">服务详情</h1>
        <router-link :to="`/service-edit/${$route.params.id}`" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
          <i class="fas fa-edit mr-2"></i> 编辑服务
        </router-link>
      </div>

      <!-- 服务基本信息 -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">基本信息</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex">
            <span class="font-medium w-32 text-gray-600">服务名称:</span>
            <span>{{ service.name }}</span>
          </div>
          <div class="flex">
            <span class="font-medium w-32 text-gray-600">服务类型:</span>
            <span>{{ service.type }}</span>
          </div>
          <div class="flex">
            <span class="font-medium w-32 text-gray-600">状态:</span>
            <span :class="statusClass">{{ service.status }}</span>
          </div>
          <div class="flex">
            <span class="font-medium w-32 text-gray-600">创建时间:</span>
            <span>{{ service.createdAt }}</span>
          </div>
        </div>
      </div>

      <!-- 服务配置信息 -->
      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">配置信息</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex">
            <span class="font-medium w-32 text-gray-600">端口:</span>
            <span>{{ service.port }}</span>
          </div>
          <div class="flex">
            <span class="font-medium w-32 text-gray-600">路径:</span>
            <span>{{ service.path }}</span>
          </div>
          <div class="flex">
            <span class="font-medium w-32 text-gray-600">自动启动:</span>
            <span>{{ service.autoStart ? '是' : '否' }}</span>
          </div>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="flex space-x-4">
        <button 
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
          @click="startService"
          :disabled="service.status === '运行中'"
        >
          <i class="fas fa-play mr-2"></i> 启动服务
        </button>
        <button 
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
          @click="stopService"
          :disabled="service.status === '已停止'"
        >
          <i class="fas fa-stop mr-2"></i> 停止服务
        </button>
        <button 
          class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md flex items-center"
          @click="restartService"
        >
          <i class="fas fa-sync mr-2"></i> 重启服务
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const serviceId = route.params.id;
const service = ref({
  id: serviceId,
  name: '示例服务',
  type: 'Web服务',
  status: '运行中',
  createdAt: '2023-06-15 14:30',
  port: 8080,
  path: '/usr/local/services/example',
  autoStart: true
});

// 根据状态设置不同的样式
const statusClass = computed(() => {
  switch(service.value.status) {
    case '运行中':
      return 'text-green-600 font-medium';
    case '已停止':
      return 'text-red-600 font-medium';
    case '错误':
      return 'text-orange-600 font-medium';
    default:
      return 'text-gray-600';
  }
});

// 模拟获取服务详情数据
onMounted(() => {
  // 这里应该是从API获取数据
  console.log('获取服务详情，ID:', serviceId);
  // 模拟API调用
  // fetchServiceDetails(serviceId).then(data => service.value = data);
});

// 服务操作方法
const startService = () => {
  console.log('启动服务:', serviceId);
  service.value.status = '运行中';
  // 实际应用中应该调用API
};

const stopService = () => {
  console.log('停止服务:', serviceId);
  service.value.status = '已停止';
  // 实际应用中应该调用API
};

const restartService = () => {
  console.log('重启服务:', serviceId);
  service.value.status = '运行中';
  // 实际应用中应该调用API
};
</script>