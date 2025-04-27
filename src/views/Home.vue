<script setup>
import { ref, onMounted } from 'vue'

// 輪播圖片清單
const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
  '/images/slide5.jpg',
  '/images/slide6.jpg',
  '/images/slide7.jpg',
  '/images/slide8.jpg'
]

const currentImage = ref(0)

// 網頁載入後每3秒換一張
onMounted(() => {
  setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length
  }, 3000)
})
</script>

<template>
  <div class="home-wrapper">
    <h1>司馬庫斯團｜日本東京GO!</h1>
    <p class="emoji-hint">🌸 Tokyo｜🗻 Mount Fuji</p>

    <div class="slideshow">
      <img
        :src="images[currentImage]"
        class="slide"
        alt="輪播圖片"
      />
    </div>

    <!-- 🖋️ 新增的 Footer -->
    <footer class="footer">
      © 作者 Wendy Fang
    </footer>
  </div>
</template>

<style scoped>
.home-wrapper {
  text-align: center;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Emoji提示 */
.emoji-hint {
  font-size: 18px;
  margin-bottom: 30px;
  color: #f78fb3;
}

/* 輪播區 */
.slideshow {
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin-bottom: 40px;
}

.slide {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}

/* Footer樣式 */
.footer {
  margin-top: auto;
  padding: 12px 0;
  text-align: center;
  font-size: 14px;
  color: #aaa;
  border-top: 1px solid #f6d5d8;
}
</style>
