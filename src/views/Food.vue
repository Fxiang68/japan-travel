<script setup>
import { ref, onMounted } from 'vue'

// 圖片匯入
import terraceImg from '../assets/29terrace.png'
import udonImg from '../assets/udon.png'
import udon2Img from '../assets/udon2.png'
import harbsImg from '../assets/harbs.png'
import afuriImg from '../assets/afuri.png'
import lemonImg from '../assets/lemon.png'
import lamanImg from '../assets/laman.png'
import eggImg from '../assets/egg.png'
import bbqImg from '../assets/bbq.png'
import dountImg from '../assets/dount.png'
import MMImg from '../assets/MM.png'
import riceImg from '../assets/rice.png'
import rice2Img from '../assets/rice2.png'
import cakeImg from '../assets/cake.png'
import coffee1 from '../assets/coffee1.png'
import coffee2 from '../assets/coffee2.png'

const coffeeImgs = [coffee1, coffee2]
const defaultImg = 'https://via.placeholder.com/300x200?text=Coming+Soon'

const currentRegion = ref('新宿Shinjuku')
const regions = ['新宿Shinjuku', '澀谷Shibuya', '麻布區Minato', '千代田區Minato']

const expanded = ref({
  新宿Shinjuku: { bbq: true, noodles: true, dessert: true, breakfast: true },
  澀谷Shibuya: { bbq: true, noodles: true, rice: true, dessert: true },
  麻布區Minato: { bbq: true, noodles: true, rice: true, dessert: true },
  千代田區Minato: { bbq: true, noodles: true, rice: true, dessert: true }
})

// 簡化假地圖初始化
onMounted(() => {
  if (window.google && window.google.maps) {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 35.6895, lng: 139.6917 },
      zoom: 13
    })
    new google.maps.Marker({
      position: { lat: 35.6895, lng: 139.6917 },
      map,
      title: '東京'
    })
  }
})

const foodData = {
  新宿Shinjuku: {
    bbq: [
      { img: terraceImg, name: '燒肉 29 Terrace', desc: '高質感和牛吃到飽套餐，視覺與味覺雙享受！', url: 'https://maps.app.goo.gl/7xvk3Q1C68tT3f226' },
      { img: lemonImg, name: '東京牛舌の檸檬', desc: '新宿燒肉 厚切牛舌超人氣！', url: 'https://maps.app.goo.gl/odUJCcKZPaDd9UQ98' }
    ],
    noodles: [
      { img: udonImg, name: 'うどん 慎', desc: '彈牙手打烏龍麵，排隊也值得一試的超人氣名店！', url: 'https://maps.app.goo.gl/tuxUKT9fWNzsTJQe6' },
      { img: afuriImg, name: 'AFURI 新宿', desc: 'AFURI阿夫利鹽柚子拉麵是多人推薦的東京美食', url: 'https://maps.app.goo.gl/sXucYTsqfkDVuxMJ7' }
    ],
    dessert: [
      { img: harbsImg, name: 'HARBS LUMINE EST新宿店', desc: '大人氣的水果千層蛋糕甜點', url: 'https://maps.app.goo.gl/Fte6hGwsc1QB1zfk6' }
    ],
    breakfast: [
      { img: eggImg, name: 'eggslut Shinjuku Southern Terrace', desc: '新宿早餐首選', url: 'https://maps.app.goo.gl/d4qr3JJWewF9E5PH9' }
    ]
  }
  // 其餘略...
}
</script>

<template>
  <div style="padding: 20px;">
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

    <div v-for="(categories, region) in foodData" v-show="currentRegion === region">
      <h3>{{ region }} 美食</h3>
      <div v-for="(items, category) in categories" :key="category">
        <h4
          @click="expanded[region][category] = !expanded[region][category]"
          style="cursor: pointer;"
        >
          🍽 {{ category }} {{ expanded[region][category] ? '▾' : '▸' }}
        </h4>

        <div v-if="expanded[region][category]" class="food-container">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="food-card"
            :class="{ upcoming: !item.name || !item.url }"
          >
            <div v-if="item.multiple" class="scroll-imgs">
              <img v-for="(img, i) in item.img" :key="i" :src="img" class="img-multi" />
            </div>
            <img v-else :src="item.img || defaultImg" class="img-single" />
            <h3>{{ item.name || '敬請期待' }}</h3>
            <p>{{ item.desc || '更多資訊即將公開' }}</p>
            <a v-if="item.url" :href="item.url" target="_blank">查看 Google 地圖</a>
          </div>
        </div>
      </div>

      <!-- 地圖容器 -->
      <div id="map"></div>
    </div>
  </div>
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
