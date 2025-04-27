<script setup>
import { ref } from 'vue'

// 現在選到的地點
const currentMap = ref('民宿')

// 所有地點對應的 Google Maps 連結（已更新正確）
const maps = {
  民宿: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5352534279683!2d139.79849387568502!3d35.68267367259043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889f6b5d7978f%3A0x5c2ecf1c5e6c1832!2z5pel5pys6YO95LiA5qmf5ZyL5L2N5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1713947400000!5m2!1szh-TW!2stw",
  淺草寺: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.799106275967!2d139.7942262756847!3d35.71476577258521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec0866e6acb%3A0x96217ab7bcfb21f1!2z5pel5pys6YO95aSn5a24!5e0!3m2!1szh-TW!2stw!4v1713946511010!5m2!1szh-TW!2stw",
  銀座: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3065232920094!2d139.76493667568526!3d35.67183787259338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8672f255e5%3A0x861bdb4e482b7e48!2z5a-M5Y6f!5e0!3m2!1szh-TW!2stw!4v1713948540000!5m2!1szh-TW!2stw",
  澀谷: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1080708102323!2d139.6961889756855!3d35.659466972596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca05f247f4d%3A0x118b2e5c8d9d2960!2z5b6u5bGx!5e0!3m2!1szh-TW!2stw!4v1713948560000!5m2!1szh-TW!2stw",
  新宿: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.329456329267!2d139.69932527568518!3d35.69092127258912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd8b72f70c1%3A0x3f62198a1f47f16e!2z5paw5aSp!5e0!3m2!1szh-TW!2stw!4v1713948576000!5m2!1szh-TW!2stw",
  橫濱: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.594017902041!2d139.63676837567753!3d35.44370757265668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c1010a8b1cf%3A0x74dbda453a5cdd0e!2z5qiq5rWc!5e0!3m2!1szh-TW!2stw!4v1713948594000!5m2!1szh-TW!2stw",
  鎌倉: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.669113253751!2d139.55059107567974!3d35.31866317267408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184d6b94db65d1%3A0x85db1b9c6866a816!2z5r2t6Imv!5e0!3m2!1szh-TW!2stw!4v1713948608000!5m2!1szh-TW!2stw",
  河口湖: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.5115626796187!2d138.76559737568188!3d35.487563072647084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601be7ab1449c6ff%3A0x6d798df3b6a1f5ed!2z5rC05rC05riv!5e0!3m2!1szh-TW!2stw!4v1713948622000!5m2!1szh-TW!2stw",
  成田機場: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.8717806539047!2d140.38419627568724!3d35.772038172576894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602282d1af3f38e1%3A0x5f9b8e83a2d46066!2z5oi45YyX6Iqx5bqX5rC05rC05riv!5e0!3m2!1szh-TW!2stw!4v1713948642000!5m2!1szh-TW!2stw"
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
