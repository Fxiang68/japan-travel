<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// 圖片匯入
import terraceImg from '../assets/29terrace.png'
import udonImg from '../assets/udon.png'
import udon2Img from '../assets/udon2.png'
import harbsImg from '../assets/harbs.png'
import afuriImg from '../assets/afuri.png'
import lemonImg from '../assets/lemon.png'
import lamanImg from '../assets/laman.png'
import laman2Img from '../assets/laman2.png'
import eggImg from '../assets/egg.png'
import bbqImg from '../assets/bbq.png'
import bbq2Img from '../assets/bbq2.png'
import bbq3Img from '../assets/bbq3.png'
import dountImg from '../assets/dount.png'
import MMImg from '../assets/MM.png'
import riceImg from '../assets/rice.png'
import rice2Img from '../assets/rice2.png'
import cakeImg from '../assets/cake.png'
import coffee1 from '../assets/coffee1.png'
import coffee2 from '../assets/coffee2.png'
import popoImg from '../assets/popo.png'
import sushiImg from '../assets/sushi.png'
import mochaImg from '../assets/mocha.png'
import shisaImg from '../assets/shisa.png'
import shisa2Img from '../assets/shisa2.png'
import a1Img from '../assets/a1.png'

const coffeeImgs = [coffee1, coffee2]
const defaultImg = 'https://via.placeholder.com/300x200?text=Coming+Soon'

const currentRegion = ref('新宿Shinjuku')
const regions = [
  '新宿Shinjuku',
  '澀谷Shibuya',
  '麻布區Nishiazabu',
  '千代田區Chiyoda City',
  '港區Minato City',
  '淺草台東區Taito City',
  '文京區Bunkyo City',
  '人形町區Chuo City'
]

// 模擬食物與景點資料
const foodData = {
  '新宿Shinjuku': {
    '拉麵': ['一蘭拉麵', 'AFURI'],
    '咖啡': ['Blue Bottle', '星巴克']
  }
}
const attractionsData = {
  '新宿Shinjuku': {
    '展望台': ['東京都廳'],
    '神社': ['花園神社']
  }
}

const currentDataType = ref('food')
const expandedCategories = ref({})

const toggleDataType = () => {
  currentDataType.value = currentDataType.value === 'food' ? 'attractions' : 'food'
  expandedCategories.value = {}
}

const currentData = computed(() => {
  return currentDataType.value === 'food' ? foodData : attractionsData
})
const currentEmoji = computed(() => {
  return currentDataType.value === 'food' ? '🍽' : '🗼'
})

const regionCoords = {
  '新宿Shinjuku': { lat: 35.6938, lng: 139.7034 },
  '澀谷Shibuya': { lat: 35.6618, lng: 139.7041 },
  '麻布區Nishiazabu': { lat: 35.6544, lng: 139.7356 },
  '千代田區Chiyoda City': { lat: 35.6930, lng: 139.7530 },
  '港區Minato City': { lat: 35.6580, lng: 139.7514 },
  '淺草台東區Taito City': { lat: 35.7125, lng: 139.7771 },
  '文京區Bunkyo City': { lat: 35.7079, lng: 139.7661 },
  '人形町區Chuo City': { lat: 35.6867, lng: 139.7818 }
}

const map = ref(null)
const marker = ref(null)

onMounted(() => {
  const coords = regionCoords[currentRegion.value]
  map.value = L.map('map').setView([coords.lat, coords.lng], 14)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map.value)
  marker.value = L.marker([coords.lat, coords.lng]).addTo(map.value)
})

const toggleCategory = (category) => {
  expandedCategories.value[category] = !expandedCategories.value[category]
}
</script>

<template>
  <div style="padding: 20px">
    <!-- 區域切換 -->
    <div class="region-buttons">
      <button
        v-for="region in regions"
        :key="region"
        :class="{ active: currentRegion === region }"
        @click="currentRegion = region"
      >
        {{ region }}
      </button>
    </div>

    <!-- 食物/景點切換 -->
    <button @click="toggleDataType" style="margin: 20px 0;">
      切換到 {{ currentDataType === 'food' ? '景點 🗼' : '食物 🍽' }}
    </button>

    <!-- 分類顯示 -->
    <div v-if="currentData[currentRegion]">
      <div
        v-for="(items, category) in currentData[currentRegion]"
        :key="category"
        class="category-section"
      >
        <h4 class="category-title" @click="toggleCategory(category)">
          {{ currentEmoji }} {{ category }}
          <span v-if="expandedCategories[category]">⏷</span>
          <span v-else>⏵</span>
        </h4>
        <ul v-if="expandedCategories[category]">
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-section {
  margin-bottom: 15px;
}
.category-title {
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
}
.region-buttons button.active {
  font-weight: bold;
  color: white;
  background-color: #007bff;
}
</style>