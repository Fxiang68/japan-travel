<script setup>
import { ref } from 'vue'

const currentDay = ref('Day 1')

const schedule = {
  'Day 1': [
    { time: '09:00', event: '東京自由行' },
    { time: '10:30', event: '淺草寺' },
    { time: '11:30', transport: '搭乘銀座線前往晴空塔，約 20 分鐘' },
    { time: '12:00', event: '晴空塔' }
  ],
  'Day 2': [
    { time: '08:00', event: '迪士尼海洋一整天' }
  ],
  'Day 3': [],
  'Day 4': [],
  'Day 5': [],
  'Day 6': []
}
</script>

<template>
  <div style="padding: 20px;">
    <h2>每日行程</h2>

    <!-- 日期切換按鈕 -->
    <div class="day-buttons">
      <button
        v-for="(items, day) in schedule"
        :key="day"
        @click="currentDay = day"
        :class="{ active: currentDay === day }"
      >
        {{ day }}
      </button>
    </div>

    <!-- 時間軸 -->
    <ul class="timeline">
      <li
        v-for="item in schedule[currentDay]"
        :key="item.time + (item.event || item.transport)"
      >
        <span class="time">{{ item.time }}</span>
        <span v-if="item.event" class="event">📍 {{ item.event }}</span>
        <span v-else-if="item.transport" class="transport">🚃 {{ item.transport }}</span>
      </li>

      <li v-if="schedule[currentDay].length === 0" class="empty">
        尚無行程，歡迎填寫✍️
      </li>
    </ul>
  </div>
</template>

<style scoped>
.day-buttons {
  margin-bottom: 16px;
}
.day-buttons button {
  margin-right: 8px;
  padding: 6px 14px;
  background: white;
  border: 1px solid #f6d5d8;
  color: #f6d5d8;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.day-buttons button.active,
.day-buttons button:hover {
  background-color: #a6dce3;
  color: white;
  border-color: #a6dce3;
}

.timeline {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  border-left: 3px solid #f6d5d8;
}
.timeline li {
  position: relative;
  margin: 14px 0;
  padding-left: 20px;
}
.timeline li::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 6px;
  width: 8px;
  height: 8px;
  background-color: #f6d5d8;
  border-radius: 50%;
}
.time {
  display: inline-block;
  width: 70px;
  font-weight: bold;
  color: #333;
}
.event {
  color: #444;
}
.transport {
  color: #888;
  font-style: italic;
}
.empty {
  margin-top: 16px;
  color: #aaa;
}
</style>
