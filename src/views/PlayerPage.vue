<template>
    <ion-page>
        <div class="back-button">
            <ion-buttons slot="start">
                <ion-button @click="goBack">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </ion-button>
            </ion-buttons>
        </div>
        <div class="restart-button">
            <ion-buttons @click="restartVideo">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                        clip-rule="evenodd"
                    />
                </svg>
            </ion-buttons>
        </div>
        <ion-content>
            <div class="video-container">
                <YouTube
                    :src="'https://www.youtube.com/embed/' + videoId"
                    :vars="playerVars"
                    ref="youtubePlayer"
                    width="100%"
                    height="100%"
                />
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { ref, reactive, watch } from "vue";
import { arrowBackOutline, refreshOutline } from 'ionicons/icons';
import YouTube from "vue3-youtube";

const router = useRouter();
const route = useRoute();

// Get the videoId from the route parameters
const videoId = ref(route.params.videoId as string);

// Player configuration
const playerVars = reactive({
  autoplay: 1,
  loop: 1,
  playlist: videoId.value,
  modestbranding: 1, // Hides the YouTube logo
  controls: 0,       // Removes player controls
  showinfo: 0,       // Hides video title
  rel: 0,            // Prevents showing related videos at the end
  fs: 0,             // Disables the fullscreen button
  iv_load_policy: 3, // Hides annotations
  disablekb: 1,      // Disables keyboard controls
});

// Restart the video
const restartVideo = () => {
  const player = document.querySelector("iframe");
  if (player) {
    player.src = player.src; // Reload the video by resetting the iframe's `src`
  }
};

// Watch for changes to the videoId
watch(videoId, () => {
  playerVars.playlist = videoId.value;
});

const goBack = () => {
  router.push({ name: "Library" });
};
</script>

<style scoped>

.overscroll {
  pointer-events: none;}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 56px;
  height: 56px;
  z-index: 999;
  padding: 10px;
  background-color: chocolate;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.restart-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  z-index: 999;
  padding: 10px;
  background-color: chocolate;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-button svg,
.restart-button svg {
  width: 44px;
  height: 44px;
}

.video-container {
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.video-container > div {
  width: 100% !important;
  height: 100% !important;
}

.video-container > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  border: none;
}
</style>
