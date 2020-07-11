<template>
  <div>
    <app-video-player
      class="video-player-box"
      ref="video-player"
      :options="playerOptions"
    >
    </app-video-player>
    <h1>{{ video.name }}</h1>
    <div v-html="video.description"></div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';

export default {
  name: 'VideoWatch',
  components: {
    appVideoPlayer: videoPlayer,
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    video() {
      return this.$store.state.videos.find((vid) => vid.id === Number(this.id));
    },
    playerOptions() {
      return {
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: this.video.videoUrl
        }],
        poster: this.video.thumbnail
      };
    },
  },
};
</script>

<style>
.video-player-box .video-js {
  margin: auto;
}
</style>
