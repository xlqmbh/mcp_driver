<template>
  <main class="p-6">
    <!-- 设置卡片 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 系统设置 -->
      <div class="bg-white dark:bg-gray-800 rounded-custom shadow overflow-hidden transition-colors duration-300">
        <div class="px-6 py-4 border-b dark:border-gray-700">
          <h3 class="text-lg font-medium dark:text-white">系统设置</h3>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <label for="system_name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">系统名称</label>
            <input type="text" id="system_name" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" value="MCP服务运维平台">
          </div>
          <div class="mb-4">
            <label for="admin_email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">管理员邮箱</label>
            <input type="email" id="admin_email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" value="admin@example.com">
          </div>
          <div class="mb-4">
            <label for="log_level" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">日志级别</label>
            <select id="log_level" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="debug">Debug</option>
              <option value="info" selected>Info</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="log_retention" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">日志保留时间</label>
            <select id="log_retention" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="7">7天</option>
              <option value="14">14天</option>
              <option value="30" selected>30天</option>
              <option value="90">90天</option>
              <option value="180">180天</option>
              <option value="365">365天</option>
            </select>
          </div>
          <div class="flex justify-end">
            <button class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
              保存设置
            </button>
          </div>
        </div>
      </div>

      <!-- 通知设置 -->
      <div class="bg-white dark:bg-gray-800 rounded-custom shadow overflow-hidden transition-colors duration-300">
        <div class="px-6 py-4 border-b dark:border-gray-700">
          <h3 class="text-lg font-medium dark:text-white">通知设置</h3>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <div class="flex items-center justify-between">
              <label for="email_notification" class="text-sm font-medium text-gray-700 dark:text-gray-300">邮件通知</label>
              <div class="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" id="email_notification" checked class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-600 border-4 appearance-none cursor-pointer">
                <label for="email_notification" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
              </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">当服务状态变更或出现错误时发送邮件通知</p>
          </div>
          <div class="mb-4">
            <div class="flex items-center justify-between">
              <label for="sms_notification" class="text-sm font-medium text-gray-700 dark:text-gray-300">短信通知</label>
              <div class="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" id="sms_notification" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-600 border-4 appearance-none cursor-pointer">
                <label for="sms_notification" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
              </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">当服务状态变更或出现错误时发送短信通知</p>
          </div>
          <div class="mb-4">
            <label for="notification_email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">通知邮箱</label>
            <input type="email" id="notification_email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" value="alerts@example.com">
          </div>
          <div class="mb-4">
            <label for="notification_phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">通知手机号</label>
            <input type="tel" id="notification_phone" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" value="+86 13800138000">
          </div>
          <div class="flex justify-end">
            <button class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
              保存设置
            </button>
          </div>
        </div>
      </div>

      <!-- 安全设置 -->
      <div class="bg-white dark:bg-gray-800 rounded-custom shadow overflow-hidden transition-colors duration-300">
        <div class="px-6 py-4 border-b dark:border-gray-700">
          <h3 class="text-lg font-medium dark:text-white">安全设置</h3>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <div class="flex items-center justify-between">
              <label for="two_factor_auth" class="text-sm font-medium text-gray-700 dark:text-gray-300">两步验证</label>
              <div class="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" id="two_factor_auth" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-600 border-4 appearance-none cursor-pointer">
                <label for="two_factor_auth" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
              </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">启用两步验证以提高账户安全性</p>
          </div>
          <div class="mb-4">
            <div class="flex items-center justify-between">
              <label for="api_access_control" class="text-sm font-medium text-gray-700 dark:text-gray-300">API访问控制</label>
              <div class="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" id="api_access_control" checked class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-gray-600 border-4 appearance-none cursor-pointer">
                <label for="api_access_control" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
              </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">限制API访问来源IP</p>
          </div>
          <div class="mb-4">
            <label for="allowed_ips" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">允许的IP地址</label>
            <textarea id="allowed_ips" rows="3" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">192.168.1.0/24
10.0.0.0/8
127.0.0.1</textarea>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">每行一个IP地址或CIDR格式</p>
          </div>
          <div class="mb-4">
            <label for="session_timeout" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">会话超时时间</label>
            <select id="session_timeout" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option value="15">15分钟</option>
              <option value="30" selected>30分钟</option>
              <option value="60">1小时</option>
              <option value="120">2小时</option>
              <option value="240">4小时</option>
              <option value="480">8小时</option>
            </select>
          </div>
          <div class="flex justify-end">
            <button class="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
              保存设置
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// 系统设置页面
</script>

<style scoped>
.rounded-custom {
  border-radius: 12px;
}
.toggle-checkbox:checked {
  right: 0;
  border-color: #3b82f6;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #3b82f6;
}
.toggle-label {
  transition: background-color 0.2s ease;
}
</style>