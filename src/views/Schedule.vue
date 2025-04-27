<script setup>
import { ref } from 'vue'

// 現在選到哪一天
const currentDay = ref('Day 1')

// Days 列表
const days = ['Day 1', 'Day 2']

// 每一天的行程時間軸
const schedule = {
  'Day 1': [
    {
      time: '09:00',
      title: '上島咖啡',
      description: '品嚐道地日式早餐',
      mapLink: 'https://maps.app.goo.gl/你的上島咖啡網址'
    },
    {
      time: '10:30',
      title: '東京巨蛋城',
      description: '遊樂園與購物中心',
      mapLink: 'https://maps.app.goo.gl/你的東京巨蛋城網址'
    },
    {
      time: '13:00',
      title: '利久牛舌',
      description: '仙台人氣牛舌專賣店',
      mapLink: 'https://maps.app.goo.gl/你的利久牛舌網址'
    },
  ],
  'Day 2': [
    {
      time: '09:30',
      title: '晴空塔',
      description: '眺望東京景色',
      mapLink: 'https://maps.app.goo.gl/你的晴空塔網址'
    },
    {
      time: '11:00',
      title: '淺草寺',
      description: '雷門拍照打卡',
      mapLink: 'https://maps.app.goo.gl/你的淺草寺網址'
    }
  ]
}
</script>

<template>
  <div class="timeline-wrapper">
    <h2>行程規劃</h2>

    <!-- Day1 Day2 切換按鈕 -->
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

    <!-- 時間軸 -->
    <div class="timeline">
      <div v-for="(item, index) in schedule[currentDay]" :key="index" class="timeline-item">
        <div class="time">{{ item.time }}</div>
        <div class="content">
          <a :href="item.mapLink" target="_blank" class="place">{{ item.title }}</a>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-wrapper {
  padding: 20px;
}
.day-buttons {
  margin-bottom: 20px;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-left: 3px solid #f6d5d8;
  padding-left: 20px;
}

.timeline-item {
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 5px;
  width: 14px;
  height: 14px;
  background-color: #f6d5d8;
  border-radius: 50%;
}

.time {
  font-weight: bold;
  color: #a6dce3;
}

.content {
  margin-left: 10px;
}

.place {
  font-size: 18px;
  font-weight: bold;
  color: #f78fb3;
  text-decoration: none;
}

.place:hover {
  text-decoration: underline;
}

.description {
  font-size: 14px;
  color: #666;
}
</style>
