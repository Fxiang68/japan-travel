<script setup>
import { ref } from 'vue'
import terraceImg from '../assets/29terrace.png'
import udonImg from '../assets/udon.png'
import harbsImg from '../assets/harbs.png'








const currentRegion = ref('東京')
const regions = ['東京', '新宿', '京都']
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
      <div class="food-container">

        <!-- 店 1：燒肉 -->
        <div class="food-card">
          <img :src="terraceImg" />
          <h3>燒肉 29 Terrace</h3>
          <p>高質感和牛吃到飽套餐，視覺與味覺雙享受！</p>
          <a href="https://maps.app.goo.gl/7xvk3Q1C68tT3f226" target="_blank">查看 Google 地圖</a>
        </div>

        <!-- 店 2：うどん 慎 -->
        <div class="food-card">
          <img :src="udonImg" />
          <h3>うどん 慎</h3>
          <p>彈牙手打烏龍麵，排隊也值得一試的超人氣名店！</p>
          <a href="https://maps.app.goo.gl/qH7kNU4XGhBcdWfY9" target="_blank">查看 Google 地圖</a>
        </div>

        <div class="food-card">
          <img :src="harbsImg" />
          <h3>HARBS LUMINE EST新宿店</h3>
          <p>大人氣的水果千層蛋糕甜點</p>
          <a href="日本〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−38−1 ルミネエスト新宿 地下 ２階" target="_blank">查看 Google 地圖</a>
        </div>




      </div>
    </div>

    <!-- 京都 -->
    <div v-if="currentRegion === '京都'">
      <h3>京都美食</h3>
      <div class="food-container">
        <p>目前尚無資料，敬請期待！</p>
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
