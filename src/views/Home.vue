<script setup>
</script>

<template>
  <div class="home-wrapper">
    <h1>司馬庫斯團｜日本東京GO!</h1>
    <p class="emoji-hint">🌸 Tokiyo｜🗻 Mount Fuji </p>
  </div>

  <div class="slideshow">
      <img
        :src="images[currentImage]"
        class="slide"
        alt="輪播圖片"
      />
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'





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

onMounted(() => {
  setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length
  }, 3000) // 每3秒換一張
})
</script>



<style scoped>

.home-wrapper {
  text-align: center; /* 整個home-wrapper的文字置中 */
  margin-top: 20px;
}
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}
.emoji-hint {
  margin-top: 10px;
  font-size: 1.2rem;
}

.slideshow {
  width: 100%;
  max-width: 1000px; /* 原本600px，現在放大到1000px */
  height: 600px;      /* 原本350px，現在放大到600px */
  margin: 20px auto;
  overflow: hidden;
  position: relative;
}
.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: opacity 1s ease-in-out;
}
</style>