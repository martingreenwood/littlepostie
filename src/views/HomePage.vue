<template>
    <ion-page color="danger">
        <ion-content>
            <div class="welcome-background">
                <div class="rotating-background">
                    <div
                        v-for="(color, index) in colors"
                        :key="index"
                        :style="{ backgroundColor: color }"
                        class="color-section"
                    ></div>
                </div>
            </div>
            <div class="welcome-container">
                <img
                    src="../assets/austin-logo-2@4x.png"
                    alt="Austin"
                    class="welcome-image"
                    @click="goToLibrary"
                />
                <div class="library-button">
                    <ion-buttons slot="start">
                        <ion-button @click="goToLibrary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                />
                            </svg>
                            <span>Library</span>
                        </ion-button>
                    </ion-buttons>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const colors = ["#FF0000", "#FFA500", "#00FF00", "#FFFF00", "#0000FF", "#800080"];

const goToLibrary = () => {
  router.push({ name: "Library" });
};
</script>

<style scoped>
.welcome-image {
  width: 75vw;
  height: auto;
}

.welcome-image img {
  object-fit: cover;
  z-index: -1;
  transform: scale(6);
  animation: rotate 10s linear infinite;
}

.welcome-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
}

.library-button {
  z-index: 50;
  position: relative;
  background-color: tomato;
  color: white;
  border-radius: 50px;
  padding: 10px 20px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.library-button svg {
  width: 28px;
  height: 28px;
  margin-right: 10px;
}

.library-button span {
  color: white;
  font-weight: 600;
  text-transform: uppercase;
}

.rotating-background {
  position: absolute;
  top: -50%;
  left: -50%;
  width: calc(100vw * 2);
  height: calc(100vh * 2);
  transform: translate(-50vw, -50vw);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  transform-origin: center;
  animation: rotate 20s linear infinite;
  z-index: -1;
}

.color-section {
  width: 100%;
  height: 100%;
}

.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  gap: 2rem;
  padding: 16px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 16px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 24px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
