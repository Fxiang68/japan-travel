<script setup>
import { ref } from 'vue'

// 地區選單
const currentDay = ref('Day 1')
const days = ['Day 1', 'Day 2','Day 3', 'Day 4', 'Day 5', 'Day 6']

// 行程資料
const schedules = {
  'Day 1': [
    {
      time: '8:30~12:30',
      emoji: '✈',
      title: 'TPE-NRT',
    },
    {
      time: '13:30',
      emoji: '📌',
      title: '淺草寺',
      description: '路線建議：地鐵「淺草站」走三分鐘 → 雷門 →  接仲見世通（邊吃邊買約0.5~1hr）  → 穿過寶藏門 → 到淺草寺參拜 → 旁邊的淺草神社',
      link: 'https://maps.app.goo.gl/Rc8wGEvB5DXgiwBE6'
    },
    {
      time: '15:30',
      emoji: '📌',
      title: '晴空塔',
      description: '從淺草走淺草站往北沿著隅田公園走大概五分鐘，新開設一條「隅田川步道（Sumida River Walk）10 分鐘就可以到晴空塔',
      link: 'https://www.tokyo-skytree.jp/cn_t/'
    },
    {
      time: '16:30',
      emoji: '📌',
      title: 'YOKAZATO',
    },
    {
      time: '18:30',
      emoji: '📌',
      title: 'Mitakayaみたかや酒場',
      link:'https://maps.app.goo.gl/s5Jmoz4rmbgrmohbA'
    },
  ],
  'Day 2': [
  {
      time: '11:00',
      emoji: '📌',
      title: '銀座ひつまぶし 鰻魚飯',
      link: 'https://maps.app.goo.gl/yQYWXMJu69pR8Uok8'
    },
    {
      time: '12:00',
      emoji: '📌',
      title: '銀座商圈',
      description: '1. 銀座三越 2. 銀座藝術水族館 3. 和光百貨本館 4. 松屋 銀座店 5. UNIQLO銀座店 6. 無印良品銀座 7. GINZA SIX 8. 東急PLAZA 銀座 9. 銀座伊東屋本店 10. 銀座精品名牌 11. 歌舞伎座'
    },
    {
      time: '14:00',
      emoji: '📌',
      title: '遊走東京車站&皇居',
    },
    {
      time: '15:30',
      emoji: '📌',
      title: '東京鐵塔',
      description: '地點：東京鐵塔 (Tokyo Tower) 營業時間：09:00–23:00 (周一至周日)',
      link: 'https://bobbyworld.tw/2024-01-04-2662/'
    },
    {
      time: '18:30',
      emoji: '📌',
      title: '人形町今半 壽喜燒銀座店',
      link: 'https://maps.app.goo.gl/MWy6ztmSEDDewEAN7'
    },
    {
      time: '18:30',
      emoji: '📌',
      title: '人形町今半 壽喜燒銀座店',
      link: 'https://maps.app.goo.gl/MWy6ztmSEDDewEAN7'
    },
    {
      time: '20:00',
      emoji: '📌',
      title: 'ROKUSAN ANGEL Burlesque Tokyo',
      description: '第二場時間:20:00~ Open, 20:30~ Show, 22:00~ 退場',
      link: 'https://rokusanangel.jp/booking/'
    },













  ]
}

// 根據時間設定線條顏色
function getLineColor(time) {
  const [hour] = time.split(':').map(Number)
  if (hour < 12) return '#facc15' // 黃色
  if (hour < 18) return '#60a5fa' // 藍色
  return '#f472b6'                // 深粉色
}
</script>

<template>
  <div style="padding: 20px;">
    <h2>行程規劃 - {{ currentDay }}</h2>

    <div class="day-buttons">
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
        v-for="(item, index) in schedules[currentDay]"
        :key="index"
        class="timeline-item"
      >
        <div
          class="timeline-line"
          :style="{ backgroundColor: getLineColor(item.time) }"
        ></div>
        <div class="timeline-content">
          <div class="time">{{ item.time }}</div>
          <a :href="item.link" target="_blank" class="title-link">
            <div class="title">
              {{ item.emoji }} {{ item.title }}
            </div>
          </a>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.day-buttons {
  margin-bottom: 20px;
}
.day-buttons button {
  margin-right: 10px;
  padding: 6px 14px;
  background: white;
  border: 1px solid #f6d5d8;
  color: #f6d5d8;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}
.day-buttons button.active,
.day-buttons button:hover {
  background-color: #a6dce3;
  color: white;
}

/* 時間軸整體 */
.timeline {
  margin-top: 20px;
  position: relative;
}
.timeline-item {
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;
}
.timeline-line {
  position: absolute;
  top: 0;
  left: 18px;
  width: 4px;
  height: 100%;
  background-color: #ddd;
  z-index: 1;
  border-radius: 2px;
}
.timeline-item::before {
  content: "";
  position: absolute;
  top: 3px;        /* ⭐ 讓小圓點稍微往下，對齊線條中間 */
  left: 13px;      /* ⭐ 讓圓點偏右一點，跟線更貼齊 */
  width: 12px;     /* 🔥 小一點的圓直徑 */
  height: 12px;
  background-color: #781010; /* 深紅色中心 */
  border: 3px solid #fff;    /* 白色外框也縮小一圈 */
  border-radius: 50%;
  z-index: 2;
}

.timeline-content {
  background: none;
  padding: 0;
}
.time {
  color: #60c4fa;
  font-weight: bold;
  font-size: 16px;
}
.title-link {
  text-decoration: none;
}
.title {
  margin: 8px 0 4px;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
}
.title:hover {
  text-decoration: underline;
}
.description {
  margin-bottom: 10px;
  color: #666;
  font-size: 14px;
}
</style>
