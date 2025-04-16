<template>
  <div class="container mx-auto px-4 py-6">
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">编辑服务</h1>
        <router-link :to="`/service-detail/${$route.params.id}`" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center">
          <i class="fas fa-arrow-left mr-2"></i> 返回详情
        </router-link>
      </div>

      <form @submit.prevent="saveService" class="space-y-6">
        <!-- 基本信息 -->
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">基本信息</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 font-medium mb-2">服务名称</label>
              <input 
                type="text" 
                v-model="service.name" 
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>
            <div>
              <label class="block text-gray-700 font-medium mb-2">服务类型</label>
              <select 
                v-model="service.type" 
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Web服务</option>
                <option>数据库服务</option>
                <option>API服务</option>
                <option>其他</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 配置信息 -->
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">配置信息</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 font-medium mb-2">端口</label>
              <input 
                type="number" 
                v-model="service.port" 
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>
            <div>
              <label class="block text-gray-700 font-medium mb-2">路径</label>
              <input 
                type="text" 
                v-model="service.path" 
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
            </div>
            <div class="flex items-center">
              <input 
                type="checkbox" 
                id="autoStart" 
                v-model="service.autoStart" 
                class="mr-2 h-5 w-5 text-blue-500"
              >
              <label for="autoStart" class="text-gray-700 font-medium">自动启动</label>
            </div>
          </div>
        </div>

        <!-- 操作按钮 -->
        <div class="flex space-x-4">
          <button 
            type="submit" 
            class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center"
          >
            <i class="fas fa-save mr-2"></i> 保存更改
          </button>
          <button 
            type="button" 
            @click="cancelEdit" 
            class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md flex items-center"
          >
            <i class="fas fa-times mr-2"></i> 取消
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const serviceId = route.params.id;

// 服务数据
const service = ref({
  id: serviceId,
  name: '',
  type: 'Web服务',
  status: '运行中',
  createdAt: '',
  port: 8080,
  path: '',
  autoStart: true
});

// 模拟获取服务详情数据
onMounted(() => {
  // 这里应该是从API获取数据
  console.log('获取服务详情用于编辑，ID:', serviceId);
  // 模拟API调用
  // fetchServiceDetails(serviceId).then(data => service.value = data);
  
  // 模拟数据
  service.value = {
    id: serviceId,
    name: '示例服务',
    type: 'Web服务',
    status: '运行中',
    createdAt: '2023-06-15 14:30',
    port: 8080,
    path: '/usr/local/services/example',
    autoStart: true
  };
});

// 保存服务信息
const saveService = () => {
  console.log('保存服务信息:', service.value);
  // 实际应用中应该调用API
  // updateService(serviceId, service.value).then(() => {
  //   router.push(`/service-detail/${serviceId}`);
  // });
  
  // 模拟保存成功后跳转
  router.push(`/service-detail/${serviceId}`);
};

// 取消编辑
const cancelEdit = () => {
  router.push(`/service-detail/${serviceId}`);
};
</script>