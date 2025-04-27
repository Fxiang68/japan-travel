<script setup>
import { ref } from 'vue'

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
      link: 'https://maps.app.goo.gl/xxx'
    },
    {
      time: '10:30',
      emoji: '🎡',
      title: '東京巨蛋城',
      description: '遊樂園與購物中心',
      link: 'https://maps.app.goo.gl/xxx'
    },
    {
      time: '13:00',
      emoji: '🥩',
      title: '利久牛舌',
      description: '仙台人氣牛舌專賣店',
      link: 'https://maps.app.goo.gl/xxx'
    }
  ],
  'Day 2': [
    // 之後可以加 Day2 的資料
  ]
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
        class="timeline-card"
      >
        <div class="time">{{ item.time }}</div>
        <div class="location">
          <span class="emoji">{{ item.emoji }}</span>
          <span class="title">{{ item.title }}</span>
        </div>
        <div class="description">{{ item.description }}</div>
        <a :href="item.link" target="_blank" class="map-link">查看 Google 地圖</a>
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

.timeline {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.timeline-card {
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  text-align: left;
}
.time {
  color: #a6dce3;
  font-weight: bold;
  font-size: 16px;
}
.location {
  margin: 8px 0 4px;
  font-size: 18px;
  font-weight: bold;
  color: #f2859a;
}
.emoji {
  margin-right: 8px;
}
.description {
  margin-bottom: 10px;
  color: #666;
  font-size: 14px;
}
.map-link {
  display: inline-block;
  padding: 6px 12px;
  background-color: #f6d5d8;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  font-size: 13px;
}
.map-link:hover {
  background-color: #f2859a;
}
</style>
