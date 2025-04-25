<template>
  <div class="schedule-container">
    <h2>行程表</h2>

    <div class="days-switch">
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
        class="timeline-item"
        v-for="(event, index) in schedule[currentDay]"
        :key="index"
      >
        <div class="time">{{ event.time }}</div>
        <div class="content-card">
          <h3>{{ event.title }}</h3>
          <p>{{ event.desc }}</p>
          <button
            v-if="event.lat && event.lng"
            @click.stop="openGoogleMaps(event.lat, event.lng)"
            class="nav-btn"
          >
            Google導航
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const schedule = ref({
  'Day 1': [
    {
      time: '09:00',
      title: '早餐：上島咖啡',
      desc: '品嚐道地日式早餐',
      lat: 35.6895,
      lng: 139.6917
    },
    {
      time: '10:30',
      title: '東京巨蛋城',
      desc: '遊樂園與購物中心',
      lat: 35.7056,
      lng: 139.7519
    },
    {
      time: '13:00',
      title: '午餐：利久牛舌',
      desc: '仙台人氣牛舌專賣店',
      lat: 35.709,
      lng: 139.753
    }
  ],
  'Day 2': [
    {
      time: '09:30',
      title: '早餐：便利商店咖啡',
      desc: '簡單快速出發',
      lat: 35.6905,
      lng: 139.7000
    },
    {
      time: '11:00',
      title: '小石川植物園',
      desc: '自然生態之旅',
      lat: 35.718,
      lng: 139.744
    },
    {
      time: '14:00',
      title: '六義園',
      desc: '庭園漫步',
      lat: 35.715,
      lng: 139.748
    }
  ]
})

const days = Object.keys(schedule.value)
const currentDay = ref(days[0])

const openGoogleMaps = (lat, lng) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
  window.open(url, '_blank')
}
</script>

<style scoped>
.schedule-container {
  padding: 20px;
}
.days-switch {
  margin-bottom: 20px;
}
.days-switch button {
  margin: 5px;
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  background-color: #eee;
  cursor: pointer;
}
.days-switch button.active {
  background-color: #7bdacc;
  color: white;
}
.timeline {
  position: relative;
  margin: 20px 0;
  border-left: 4px solid #cce3dc;
}
.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 20px;
}
.timeline-item::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 8px;
  width: 16px;
  height: 16px;
  background-color: #7bdacc;
  border-radius: 50%;
  border: 2px solid white;
}
.time {
  font-weight: bold;
  color: #555;
}
.content-card {
  background: #fff;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-top: 5px;
}
.nav-btn {
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.nav-btn:hover {
  background-color: #3367d6;
}
</style>