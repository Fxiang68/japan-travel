<script setup>
import { ref } from 'vue'

// 圖片匯入（可多張）
import terraceImg from '../assets/29terrace.png'
import udonImg from '../assets/udon.png'
import harbsImg from '../assets/harbs.png'
import afuriImg from '../assets/afuri.png'
import lemonImg from '../assets/lemon.png'
import eggImg from '../assets/egg.png'

import coffee1 from '../assets/coffee1.png'
import coffee2 from '../assets/coffee2.png'

const coffeeImgs = [coffee1, coffee2]

const currentRegion = ref('東京')
const regions = ['東京', '新宿', '京都']

// 控制每個分類是否展開
const expanded = ref({
  bbq: true,
  noodles: true,
  dessert: true,
  breakfast: true
})
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

    <!-- 新宿 -->
    <div v-if="currentRegion === '新宿'">
      <h3>新宿美食</h3>

      <!-- 分類：燒肉 -->
      <h4 @click="expanded.bbq = !expanded.bbq" style="cursor: pointer;">🍖 燒肉 {{ expanded.bbq ? '▾' : '▸' }}</h4>
      <div class="food-container" v-if="expanded.bbq">
        <div class="food-card">
          <img :src="terraceImg" />
          <h3>燒肉 29 Terrace</h3>
          <p>高質感和牛吃到飽套餐，視覺與味覺雙享受！</p>
          <a href="https://maps.app.goo.gl/7xvk3Q1C68tT3f226" target="_blank">查看 Google 地圖</a>
        </div>

        <div class="food-card">
          <img :src="lemonImg" />
          <h3>東京牛舌の檸檬</h3>
          <p>新宿燒肉 厚切牛舌超人氣！</p>
          <a href="https://maps.app.goo.gl/odUJCcKZPaDd9UQ98" target="_blank">查看 Google 地圖</a>
        </div>
      </div>

      <!-- 分類：拉麵／烏龍麵 -->
      <h4 @click="expanded.noodles = !expanded.noodles" style="cursor: pointer;">🍜 拉麵 / 烏龍麵 {{ expanded.noodles ? '▾' : '▸' }}</h4>
      <div class="food-container" v-if="expanded.noodles">
        <div class="food-card">
          <img :src="udonImg" />
          <h3>うどん 慎</h3>
          <p>彈牙手打烏龍麵，排隊也值得一試的超人氣名店！</p>
          <a href="https://maps.app.goo.gl/qH7kNU4XGhBcdWfY9" target="_blank">查看 Google 地圖</a>
        </div>

        <div class="food-card">
          <img :src="afuriImg" />
          <h3>AFURI 新宿</h3>
          <p>AFURI阿夫利鹽柚子拉麵是多人推薦的東京美食</p>
          <a href="https://maps.app.goo.gl/sXucYTsqfkDVuxMJ7" target="_blank">查看 Google 地圖</a>
        </div>
      </div>

      <!-- 分類：甜點／咖啡 -->
      <h4 @click="expanded.dessert = !expanded.dessert" style="cursor: pointer;">🍰 甜點 / 咖啡 {{ expanded.dessert ? '▾' : '▸' }}</h4>
      <div class="food-container" v-if="expanded.dessert">
        <div class="food-card">
          <img :src="harbsImg" />
          <h3>HARBS LUMINE EST新宿店</h3>
          <p>大人氣的水果千層蛋糕甜點</p>
          <a href="https://maps.app.goo.gl/Fte6hGwsc1QB1zfk6" target="_blank">查看 Google 地圖</a>
        </div>

        <div class="food-card">
          <div class="scroll-imgs">
            <img
              v-for="(img, index) in coffeeImgs"
              :key="index"
              :src="img"
              alt="HATTO COFFEE"
            />
          </div>
          <h3>HATTO COFFEE 咖啡&簡餐</h3>
          <p>神宮前好喝咖啡，還有客製化3D奶泡</p>
          <a href="https://maps.app.goo.gl/ncX7DQUqx334JnvU6" target="_blank">查看 Google 地圖</a>
        </div>
      </div>

      <!-- 分類：早餐 -->
      <h4 @click="expanded.breakfast = !expanded.breakfast" style="cursor: pointer;">🍳 早餐 {{ expanded.breakfast ? '▾' : '▸' }}</h4>
      <div class="food-container" v-if="expanded.breakfast">
        <div class="food-card">
          <img :src="eggImg" />
          <h3>漢堡 eggslut Shinjuku Southern Terrace</h3>
          <p>新宿早餐首選</p>
          <a href="https://maps.app.goo.gl/d4qr3JJWewF9E5PH9" target="_blank">查看 Google 地圖</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.region-buttons {
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
.food-card {
  border: 1px solid #f6d5d8;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
  width: 220px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
.food-card img {
  width: 100%;
  border-radius: 10px;
}
.scroll-imgs {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin-bottom: 10px;
  scroll-snap-type: x mandatory;
}
.scroll-imgs img {
  height: 120px;
  border-radius: 8px;
  flex-shrink: 0;
  scroll-snap-align: start;
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
</style>