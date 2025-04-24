<template>
  <div>
    <nav class="navbar">
      <router-link to="/" exact-active-class="active">首頁</router-link>
      <router-link to="/schedule" exact-active-class="active">行程表</router-link>
      <router-link to="/map" exact-active-class="active">地圖</router-link>
      <router-link to="/food" exact-active-class="active">美食推薦</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  background: white;
  padding: 12px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
  gap: 16px;
}
.navbar a {
  padding: 6px 14px;
  border-radius: 20px;
  color: #444;
  transition: all 0.3s ease;
}
.navbar a:hover {
  background-color: #f6d5d8;
  color: #a6dce3;
}
.navbar a.active {
  background-color: #a6dce3;
  color: white;
}
</style>
