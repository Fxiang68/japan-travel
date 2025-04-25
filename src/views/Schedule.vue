<template>
  <div class="schedule-container">
    <h2>行程表</h2>
    <div class="timeline">
      <div
        class="timeline-item"
        v-for="(event, index) in schedule"
        :key="index"
      >
        <div class="time">{{ event.time }}</div>
        <div class="content-card">
          <img
            v-if="event.img"
            :src="event.img"
            alt="event preview"
            class="preview-img"
          />
          <h3>{{ event.title }}</h3>
          <p>{{ event.desc }}</p>
          <button
            v-if="event.lat && event.lng"
            @click="openGoogleMaps(event.lat, event.lng)"
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

const schedule = ref([
  {
    time: '09:00',
    title: '早餐：上島咖啡',
    desc: '品嚐道地日式早餐',
    img: '/images/breakfast.jpg',
    lat: 35.6895,
    lng: 139.6917
  },
  {
    time: '10:30',
    title: '東京巨蛋城',
    desc: '遊樂園與購物中心',
    img: '/images/dome.jpg',
    lat: 35.7056,
    lng: 139.7519
  },
  {
    time: '13:00',
    title: '午餐：利久牛舌',
    desc: '仙台人氣牛舌專賣店',
    img: '/images/lunch.jpg',
    lat: 35.709,
    lng: 139.753
  },
  {
    time: '15:00',
    title: '小石川植物園',
    desc: '悠閒漫步賞花草',
    img: '/images/garden.jpg',
    lat: 35.718,
    lng: 139.744
  }
])

const openGoogleMaps = (lat, lng) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
  window.open(url, '_blank')
}
</script>

<style scoped>
.schedule-container {
  padding: 20px;
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
.preview-img {
  width: 100%;
  height: auto;
  max-height: 180px;
  border-radius: 6px;
  margin-bottom: 10px;
  object-fit: cover;
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