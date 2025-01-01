<template>
    <ion-page>
        <div class="back-button">
            <ion-buttons slot="start">
                <ion-button @click="goBack">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        class="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <span>Library</span>
                </ion-button>
            </ion-buttons>
        </div>
        <div class="restart-button">
            <ion-buttons slot="start">
                <ion-button @click="restartVideo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        class="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                        />
                    </svg>

                    <span>Restart</span>
                </ion-button>
            </ion-buttons>
        </div>
        <ion-content>
            <div v-if="isLoading">Loading video...</div>
            <div v-else-if="hasError">Failed to load video. Please try again later.</div>
            <div
                v-else
                class="video-player"
            >
                <video
                    :src="video.video_field"
                    autoplay
                    loop
                    class="video-element"
                ></video>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const router = useRouter();
const route = useRoute();
const videoId = route.params.videoId;

const isLoading = ref(true);
const hasError = ref(false);

const video = ref({
  title: "",
  video_field: "",
});

const fetchVideoDetails = async () => {
  isLoading.value = true;
  hasError.value = false;
  try {
    const response = await axios.get(
      `https://martingreenwood.test/api/collections/videos/entries/${videoId}`
    );
    video.value = response.data.data;
  } catch (error) {
    console.error("Error fetching video details:", error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

const restartVideo = () => {
  const video = document.querySelector("video");
  if (video) {
    video.currentTime = 0;
    video.play();
  }
};

const goBack = () => {
  router.push({ name: "Library" });
};

onMounted(() => {
  fetchVideoDetails();
});
</script>

<style scoped>

.overscroll {
  pointer-events: none;
}

ion-button {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: tomato;
  border-radius: 50px;
  padding: 10px 20px;
}

ion-button span {
  color: white;
  text-transform: uppercase;
}

.back-button {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 999;
  margin: 0;
}

.restart-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 999;
  margin: 0;
}

.back-button svg,
.restart-button svg {
  width: 28px;
  height: 28px;
  margin-right: 10px;
}

.video-player {
  width: 100vw;
  height: 100vh;
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: slategray;
}

.video-element {
  width: 90vw;
  border-radius: 15px;
}
</style>
