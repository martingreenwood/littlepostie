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
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </ion-button>
                    </ion-buttons>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { playCircle } from 'ionicons/icons';

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
  margin-top: 16px;
  z-index: 50;
  position: relative;
  background-color: chocolate;
  color: white;
  border-radius: 50px;
  width: 56px;
  height: 56px;
  font-size: 50px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.library-button svg {
  width: 44px;
  height: 44px;
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
