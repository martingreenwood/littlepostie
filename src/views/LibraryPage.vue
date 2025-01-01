<template>
    <ion-page class="ion-page">
        <div v-if="isLoading">Loading videos...</div>
        <div v-else-if="hasError">Failed to load videos. Please try again later.</div>
        <div
            v-else
            class="ion-grid"
        >
            <div
                class="video-card"
                v-for="video in videos"
                :key="video.id"
                @click="selectVideo(video.id)"
                :aria-label="`Play ${video.title}`"
                role="button"
            >
                <div class="thumbnail-container">
                    <img
                        :src="video.video_thumbnail.permalink"
                        :alt="video.title"
                        class="video-thumbnail"
                    />
                </div>
                <p>{{ video.title }}</p>
                <button class="play-button">
                    <span>Play Video</span>
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
                </button>
            </div>
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

interface Video {
  id: number;
  title: string;
  video_field: string;
  video_thumbnail: {
    permalink: string;
  };
}

const isLoading = ref(true);
const hasError = ref(false);
const videos = ref<Video[]>([]);

const router = useRouter();
const apiUrl = "https://martingreenwood.test/api/collections/videos/entries";

const fetchVideos = async () => {
  isLoading.value = true;
  hasError.value = false;
  try {
    const response = await axios.get(apiUrl);
    videos.value = response.data.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

const selectVideo = (videoId: any) => {
  const selectedVideo = videos.value.find((v) => v.id === videoId);
  console.log('selectedVideo', selectedVideo);

  if (selectedVideo) {
    router.push({
      name: "Player",
      params: { videoId: selectedVideo.id },
    });
  }
};

onMounted(() => {
  fetchVideos();
});
</script>

<style scoped>
.ion-page {
  background-image: url("../assets/garden-wallpaper.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.ion-grid {
  padding: 30px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  overflow: scroll;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(12, 1fr);
}

.video-card {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  color: black;
  grid-column: span 4;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
}

@media (max-width: 1023px) {
    .video-card {
        grid-column: span 6;
    }
}

@media (max-width: 768px) {
    .video-card {
        grid-column: span 12;
    }
}

.thumbnail-container {
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
}

.thumbnail-container img {
    width: 100%;
    border-radius: 10px;
}

.play-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  background-color: tomato;
  border-radius: 50px;
  padding: 10px 20px;
  width: 100%;
}

.play-button span {
  color: white;
  font-weight: 600;
  text-transform: uppercase;
}

.play-button svg {
  width: 28px;
  height: 28px;
  margin-left: 10px;
}
</style>
