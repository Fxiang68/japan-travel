<script setup>
import { ref, onMounted, watch } from 'vue'
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


const expandedCategories = ref({})

const isAllExpanded = ref(true)

function toggleAllCategories(region) {
  const categories = Object.keys(foodData[region] || {})
  categories.forEach(category => {
    const key = `${region}-${category}`
    expandedCategories.value[key] = isAllExpanded.value
  })
  isAllExpanded.value = !isAllExpanded.value
}


function toggleCategory(region, category) {
  const key = `${region}-${category}`
  expandedCategories.value[key] = !expandedCategories.value[key]
}
function isExpanded(region, category) {
  const key = `${region}-${category}`
  return expandedCategories.value[key] ?? true
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

const foodData = {
  '新宿Shinjuku': {
    bbq: [
      { img: terraceImg, name: '燒肉 29 Terrace', desc: '高質感和牛吃到飽套餐，視覺與味覺雙享受！', url: 'https://maps.app.goo.gl/7xvk3Q1C68tT3f226', lat: 35.6917, lng: 139.7016 },
      { img: lemonImg, name: '東京牛舌の檸檬', desc: '新宿燒肉 厚切牛舌超人氣！', url: 'https://maps.app.goo.gl/odUJCcKZPaDd9UQ98', lat: 35.6923, lng: 139.7038 }
    ],
    noodles: [
      { img: udonImg, name: 'うどん 慎', desc: '彈牙手打烏龍麵，排隊也值得一試的超人氣名店！', url: 'https://maps.app.goo.gl/tuxUKT9fWNzsTJQe6', lat: 35.6912, lng: 139.6995 },
      { img: afuriImg, name: 'AFURI 新宿', desc: 'AFURI阿夫利鹽柚子拉麵是多人推薦的東京美食', url: 'https://maps.app.goo.gl/sXucYTsqfkDVuxMJ7', lat: 35.6907, lng: 139.7009 }
    ],
    dessert: [
      { img: harbsImg, name: 'HARBS LUMINE EST新宿店', desc: '大人氣的水果千層蛋糕甜點', url: 'https://maps.app.goo.gl/Fte6hGwsc1QB1zfk6', lat: 35.6916, lng: 139.7023 }
    ],
    breakfast: [
      { img: eggImg, name: 'eggslut Shinjuku Southern Terrace', desc: '新宿早餐首選', url: 'https://maps.app.goo.gl/d4qr3JJWewF9E5PH9', lat: 35.6889, lng: 139.7005 }
    ]
  },
  '澀谷Shibuya': {
    bbq: [
      { img: MMImg, name: 'Kushiyaki Meat Man', desc: '精緻串燒的時尚居酒屋', url: 'https://maps.app.goo.gl/ZX9fg6qpBGffgkVr6', lat: 35.6591, lng: 139.7036 }
    ],
    noodles: [
      { img: udon2Img, name: 'Yamashita Honki Udon', desc: '創意奶油明太子起司烏龍麵推薦', url: 'https://maps.app.goo.gl/4mUmo5td4NjaD19A8', lat: 35.6608, lng: 139.7042 }
    ],
    rice: [
      { img: riceImg, name: 'かつお食堂', desc: '涉谷超人氣柴魚片飯專門店', url: 'https://maps.app.goo.gl/ZmZWL1EfUn5S1wug7', lat: 35.6623, lng: 139.7031 }
    ],
    dessert: [
      { img: coffeeImgs[0], name: 'HATTO COFFEE 咖啡&簡餐', desc: '神宮前好喝咖啡，還有客製化3D奶泡', url: 'https://maps.app.goo.gl/ncX7DQUqx334JnvU6', lat: 35.6679, lng: 139.7126 },
      { img: dountImg, name: "I'm donut ?", desc: '生甜甜圈紅到東京', url: 'https://maps.app.goo.gl/y1nW1S2Bp3yaJssW8', lat: 35.6593, lng: 139.7025 },
      { img: cakeImg, name: 'Afternoon Tea •LOVE & TABLE', desc: '日本人氣甜點店', url: 'https://maps.app.goo.gl/qnx58rybf9K8YgUu8', lat: 35.6621, lng: 139.7030 }
    ]
  },
  '麻布區Nishiazabu': {
    bbq: [{ img: null, name: null, desc: null }],
    noodles: [{ img: null, name: null, desc: null }],
    rice: [{ img: rice2Img, name: 'Kogaiken', desc: '明星都愛吃的日本人靈魂美食蛋包飯', url: 'https://maps.app.goo.gl/Fd6toHbZq8VDFQCS6', lat: 35.6627, lng: 139.7028 }],
    dessert: [{ img: null, name: null, desc: null }]
  },
  '千代田區Chiyoda City': {
    bbq: [{ img: popoImg, name: 'PATISSERIE TEN&', desc: '東京泡芙天花板', url: 'https://maps.app.goo.gl/f2pzHGDGNxT67WBD9', lat: 35.6930, lng: 139.7530 }],
    noodles: [{ img: null, name: null, desc: null }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: null, name: null, desc: null }]
  },
  '港區Minato City': {
    bbq: [
      { img: bbqImg, name: '爐端武藏', desc: '人氣爐端燒居酒屋', url: 'https://maps.app.goo.gl/rWVskEE77DjQPhJa7', lat: 35.6580, lng: 139.7514 },
      { img: bbq2Img, name: '燒肉JUMBO', desc: '白金黑毛和牛專賣', url: 'https://maps.app.goo.gl/psVrbXnBvrNdkFXE6', lat: 35.6585, lng: 139.7520 },
      { img: bbq3Img, name: '燒肉Kunimoto新館', desc: '多次獲獎名店', url: 'https://maps.app.goo.gl/nMZLTEBUnZBz2gkv8', lat: 35.6578, lng: 139.7505 }
    ],
    noodles: [{ img: lamanImg, name: '富喜製麵研究所 六本木店', desc: '東京拉麵老字號', url: 'https://maps.app.goo.gl/ogH4kbGN56J6sSSa8', lat: 35.6620, lng: 139.7320 }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: null, name: null, desc: null }]
  },
  '淺草台東區Taito City': {
    bbq: [{ img: null, name: null, desc: null }],
    noodles: [{ img: laman2Img, name: '拉麵鴨to蔥', desc: '極致鴨香拉麵', url: 'https://maps.app.goo.gl/yaRBD6u62R6ViRz7A', lat: 35.7145, lng: 139.7785 }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: mochaImg, name: '八十八良葉舍 淺草', desc: '抹茶甜點推薦', url: 'https://maps.app.goo.gl/cEMfiaPgp4VAkpoAA', lat: 35.7132, lng: 139.7778 }]
  },
  '文京區Bunkyo City': {
    bbq: [{ img: null, name: null, desc: null }],
    noodles: [{ img: null, name: null, desc: null }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: null, name: null, desc: null }],
    sushi: [{ img: sushiImg, name: 'Sushi Edo Fuji', desc: '巨大海鮮丼飯', url: 'https://maps.app.goo.gl/1UB5frDujraifDPi9', lat: 35.7089, lng: 139.7670 }]
  },
  '人形町區Chuo City': {
    bbq: [{ img: null, name: null, desc: null }],
    noodles: [{ img: null, name: null, desc: null }],
    rice: [{ img: null, name: null, desc: null }],
    dessert: [{ img: null, name: null, desc: null }],
    sukiyaki: [
      { img: shisaImg, name: '人形町今半 壽喜燒', desc: '東京必吃壽喜燒名店', url: 'https://maps.app.goo.gl/Gn4ny3yh9BLzAp9Z7', lat: 35.6867, lng: 139.7818 },
      { img: shisa2Img, name: '熊本あか牛しゃぶしゃぶ 甲梅 火鍋', desc: '熊本赤牛火鍋專門店', url: 'https://maps.app.goo.gl/v3ERi35Qtq2v9BMf9', lat: 35.6870, lng: 139.7810 }
    ]
  }
}
</script>
<template>
  <div class="container">
    <h2>地區切換</h2>

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

    <div v-if="foodData[currentRegion]" class="region-content">
      <button class="toggle-all-btn" @click="toggleAllCategories(currentRegion)">
        {{ isAllExpanded ? "全部收合" : "全部展開" }}
      </button>
      <h3>{{ currentRegion }} 美食推薦</h3>
      <button class="toggle-all-btn" @click="toggleAllCategories(currentRegion)">
        {{ isAllExpanded ? "全部收合" : "全部展開" }}
      </button>

      <div v-for="(items, category) in foodData[currentRegion]" :key="category" class="category-section">
        <h4 class="category-title">🍽 {{ category }}</h4>

        <div class="food-grid">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="food-card"
            :class="{ upcoming: !item.name }"
            @click="item.lat && item.lng && flyToRestaurant(item.lat, item.lng, item.name)"
          >
            <img
              :src="item.img || defaultImg"
              :class="Array.isArray(item.img) ? 'img-multi' : 'img-single'"
              alt="food"
            />
            <h5>{{ item.name || '敬請期待' }}</h5>
            <p>{{ item.desc || '更多資訊即將公開' }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p style="color: red;">⚠️ 找不到 {{ currentRegion }} 的美食資料，請稍後再試。</p>
    </div>

    <h4 class="map-title">{{ currentRegion }} 地區地圖</h4>
    <div id="map"></div>
  </div>
</template>

<style scoped>
/* 外圍 */
.container {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 地區切換按鈕 */
.region-buttons {
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.region-buttons button {
  padding: 8px 18px;
  border: 1px solid #f6d5d8;
  background: #ffffff;
  color: #f6d5d8;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
}
.region-buttons button.active,
.region-buttons button:hover {
  background: #a6dce3;
  color: white;
  border-color: #a6dce3;
}

/* 區域標題 */
.region-content {
  margin-top: 30px;
}
.category-section {
  margin-bottom: 40px;
}
.category-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin: 20px 0 15px;
}

/* 食物卡片 */
.food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
}
.food-card {
  background: #ffffff;
  border: 1px solid #f6d5d8;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: 0.3s;
  cursor: pointer;
}
.food-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

/* 圖片處理 */
.img-single {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
}
.img-multi {
  height: 160px;
  border-radius: 10px;
  object-fit: cover;
}
.scroll-imgs {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin-bottom: 10px;
  scroll-snap-type: x mandatory;
}

/* 即將推出 */
.upcoming {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
}

/* 地圖 */
.map-title {
  margin-top: 50px;
  font-size: 22px;
}
#map {
  width: 100%;
  height: 400px;
  margin-top: 20px;
  border-radius: 12px;
  border: 1px solid #ccc;
}

.toggle-icon {
  font-size: 16px;
  color: #aaa;
  transition: transform 0.2s ease;
}


.toggle-all-btn {
  background-color: #f6d5d8;
  color: white;
  border: none;
  padding: 8px 16px;
  margin-bottom: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.toggle-all-btn:hover {
  background-color: #e2b7bb;
}

</style>
