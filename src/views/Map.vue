<script setup>
import { ref } from 'vue'

// 現在選到的地點
const currentMap = ref('民宿')

// 所有地點對應的 Google Maps 連結
const maps = {
  民宿: "https://www.google.com/maps/embed?...",
  淺草寺: "https://www.google.com/maps/embed?...",
  銀座: "https://www.google.com/maps/embed?...",
  澀谷: "https://www.google.com/maps/embed?...",
  新宿: "https://www.google.com/maps/embed?...",
  橫濱: "https://www.google.com/maps/embed?...",
  鎌倉: "https://www.google.com/maps/embed?...",
  河口湖: "https://www.google.com/maps/embed?...",
  成田機場: "https://www.google.com/maps/embed?..."
}
</script>

<template>
  <div class="page-wrapper">
    <div style="padding: 20px;">
      <h2>旅遊地圖導覽</h2>

      <!-- 地點切換按鈕 -->
      <div class="map-buttons">
        <button
          v-for="(link, name) in maps"
          :key="name"
          :class="{ active: currentMap === name }"
          @click="currentMap = name"
        >
          {{ name }}
        </button>
      </div>

      <!-- 顯示地圖 -->
      <div class="map-container">
        <iframe
          width="100%"
          height="400"
          style="border:0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          :src="maps[currentMap]"
        ></iframe>
      </div>
    </div>

    <!-- 🖋️ Footer 正確放在這裡 -->
    <footer class="footer">
      © 作者 Wendy Fang
    </footer>
  </div>
</template>

<style scoped>
.map-buttons {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.map-buttons button {
  padding: 8px 14px;
  background: white;
  border: 1px solid #f6d5d8;
  color: #f6d5d8;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.map-buttons button.active,
.map-buttons button:hover {
  background-color: #a6dce3;
  color: white;
}

.map-container {
  max-width: 100%;
}
.footer {
  margin-top: auto;
  padding: 12px 0;
  text-align: center;
  font-size: 14px;
  color: #aaa;
  border-top: 1px solid #f6d5d8;
} 
</style>
