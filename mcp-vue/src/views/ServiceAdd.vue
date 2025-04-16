<template>
  <main class="p-6">
    <div class="bg-white rounded-custom shadow overflow-hidden">
      <div class="px-6 py-4 border-b">
        <h3 class="text-lg font-medium">服务信息</h3>
      </div>
      <div class="p-6">
        <form @submit.prevent="submitForm">
          <!-- 基本信息 -->
          <div class="mb-8">
            <h4 class="text-base font-medium text-gray-700 mb-4">基本信息</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="service_name" class="block text-sm font-medium text-gray-700 mb-1">服务名称</label>
                <input type="text" id="service_name" name="service_name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：文本生成服务">
              </div>
              <div>
                <label for="service_id" class="block text-sm font-medium text-gray-700 mb-1">服务ID</label>
                <input type="text" id="service_id" name="service_id" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：text-generation-v1">
              </div>
              <div>
                <label for="service_type" class="block text-sm font-medium text-gray-700 mb-1">服务类型</label>
                <select id="service_type" name="service_type" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">请选择服务类型</option>
                  <option value="LLM">LLM - 大语言模型</option>
                  <option value="CV">CV - 计算机视觉</option>
                  <option value="NLP">NLP - 自然语言处理</option>
                  <option value="Audio">Audio - 音频处理</option>
                  <option value="Other">其他</option>
                </select>
              </div>
              <div>
                <label for="port" class="block text-sm font-medium text-gray-700 mb-1">服务端口</label>
                <input type="number" id="port" name="port" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：8000">
              </div>
            </div>
          </div>

          <!-- 模型配置 -->
          <div class="mb-8">
            <h4 class="text-base font-medium text-gray-700 mb-4">模型配置</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="model_name" class="block text-sm font-medium text-gray-700 mb-1">模型名称</label>
                <input type="text" id="model_name" name="model_name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：gpt-3.5-turbo">
              </div>
              <div>
                <label for="model_version" class="block text-sm font-medium text-gray-700 mb-1">模型版本</label>
                <input type="text" id="model_version" name="model_version" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：1.0.0">
              </div>
              <div>
                <label for="model_path" class="block text-sm font-medium text-gray-700 mb-1">模型路径</label>
                <input type="text" id="model_path" name="model_path" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：/models/gpt-3.5-turbo">
              </div>
              <div>
                <label for="model_format" class="block text-sm font-medium text-gray-700 mb-1">模型格式</label>
                <select id="model_format" name="model_format" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">请选择模型格式</option>
                  <option value="onnx">ONNX</option>
                  <option value="pytorch">PyTorch</option>
                  <option value="tensorflow">TensorFlow</option>
                  <option value="other">其他</option>
                </select>
              </div>
            </div>
          </div>

          <!-- 资源配置 -->
          <div class="mb-8">
            <h4 class="text-base font-medium text-gray-700 mb-4">资源配置</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label for="cpu_limit" class="block text-sm font-medium text-gray-700 mb-1">CPU限制 (核)</label>
                <input type="number" id="cpu_limit" name="cpu_limit" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：4">
              </div>
              <div>
                <label for="memory_limit" class="block text-sm font-medium text-gray-700 mb-1">内存限制 (GB)</label>
                <input type="number" id="memory_limit" name="memory_limit" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：8">
              </div>
              <div>
                <label for="gpu_limit" class="block text-sm font-medium text-gray-700 mb-1">GPU限制</label>
                <input type="number" id="gpu_limit" name="gpu_limit" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：1">
              </div>
              <div>
                <label for="max_concurrency" class="block text-sm font-medium text-gray-700 mb-1">最大并发数</label>
                <input type="number" id="max_concurrency" name="max_concurrency" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：50">
              </div>
              <div>
                <label for="timeout" class="block text-sm font-medium text-gray-700 mb-1">超时设置 (秒)</label>
                <input type="number" id="timeout" name="timeout" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：30">
              </div>
              <div>
                <label for="auto_restart" class="block text-sm font-medium text-gray-700 mb-1">自动重启</label>
                <select id="auto_restart" name="auto_restart" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="true">是</option>
                  <option value="false">否</option>
                </select>
              </div>
            </div>
          </div>

          <!-- 环境变量 -->
          <div class="mb-8">
            <h4 class="text-base font-medium text-gray-700 mb-4">环境变量</h4>
            <div class="mb-4">
              <label for="env_vars" class="block text-sm font-medium text-gray-700 mb-1">环境变量 (每行一个，格式：KEY=VALUE)</label>
              <textarea id="env_vars" name="env_vars" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：\nMODEL_PATH=/models/gpt-3.5-turbo\nDEBUG=false\nLOG_LEVEL=info"></textarea>
            </div>
          </div>

          <!-- API配置 -->
          <div class="mb-8">
            <h4 class="text-base font-medium text-gray-700 mb-4">API配置</h4>
            <div class="mb-4">
              <label for="api_base_path" class="block text-sm font-medium text-gray-700 mb-1">API基础路径</label>
              <input type="text" id="api_base_path" name="api_base_path" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：/api/v1/text-generation">
            </div>
            <div class="mb-4">
              <label for="api_docs" class="block text-sm font-medium text-gray-700 mb-1">API文档URL</label>
              <input type="text" id="api_docs" name="api_docs" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="例如：/docs/text-generation">
            </div>
          </div>

          <!-- 提交按钮 -->
          <div class="flex justify-end space-x-4">
            <router-link to="/services" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              取消
            </router-link>
            <button type="submit" class="px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg">
              添加服务
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const submitForm = () => {
  // 这里添加表单提交逻辑
  alert('服务添加成功！');
  router.push('/services');
};
</script>

<style scoped>
.rounded-custom {
  border-radius: 12px;
}
</style>