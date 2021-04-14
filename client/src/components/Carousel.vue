<template>
  <div>
    <div v-if="$apolloData.loading">
      <h1>Loading..</h1>
    </div>

    <div
      v-else
      id="postCarousel"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          v-for="(post, index) in getPosts"
          :key="post._id"
          :data-bs-slide-to="index"
          type="button"
          data-bs-target="#postCarousel"
          class="active"
          aria-current="true"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(post, index) in getPosts"
          :key="post._id"
          class="carousel-item"
          :class="{
            active: index === 0,
          }"
        >
          <img :src="post.imageUrl" class="d-block w-100" alt="..." />
          <div
            class="carousel-caption d-none d-md-block rounded-3"
            style="background-color: rgba(237, 242, 251, 0.3);"
          >
            <h1>{{ post.title }}</h1>
            <h4>
              {{ post.description }}
            </h4>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#postCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#postCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
export default {
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
          }
        }
      `,
    },
  },
};
</script>

<style scoped>
.carousel-item {
  aspect-ratio: auto;
  background-size: cover;
  background-position: center center;
}
.carousel-item h1,
h4 {
  color: black;
}
</style>
