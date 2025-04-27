<script setup>
import { ref } from 'vue'

// 選擇的天數
const currentDay = ref('Day 1')

// 目前展開的地點（儲存名稱）
const expandedPlace = ref('')

// Days 列表
const days = ['Day 1', 'Day 2']

// 每一天行程
const schedule = {
  'Day 1': [
    {
      time: '09:00',
      emoji: '☕',
      title: '上島咖啡',
      description: '品嚐道地日式早餐',
      detail: '上島咖啡是日本人氣連鎖店，主打復古氛圍與厚片吐司。',
      mapLink: 'https://maps.app.goo.gl/你的上島咖啡網址'
    },
    {
      time: '10:30',
      emoji: '🎡',
      title: '東京巨蛋城',
      description: '遊樂園與購物中心',
      detail: '擁有大型摩天輪、購物中心與溫泉設施，非常適合全家一日遊！',
      mapLink: 'https://maps.app.goo.gl/你的東京巨蛋城網址'
    },
    {
      time: '13:00',
      emoji: '🥩',
      title: '利久牛舌',
      description: '仙台人氣牛舌專賣店',
      detail: '厚切炭烤牛舌搭配山藥泥飯，一次吃到東北正宗風味。',
      mapLink: 'https://maps.app.goo.gl/你的利久牛舌網址'
    },
  ],
  'Day 2': [
    {
      time: '09:30',
      emoji: '🗼',
      title: '晴空塔',
      description: '眺望東京景色',
      detail: '晴空塔高達634公尺，可以欣賞東京全景，是必去地標！',
      mapLink: 'https://maps.app.goo.gl/你的晴空塔網址'
    },
    {
      time: '11:00',
      emoji: '🏯',
      title: '淺草寺',
      description: '雷門拍照打卡',
      detail: '日本最古老的寺廟之一，有超人氣雷門大紅燈籠。',
      mapLink: 'https://maps.app.goo.gl/你的淺草寺網址'
    }
  ]
}

// 點地點 → 展開或收合
function togglePlace(place) {
  expandedPlace.value = expandedPlace.value === place ? '' : place
}
</script>

<template>
  <div class="timeline-wrapper">
    <!-- 固定 Header -->
    <div class="fixed-header">
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
    </div>

    <!-- 時間軸 -->
    <div class="timeline">
      <div
        v-for="(item, index) in schedule[currentDay]"
        :key="index"
        class="timeline-item"
      >
        <div class="circle"></div>
        <div class="time">{{ item.time }}</div>

        <div class="content">
          <a href="javascript:void(0)" class="place" @click="togglePlace(item.title)">
            {{ item.emoji }} {{ item.title }}
          </a>
          <p class="description">{{ item.description }}</p>

          <!-- 展開更多細節 -->
          <div v-if="expandedPlace === item.title" class="detail-box">
            <p>{{ item.detail }}</p>
            <a :href="item.mapLink" target="_blank" class="map-link">查看 Google 導航 ➔</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-wrapper {
  padding: 20px;
  background: #fff5f8;
  border-radius: 12px;
  margin-top: 100px;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 10px 20px;
  z-index: 999;
  border-bottom: 1px solid #f6d5d8;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.fixed-header h2 {
  font-size: 22px;
  margin: 0 0 10px;
  color: #444;
}

.day-buttons {
  display: flex;
  gap: 10px;
}
.day-buttons button {
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
  position: relative;
  margin-top: 20px;
  border-left: 2px dashed #f6d5d8;
  padding-left: 20px;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.circle {
  position: absolute;
  left: -10px;
  top: 3px;
  width: 12px;
  height: 12px;
  border: 2px solid #f6d5d8;
  background: #fff;
  border-radius: 50%;
}

.time {
  font-size: 14px;
  font-weight: bold;
  color: #a6dce3;
}

.content {
  margin-top: 5px;
  margin-left: 10px;
}

.place {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color: #f78fb3;
  text-decoration: none;
  margin-bottom: 4px;
  cursor: pointer;
}

.place:hover {
  text-decoration: underline;
}

.description {
  font-size: 14px;
  color: #666;
}

.detail-box {
  margin-top: 8px;
  background: #ffeef1;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  color: #444;
}

.map-link {
  display: inline-block;
  margin-top: 8px;
  color: #a6dce3;
  text-decoration: none;
  font-weight: bold;
}

.map-link:hover {
  text-decoration: underline;
}
</style>
