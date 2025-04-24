<script setup>
import { ref } from 'vue'

const currentDay = ref('Day 1')
const schedule = {
  'Day 1': ['東京自由行', '淺草寺', '晴空塔'],
  'Day 2': ['迪士尼海洋一整天'],
  'Day 3': ['搭新幹線前往京都', '參觀清水寺']
}
</script>

<template>
  <div style="padding: 20px;">
    <h2>每日行程</h2>
    <div class="day-buttons">
      <button
        v-for="(items, day) in schedule"
        :key="day"
        @click="currentDay = day"
        :class="{ active: currentDay === day }"
      >
        {{ day }}
      </button>
    </div>
    <ul>
      <li v-for="item in schedule[currentDay]" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.day-buttons button {
  margin-right: 8px;
  padding: 6px 14px;
  background: white;
  border: 1px solid #f6d5d8;
  color: #f6d5d8;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.day-buttons button.active,
.day-buttons button:hover {
  background-color: #a6dce3;
  color: white;
  border-color: #a6dce3;
}
</style>
