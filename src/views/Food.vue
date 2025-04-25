<script setup>
import { ref, onMounted, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Leaflet 地圖初始化與控制
const currentRegion = ref('新宿Shinjuku')
const regions = ['新宿Shinjuku', '澀谷Shibuya', '麻布區Nishiazabu', '千代田區Chiyoda City','港區Minato City','淺草台東區Taito City','文京區Bunkyo City','人形町區Chuo City']

const expanded = ref({})
regions.forEach(region => {
  expanded.value[region] = { Bbq: true, Noodles: true, Dessert: true, Breakfast: true, Sushi: true, Sukiyaki: true }
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
  setTimeout(() => {
    map.value.invalidateSize()
  }, 500)
})

watch(currentRegion, (newRegion) => {
  const coords = regionCoords[newRegion]
  if (map.value && marker.value) {
    map.value.setView([coords.lat, coords.lng], 14)
    marker.value.setLatLng([coords.lat, coords.lng])
    setTimeout(() => {
      map.value.invalidateSize()
    }, 300)
  }
})

function flyToRestaurant(lat, lng, name) {
  if (map.value) {
    map.value.flyTo([lat, lng], 17, {
      animate: true,
      duration: 1
    })
    if (marker.value) {
      marker.value.setLatLng([lat, lng])
      marker.value.bindPopup(`<b>${name}</b>`).openPopup()
    }
  }
}

import { fooddata as foodData } from '@/data/foodData.js'
const defaultImg = 'https://via.placeholder.com/300x200?text=Coming+Soon'
</script>

<template>
  <!-- Your template content goes here -->
</template>

<style scoped>
#region-buttons {
  margin-bottom: 20px;
}
.region-buttons button {
  margin-right: 8px;
  padding: 6px 14px;
  background: white;
  border: 1px solid #f6d5d8;
  color: #f6d5d8;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.region-buttons button.active,
.region-buttons button:hover {
  background-color: #a6dce3;
  color: white;
  border-color: #a6dce3;
}

.food-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.food-card {
  border: 1px solid #f6d5d8;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
.img-single {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
}
.img-multi {
  height: 120px;
  border-radius: 8px;
  flex-shrink: 0;
  scroll-snap-align: start;
  object-fit: cover;
}
.scroll-imgs {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin-bottom: 10px;
  scroll-snap-type: x mandatory;
}
.food-card a {
  margin-top: 10px;
  display: inline-block;
  color: #a6dce3;
  border: 1px solid #a6dce3;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  transition: all 0.3s ease;
}
.food-card a:hover {
  background-color: #a6dce3;
  color: white;
}
.upcoming {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
}
#map {
  width: 100%;
  height: 400px;
  margin-top: 30px;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>