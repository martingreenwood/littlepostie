<template>
    <ion-page class="ion-page">
        <ion-grid class="ion-grid">
            <ion-row>
                <ion-col
                    size="12"
                    size-sm="3"
                    class="video-card"
                    v-for="video in videos"
                    :key="video.id"
                    @click="selectVideo(video.id)"
                >
                    <div class="thumbnail-container">
                        <img
                            :src="getThumbnail(video.id)"
                            :alt="video.title"
                            class="video-thumbnail"
                        />
                    </div>
                    <p>{{ video.title }}</p>
                </ion-col>
            </ion-row>
        </ion-grid>
    </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

// Example video list
const videos = [
  { id: "YcRNHrKTSeQ", title: "Can I Vroom in The Vroomster" },
  { id: "K4zsa0alYMM", title: "Mojo Swap Tops Intro" },
  { id: "pZw9veQ76fo", title: "5 Little Ducks" },
  { id: "TjmGTbNLj6Q", title: "10 Little Dinosaurs" },
  { id: "lm74Gv3tA78", title: "10 Little Aeroplanes" },
  { id: "oLnd4G7dsHg", title: "Wheels on the Bus" },
  { id: "rHtq5GIIUV8", title: "5 Little Ghosts" },
  { id: "BpEAhgoitfE", title: "ABC Boo" },
  { id: "OekqqZj5kWw", title: "Chuggington Theme Song" },
  { id: "4BzCW7pt37s", title: "Yaka Dee Theme Song" },
  { id: "REBUEe3mtXo", title: "Go Jetters Theme Song" },
  { id: "1UdI_eoDPKQ", title: "Paw Patrol Theme Song" },
  { id: "vC0u5Bi6hos", title: "Creature Report Theme Song" },
  { id: "kCeBJWEyVFM", title: "Octonauts: Above & Beyond - Opening Theme" },
  { id: "BQig2gkFfQU", title: "Sail the Seven Seans" },
  { id: "rPocVxqp6j0", title: "Super Eights Assemble" },
  { id: "J7UyW0iW5hk", title: "Hello Hello" },
  { id: "dXoxuEkoZTs", title: "10 Little Bicycles" },
  { id: "B-LDOdNGGFI", title: "Show Me Show Me Theme Song" },
  { id: "VsgpUHUYuJI", title: "Move!" },
  { id: "RuER69Upyhs", title: "Spidey and his Amazing Friends Theme Song" },
  { id: "6916kVhbEZw", title: "Skidamarink A Dink A Dink" },
  { id: "BBcP51ILXCY", title: "Love Monster Theme Song" },
  { id: "qMGqiyYasiE", title: "Poatman Pat SDS Theme Song" },
  { id: "J2zFM34WyWU", title: "Bitz & Bob Theme Song" },
  { id: "wVwx1-g0EB8", title: "Raa Raa Theme Song" },
];

const router = useRouter();

const selectVideo = (videoId: string) => {
  router.push({ name: "Player", params: { videoId } });
};

const getThumbnail = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
};
</script>

<style scoped>
.ion-page {
  background-image: url("../assets/wp10739516-cbeebies-wallpapers.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.ion-grid {
  padding: 20px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  overflow: scroll;
}

.video-card {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  color: black;
}

.thumbnail-container {
    overflow: hidden;
    border-radius: 10px;
}

ion-row {
  display: flex;
  gap: 40px;
  justify-content: center;
}

ion-item {
  text-align: center;
}
</style>
