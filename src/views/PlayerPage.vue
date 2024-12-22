<template>
    <ion-page>
        <div class="back-button">
            <ion-buttons slot="start">
                <ion-button @click="goBack">
                    <ion-icon
                        color="light"
                        shape="round"
                        slot="icon-only"
                        :icon="arrowBackOutline"
                    ></ion-icon>
                </ion-button>
            </ion-buttons>
        </div>
        <div class="restart-button">
            <ion-buttons @click="restartVideo">
                <ion-icon
                    color="light"
                    shape="round"
                    slot="icon-only"
                    :icon="refreshOutline"
                ></ion-icon>
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
