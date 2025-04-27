<script setup>
import { ref } from 'vue'

// 地區選單
const currentDay = ref('Day 1')
const days = ['Day 1', 'Day 2']

// 行程資料
const schedules = {
  'Day 1': [
    {
      time: '09:00',
      emoji: '☕️',
      title: '上島咖啡',
      description: '品嚐道地日式早餐',
      link: 'https://maps.app.goo.gl/xxx1'
    },
    {
      time: '10:30',
      emoji: '🎡',
      title: '東京巨蛋城',
      description: '遊樂園與購物中心',
      link: 'https://maps.app.goo.gl/xxx2'
    },
    {
      time: '13:00',
      emoji: '🥩',
      title: '利久牛舌',
      description: '仙台人氣牛舌專賣店',
      link: 'https://maps.app.goo.gl/xxx3'
    }
  ],
  'Day 2': []
}

// 根據時間設定線條顏色
function getLineColor(time) {
  const [hour] = time.split(':').map(Number)
  if (hour < 12) return '#facc15' // 黃色
  if (hour < 18) return '#60a5fa' // 藍色
  return '#f472b6'                // 深粉色
}
</script>

<template>
  <div style="padding: 20px;">
    <h2>行程規劃 - {{ currentDay }}</h2>

    <div class="day-buttons">
      <button
        v-for="day in days"
        :key="day"
        :class="{ active: currentDay === day }"
        @click="currentDay = day"
      >
        {{ day }}
      </button>
    </div>

    <div class="timeline">
      <div
        v-for="(item, index) in schedules[currentDay]"
        :key="index"
        class="timeline-item"
      >
        <div
          class="timeline-line"
          :style="{ backgroundColor: getLineColor(item.time) }"
        ></div>
        <div class="timeline-content">
          <div class="time">{{ item.time }}</div>
          <a :href="item.link" target="_blank" class="title-link">
            <div class="title">
              {{ item.emoji }} {{ item.title }}
            </div>
          </a>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.day-buttons {
  margin-bottom: 20px;
}
.day-buttons button {
  margin-right: 10px;
  padding: 6px 14px;
  background: white;
  border: 1px solid #f6d5d8;
  color: #f6d5d8;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.day-buttons button.active,
.day-buttons button:hover {
  background-color: #a6dce3;
  color: white;
}

/* 時間軸整體 */
.timeline {
  margin-top: 20px;
  position: relative;
}
.timeline-item {
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;
}
.timeline-line {
  position: absolute;
  top: 0;
  left: 18px;
  width: 4px;
  height: 100%;
  background-color: #ddd;
  z-index: 1;
  border-radius: 2px;
}
.timeline-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10px;
  width: 16px;
  height: 16px;
  background-color: #f87171; /* 紅色中心 */
  border: 4px solid #fff;    /* 白色外框 */
  border-radius: 50%;
  z-index: 2;
}

.timeline-content {
  background: none;
  padding: 0;
}
.time {
  color: #60a5fa;
  font-weight: bold;
  font-size: 16px;
}
.title-link {
  text-decoration: none;
}
.title {
  margin: 8px 0 4px;
  font-size: 18px;
  font-weight: bold;
  color: #f472b6;
}
.title:hover {
  text-decoration: underline;
}
.description {
  margin-bottom: 10px;
  color: #666;
  font-size: 14px;
}
</style>
